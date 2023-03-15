import { showMessage } from "./showMessage.js"

export function validateForm(field) {

    switch (true) {
        case field.type == 'date' && new Date(field.value) > new Date():
            showMessage(field, false, 'Дата комментария не может быть позже чем сегодня')
            return false

        case field.type == 'date' && field.value != '':
            showMessage(field, true)
            return true

        case field.type == 'date':
            return true

        case field.value.trim() == '':
            showMessage(field, false, 'Обязательное поле для заполнения')
            return false

        case field.tagName == 'INPUT' && /\d/g.test(field.value):
            showMessage(field, false, 'Имя не может содержать цифры')
            return false

        case field.tagName == 'INPUT' && field.value.trim().length > 12:
            showMessage(field, false, 'Имя не может быть больше 12 символов')
            return false

        default:
            showMessage(field, true)
            return true
    }
}