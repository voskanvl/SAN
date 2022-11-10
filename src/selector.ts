export default function selectorFunction() {
    const container = document.querySelector<HTMLElement>(".selector");
    const list = document.querySelector<HTMLElement>(".selector__list");
    if (!container || !list) return;
    list.addEventListener("click", ({ target }: Event) => {
        const item = (target as HTMLElement).closest<HTMLElement>(".item");
        const selectedElement = document.querySelector<HTMLElement>(".selector > .selector__item");
        if (item && item.classList.contains("item") && selectedElement) {
            list.append(selectedElement);
            item.classList.add("selected");
            container.prepend(item);
        }
    });
}
