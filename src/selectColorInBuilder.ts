export function selectColorInBuilder() {
    const selectContainer = document.querySelector<HTMLElement>(".builder__select-color");
    const seatsImagesContainers = document.querySelectorAll<HTMLElement>(".seats__images");

    if (!selectContainer) return;
    selectContainer.addEventListener("click", (e: Event) => {
        const target = (e.target as HTMLElement).closest(".form-group__item") as HTMLElement;
        if (!target) return;
        const index = Number(target.dataset.index);
        console.log("🚀 ~ index", index);

        seatsImagesContainers.forEach(container => {
            const targetImage = container.querySelector(`.seats__image[data-n="${index}"]`);
            console.log("🚀 ~ targetImage", container, targetImage);
            if (!targetImage) return;
            container.append(targetImage);
        });
    });
}
