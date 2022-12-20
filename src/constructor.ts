import { chairbacks } from "./fakeData";
import {
    Option,
    related_options,
    related_options_value,
    product_option_value,
} from "./optionInterface";

const itemToLi = (item: string[], interval: number = 1000) => {
    return `<li class="splide__slide" data-splide-interval="${interval}">${item}</li>`;
};

export const splideHTML = (
    idname: string,
    arr: string[][],
    interval: number = 1000,
): HTMLElement => {
    const section = document.createElement("section");
    section.classList.add("splide");
    section.setAttribute("id", idname);
    section.innerHTML = `<div class="splide__track"><ul class="splide__list">${arr
        .map(e => itemToLi(e, interval))
        .join("")}</ul><div>`;
    return section;
};

// export const getBacks = (obj: Record<string, Option>): related_options_value[] => {
//     const sortedOption = Object.entries(obj)
//         .sort((a, b) => +a[1].option_id - +b[1].option_id)
//         .map(([_, value]) => value);
//     const backs = Object.values(sortedOption[1].product_option_value);
//     return backs;
// };

export const getRelatedOptionsValues = (product: product_option_value): related_options_value[] =>
    Object.values(product.related_options)
        .map(e => e.values)
        .flat();

export const renderColorSet = (arr: related_options_value[]): HTMLElement => {
    // <div class="builder__select-color">
    const el = document.createElement("div");
    el.classList.add("form-group");
    el.setAttribute("color", "color");
    const inner = `
            ${arr
                .map((e, i) => {
                    return `
                <div class="form-group__item" style="--color:${e.text}" data-index="${i}">
                    <input type="radio" name="color1" id="color1300" value="${e.text}">
                    <div class="form-group__color"></div>
                </div>
                `;
                })
                .join("")}
        
    `;
    el.innerHTML = inner;
    return el;
};

export const getArrColorsByIndex = (index: number) =>
    Object.entries(Object.values(chairbacks[index].related_options)).map(([_, val]) => val)[0]
        .values;

export const mountColorSet = (root: HTMLElement, colorSet: HTMLElement) => {
    root.innerHTML = "";
    root.append(colorSet);
};

export const updateColorSet = (newIndex: number) => {
    const arrColors = getArrColorsByIndex(newIndex);
    // const arrColors = Object.entries(chairbacks[newIndex].related_options).map(
    //     ([_, val]) => val,
    // )[0].values;
    const colors = renderColorSet(arrColors);
    const root = document.querySelector<HTMLElement>("#color-set");
    if (!root) return;
    mountColorSet(root, colors);
};

export const initialMountColorSet = () => {
    updateColorSet(0);
};
