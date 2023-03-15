export function getDateMassage(date) {
    let dateMessage
    const now = new Date()

    switch (true) {
        case now.getDate() == date.getDate():
            dateMessage = ` (Сегодня, ${date.getHours()}:${date.getMinutes()})`
            break

        case now.getDate() == date.getDate() + 1:
            dateMessage = ` (Вчера, ${date.getHours()}:${date.getMinutes()})`
            break

        default:
            dateMessage = `
                (${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}:` +
                `${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}:` +
                `${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()})
            `
    }

    return dateMessage
}