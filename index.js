import { validateForm } from './modules/validateForm.js'
import { createComment } from './modules/createComment.js'
import { getCommentId } from './modules/getCommentId.js'
import { emptyCommentsMessage } from './modules/emptyCommentsMessage.js'
import { alertDeleteComment } from './modules/alertDeleteComment.js';

const form = document.querySelector('.form');
const container = document.querySelector('.comments__content');


(function showCommentsFromLS() {
    Object.values(localStorage).map(comment => createComment(JSON.parse(comment)))
    
    if (!container.innerHTML) {
        emptyCommentsMessage()
    }
}())


form.addEventListener('focus', event => {
    const field = event.target

    if (field.tagName != 'TEXTAREA' && field.tagName != 'INPUT') return

    field.classList.remove('error')
    field.classList.remove('success')
    field.nextElementSibling.innerHTML = null
}, true)

form.addEventListener('focusout', event => {
    validateForm(event.target)
})


const createButton = form.querySelector('.form__button')

createButton.addEventListener('click', event => {
    event.preventDefault()

    const inputName = form.querySelector('.form__input_name input')
    const inputText = form.querySelector('.form__input_text textarea')
    const inputDate = form.querySelector('.form__input_date input')

    validateForm(inputName)
    validateForm(inputText)
    validateForm(inputDate)

    if (!validateForm(inputName) || !validateForm(inputText) || !validateForm(inputDate)) return

    const now = new Date()

    const dateValue = inputDate.value ? 
                    new Date(inputDate.value).setHours(now.getHours(), now.getMinutes())
                    : new Date()

    const comment = {
        id: getCommentId(),
        name: inputName.value,
        text: inputText.value,
        date: dateValue,
        isLiked: false
    }

    localStorage.setItem(comment.id, JSON.stringify(comment))
    
    inputName.value = inputText.value = inputDate.value = ''

    emptyCommentsMessage(false)
    createComment(comment)
})


container.addEventListener('click', event => {

    if (!event.target.closest('.comment__button')) return

    const button = event.target.closest('.comment__button')
    const commentContainer = button.closest('.comment')

    const id = commentContainer.dataset.id
    const comment = JSON.parse(localStorage.getItem(id))

    if (button.dataset.action == 'delete') {
        alertDeleteComment(commentContainer)
    } else {
        comment.isLiked = !comment.isLiked

        const likeIconPath = button.querySelector('path')
        const likeIconSvg = button.querySelector('svg')

        if (comment.isLiked) {
            likeIconPath.setAttribute('fill-rule', 'full')
        } else likeIconPath.setAttribute('fill-rule', 'evenodd')
        
        likeIconSvg.style.width = '130%'

        setTimeout(() => {
            likeIconSvg.style.width = ''
        }, 100)

        localStorage.setItem(comment.id, JSON.stringify(comment))
    }
})