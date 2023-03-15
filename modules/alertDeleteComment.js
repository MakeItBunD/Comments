import { emptyCommentsMessage } from "./emptyCommentsMessage.js";

export function alertDeleteComment(commentContainer) {
    const container = document.querySelector('.comments__content');
    const id = commentContainer.dataset.id
    const comment = JSON.parse(localStorage.getItem(id))

    const alertContainer = document.createElement('div')
    alertContainer.className = 'alert-delete-comment'

    const background = document.createElement('div')
    background.className = 'unclicked-bg'

    const appContainer = document.querySelector('.app')

    alertContainer.innerHTML = `
        <h2>Вы уверены что хотите удалить комментарий?</h2>
        <div class="alert-delete-comment__buttons">
            <button class="alert-delete-comment__button alert-delete-comment__button_yes" data-isdelete="yes">Удалить</button>
            <button class="alert-delete-comment__button alert-delete-comment__button_no" data-isDelete="no">Отмена</button>
        </div>
    `

    appContainer.append(background, alertContainer)

    alertContainer.addEventListener('click', event => {

        if (event.target.tagName != 'BUTTON') return

        const button = event.target

        if (button.dataset.isdelete == 'yes') {
            commentContainer.remove()
            localStorage.removeItem(comment.id)

            if (!container.innerHTML) {
                emptyCommentsMessage()
            }
        }

        alertContainer.remove()
        background.remove()
    })
}