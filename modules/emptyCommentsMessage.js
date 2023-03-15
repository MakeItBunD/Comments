export function emptyCommentsMessage(action = true) {
    const container = document.querySelector('.comments__content')
    
    if (action) {
        const emptyTitle = document.createElement('h2')
        emptyTitle.classList.add('comments__title')
        emptyTitle.innerHTML = 'Комментариев пока нет';
    
        container.append(emptyTitle)
    } else {
        const emptyTitle = container.querySelector('.comments__title')

        if (emptyTitle) {
            emptyTitle.remove()
        }
    }
}