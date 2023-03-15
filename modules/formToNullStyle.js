export function formToNullStyle() {
    const form = document.querySelector('.form')
    const formBlocks = [...form.querySelectorAll('.form__input')]

    formBlocks.map(block => {
        const successIcon = block.querySelector('.form__success-icon')
        successIcon.hidden = true
        
        const field = block.querySelector('input') ?? block.querySelector('textarea')
        field.classList.remove('success')
        field.classList.remove('has-value')
    })
}