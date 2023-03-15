export function getCommentId() {
    const id = Math.max(...Object.keys(localStorage)) + 1

    if (isFinite(id)) {
        return id
    } else return 0
}