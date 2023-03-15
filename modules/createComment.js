import { formToNullStyle } from './formToNullStyle.js'
import { getDateMassage } from './getDateMessage.js'

export function createComment(comment) {
    const container = document.querySelector('.comments__content')

    const commentContainer = document.createElement('div')
    commentContainer.className = 'comments__comment comment'
    commentContainer.dataset.id = comment.id

    const date = new Date(comment.date)
    const dateMessage = getDateMassage(date)

    commentContainer.innerHTML = `
        <div class="comment__header">
            <h2 class="comment__name">${comment.name} <span class="comment__date">${dateMessage}</span></h2>

            <button class="comment__button comment__button_like" data-action="like">
                <svg class="comment__icon comment__icon_like" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="${comment.isLiked ? 'full' : 'evenodd'}" clip-rule="evenodd" d="M7.78125 4C4.53699 4 2 6.81981 2 10.1559C2 11.8911 2.27768 13.32 3.31283 14.8234C4.3005 16.258 5.9429 17.7056 8.49134 19.6155L12 22L15.5084 19.6158C18.057 17.7058 19.6995 16.258 20.6872 14.8234C21.7223 13.32 22 11.8911 22 10.1559C22 6.81982 19.463 4 16.2188 4C14.5909 4 13.1818 4.66321 12 5.86323C10.8182 4.66321 9.40906 4 7.78125 4ZM7.78125 6C5.77551 6 4 7.7855 4 10.1559C4 10.7049 4.03107 11.1875 4.10853 11.6325C4.23826 12.378 4.49814 13.0182 4.96014 13.6893C5.74532 14.8297 7.14861 16.11 9.69156 18.0157L12 19.7494L14.3084 18.0157C16.8514 16.11 18.2547 14.8297 19.0399 13.6893C19.7777 12.6176 20 11.6245 20 10.1559C20 7.7855 18.2245 6 16.2188 6C14.9831 6 13.8501 6.58627 12.8033 7.99831C12.6147 8.25274 12.3167 8.40277 12 8.40277C11.6833 8.40277 11.3853 8.25274 11.1967 7.99831C10.1499 6.58627 9.01689 6 7.78125 6Z" fill="#008000"/>
                </svg>
            </button>

            <button class="comment__button comment__button_delete" data-action="delete">
                <img src="./icons/delete.svg" alt="delete" class="comment__icon comment__icon_delete">
            </button>
        </div>

        <div class="comment__content">
            <p class="comment__text">${comment.text}</p>
        </div>
    `

    container.prepend(commentContainer)
    formToNullStyle()
}