export default function selectorFunction() {
    const containers = document.querySelectorAll<HTMLElement>(".selector");
    if (!containers) return;
    containers &&
        containers.forEach(container => {
            const list = container.querySelector<HTMLElement>(".selector__list");
            if (!list) return;
            list.addEventListener("click", ({ target }: Event) => {
                const item = (target as HTMLElement).closest<HTMLElement>(".selector__item");
                const selectedElement = container.querySelector<HTMLElement>(".selector__item");
                if (item && selectedElement) {
                    list.append(selectedElement);
                    item.classList.add("selected");
                    container.prepend(item);
                }
            });
        });
}
