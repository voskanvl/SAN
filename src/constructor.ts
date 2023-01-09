import { createFakeData } from "./fakeData";
import { related_options_value, product_option_value, Option } from "./optionInterface";

// const itemToLi = (images: string, interval: number = 1000) => {
//     console.log("🚀 ~ images", images);
//     const stringImages = images;
//     console.log("🚀 ~ stringImages", stringImages);
//     return `<li class="splide__slide" data-splide-interval="${interval}">${stringImages}</li>`;
// };

// export const splideHTML = (idname: string, arr: string[], interval: number = 1000): HTMLElement => {
//     const section = document.createElement("section");
//     section.classList.add("splide");
//     section.setAttribute("id", idname);
//     section.innerHTML = `<div class="splide__track"><ul class="splide__list">${arr
//         .map(e => itemToLi(e, interval))
//         .join("")}</ul><div>`;
//     return section;
// };

// export const getCategory =
//     (options: { [key: string]: Option }) =>
//     (index: number): Option | undefined => {
//         const types = Object.values(options);
//         if (!types) throw Error("option_data_san isn't correct");
//         const type = types.find(({ sort_order }) => sort_order === String(index));
//         return type;
//     };

// export const getTypes = (cat: Option) => Object.values(cat.product_option_value);

// export const getColorTypes = (option: product_option_value): related_options_value[] => {
//     const res = Object.values(option.related_options)[0];
//     return res.values;
// };

// export const getRelatedOptionsValues = (product: product_option_value): related_options_value[] =>
//     Object.values(product.related_options)
//         .map(e => e.values)
//         .flat();

// export const renderColorSet = (arr: related_options_value[]): HTMLElement => {
//     // <div class="builder__select-color">
//     const el = document.createElement("div");
//     el.classList.add("form-group");
//     el.setAttribute("color", "color");
//     const inner = `
//             ${arr
//                 .map(e => {
//                     return `
//                 <div class="form-group__item" style="--color:${e.text}" data-index="${e.option_value_id}">
//                     <input type="radio" name="color1" id="color1300" value="${e.text}">
//                     <div class="form-group__color"></div>
//                 </div>
//                 `;
//                 })
//                 .join("")}

//     `;
//     el.innerHTML = inner;
//     return el;
// };

// export const getArrColorsByIndex = (index: number) =>{

//    return Object.entries(Object.values(chairbacks[index].related_options)).map(([_, val]) => val)[0]
//         .values;
// }

// export const mountColorSet = (root: HTMLElement, colorSet: HTMLElement) => {
//     root.innerHTML = "";
//     root.append(colorSet);
// };

// export const updateColorSet = (newIndex: number) => {
//     const arrColors = getArrColorsByIndex(newIndex);
//     const colors = renderColorSet(arrColors);
//     const root = document.querySelector<HTMLElement>("#color-set");
//     if (!root) return;
//     mountColorSet(root, colors);
// };

// export const restoreActiveColorControl = () => {
//     const activeSeat = document.querySelector<HTMLElement>(
//         ".splide__slide.is-active.is-visible .seats__image:last-child",
//     ); // получили последний он же активный li из текущего слайда

//     if (!activeSeat) throw Error("некорректные данные в HTML");
//     const activeSeatIndex = activeSeat.dataset.n;
//     if (!activeSeatIndex) throw Error("некорректные атрибуты контейнера изображения (li)");

//     const relatedColorSelected = document.querySelector<HTMLInputElement>(
//         `.form-group > .form-group__item[data-index="${activeSeatIndex}"] > input`,
//     );

//     if (!relatedColorSelected) throw Error("отсутствует input элемент в переключаете цветов");

//     relatedColorSelected.checked = true;
// };

// export const initialMountColorSet = () => {
//     updateColorSet(0);
// };

export class CreateConstructor {
    constructor(public option_data_san: { [key: string]: Option }) {
        this.getCategory = this.getCategory.bind(this);
        this.splideHTML = this.splideHTML.bind(this);
        this.initialMountColorSet = this.initialMountColorSet.bind(this);
        this.getArrColorsByIndex = this.getArrColorsByIndex.bind(this);
        this.updateColorSet = this.updateColorSet.bind(this);
    }
    itemToLi(images: string, interval: number = 1000) {
        const stringImages = images;
        return `<li class="splide__slide" data-splide-interval="${interval}">${stringImages}</li>`;
    }

    splideHTML(idname: string, arr: string[], interval: number = 1000): HTMLElement {
        const section = document.createElement("section");
        section.classList.add("splide");
        section.setAttribute("id", idname);
        const itemToLi = this.itemToLi;
        const convertArrToLi = (e: string) => {
            return itemToLi(e, interval);
        };
        section.innerHTML = `<div class="splide__track"><ul class="splide__list">${arr
            .map(convertArrToLi)
            .join("")}</ul><div>`;
        return section;
    }

    getCategory() {
        const option = this.option_data_san;
        return (index: number): Option | undefined => {
            const types = Object.values(option);
            if (!types) throw Error("option_data_san isn't correct");
            const type = types.find(({ sort_order }) => sort_order === String(index));
            return type;
        };
    }

    getTypes(cat: Option) {
        return Object.values(cat.product_option_value);
    }

    getColorTypes(option: product_option_value): related_options_value[] {
        const res = Object.values(option.related_options)[0];
        return res.values;
    }

    getRelatedOptionsValues(product: product_option_value): related_options_value[] {
        return Object.values(product.related_options)
            .map(e => e.values)
            .flat();
    }

    renderColorSet(arr: related_options_value[]): HTMLElement {
        // <div class="builder__select-color">
        const el = document.createElement("div");
        el.classList.add("form-group");
        el.setAttribute("color", "color");
        const inner = `
                ${arr
                    .map(e => {
                        return `
                    <div class="form-group__item" style="--color:${e.text}" data-index="${e.option_value_id}">
                        <input type="radio" name="color1" id="color1300" value="${e.text}">
                        <div class="form-group__color"></div>
                    </div>
                    `;
                    })
                    .join("")}
            
        `;
        el.innerHTML = inner;
        return el;
    }

    getArrColorsByIndex(index: number) {
        const { chairbacks } = createFakeData(this.option_data_san);
        return Object.entries(Object.values(chairbacks[index].related_options)).map(
            ([_, val]) => val,
        )[0].values;
    }

    mountColorSet(root: HTMLElement, colorSet: HTMLElement) {
        root.innerHTML = "";
        root.append(colorSet);
    }

    updateColorSet(newIndex: number) {
        const arrColors = this.getArrColorsByIndex(newIndex);
        const colors = this.renderColorSet(arrColors);
        const root = document.querySelector<HTMLElement>("#color-set");
        if (!root) return;
        this.mountColorSet(root, colors);
    }

    restoreActiveColorControl() {
        const activeSeat = document.querySelector<HTMLElement>(
            ".splide__slide.is-active.is-visible .seats__image:last-child",
        ); // получили последний он же активный li из текущего слайда

        if (!activeSeat) throw Error("некорректные данные в HTML");
        const activeSeatIndex = activeSeat.dataset.n;
        if (!activeSeatIndex) throw Error("некорректные атрибуты контейнера изображения (li)");

        const relatedColorSelected = document.querySelector<HTMLInputElement>(
            `.form-group > .form-group__item[data-index="${activeSeatIndex}"] > input`,
        );

        if (!relatedColorSelected) throw Error("отсутствует input элемент в переключаете цветов");

        relatedColorSelected.checked = true;
    }

    initialMountColorSet() {
        this.updateColorSet(0);
    }
}
