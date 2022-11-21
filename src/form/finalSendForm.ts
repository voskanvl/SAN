const WARNNING_COLOR = "#f51";
const OK_IMAGE = "../assets/svg/send.svg";
const WARNING_TEXT = "ЧТО-ТО НА СЕРВЕРЕ ПОШЛО НЕ ТАК!";

function renderOkScreen(form: HTMLElement) {
    const img = document.createElement("img");
    img.src = OK_IMAGE;
    form.innerHTML = "";
    form.append(img);
}
function renderErrorScreen(form: HTMLElement) {
    const caption = document.createElement("h1");
    caption.style.color = WARNNING_COLOR;
    caption.innerHTML = WARNING_TEXT;
    caption.classList.add("warnning");
    form.append(caption);
    setTimeout(() => {
        caption.remove();
    }, 3000);
}

export default { renderOkScreen, renderErrorScreen };
