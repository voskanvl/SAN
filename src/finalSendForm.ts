function renderOkScreen(form: HTMLElement) {
    const img = document.createElement("img");
    img.src = "../assets/svg/send.svg";
    form.innerHTML = "";
    form.append(img);
}
function renderErrorScreen(form: HTMLElement) {
    const caption = document.createElement("h1");
    caption.style.color = "#f51";
    caption.innerText = "ЧТО-ТО ПОШЛО НЕ ТАК!";
    form.append(caption);
    setTimeout(() => {
        caption.remove();
    }, 3000);
}

export default { renderOkScreen, renderErrorScreen };
