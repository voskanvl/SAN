export function setFieldErrored(el: HTMLInputElement) {
    el.setAttribute("errored", "errored");
}
export function unsetFieldErrored(el: HTMLInputElement) {
    el.removeAttribute("errored");
}

export default { set: setFieldErrored, unset: unsetFieldErrored };
