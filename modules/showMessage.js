export function showMessage(field, isSuccess, text) {

    if (field.tagName != 'TEXTAREA' && field.tagName != 'INPUT') return

    const container = field.closest('.form__input')
    const small = container.querySelector('small')
    const successIcon = container.querySelector('.form__success-icon')

    if (isSuccess) {

        field.classList.remove('error')
        field.classList.add('success')

        successIcon.hidden = false
        small.innerHTML = null
    } else {
        
        field.classList.remove('success')
        field.classList.add('error')

        successIcon.hidden = true
        small.innerHTML = text
    }
}