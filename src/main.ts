import { option1 } from "./fakeData";
import { Option } from "./optionInterface";

import "./sass/style.sass";
import "@splidejs/splide/css";
import toggleSidePanel from "./toggleSlidePanel";
import slides from "./slides";
import selector from "./form/selector";
import bookingOrder from "./form/booking-order";
import { tabs, storeTabs } from "./tabs";
import hideTargetLowerFooter from "./hideTargetUpperFooter";
import formOrder from "./form/form-order";
import { selectColorInBuilder } from "./selectColorInBuilder";
import { CreateConstructor } from "./constructor";

declare global {
    interface Window {
        option_data_san: { [key: string]: Option };
    }
}
// window.addEventListener("DOMContentLoaded", () => {
//----CONSTRUCTOR-------------------------------------------------------------

// console.log("window.option_data_san", window.option_data_san);
const option_data_san_geted = option1 as unknown as { [key: string]: Option };
// const option_data_san_geted = window.option_data_san;

const constructor = new CreateConstructor(option_data_san_geted);

const { splideHTML, initialMountColorSet, getCategory, getTypes, getColorTypes } = constructor;

const selectType = getCategory();
const backs = selectType(0); //получили спинки
const legs = selectType(1); //получили ножки

if (!backs || !legs) throw Error("ошибка получения категории");

const backTypes = getTypes(backs); //получили типы спинок
const legsTypes = getTypes(legs); //получили типы ножек, они же сами ножки
console.log("🚀 ~ legsTypes", legsTypes);

const sec = splideHTML(
    "seat",
    backTypes.map(e => {
        return `<ul class="seats__images">${getColorTypes(e)
            .map(
                v =>
                    `<li class="seats__image" data-n="${v.option_value_id}"><img src="${v.image}" /></li>`,
            )
            .join("")}</ul>`;
    }),
);

const legsSplide = splideHTML(
    "legs",
    legsTypes.map(e => {
        return `<img src="${e.image}" />`;
    }),
);

const placemountBacks = document.querySelector(".builder__slider.seats");
const placemountColors = document.querySelector(".builder__container");
const placemountLegs = document.querySelector(".builder__slider.legs");

!!placemountBacks && placemountBacks.append(sec);
!!placemountLegs && placemountLegs.append(legsSplide);

const rootElementForColorSet = document.createElement("div");
rootElementForColorSet.classList.add("builder__select-color");
rootElementForColorSet.setAttribute("id", "color-set");
!!placemountColors && placemountColors.append(rootElementForColorSet);

initialMountColorSet();
//----------------------------------------------------------------------------

slides(option_data_san_geted);

toggleSidePanel(".side-panel", "#trigger");

selector();

tabs();
storeTabs.subscribe((current: string) => {
    console.log("🚀 ~ current", current);
    const allListItems = Array.from(document.querySelectorAll<HTMLElement>(".list__item"));

    if (!current)
        return allListItems.forEach(element => {
            element.setAttribute("active", "active");
        });

    allListItems.forEach(element => {
        const dataIndex = element.dataset.index;
        if (dataIndex === current) element.setAttribute("active", "active");
        else element.removeAttribute("active");
    });
    // setTimeout(hideTargetLowerFooter, 1000);
});

bookingOrder();

// hideTargetLowerFooter();
// window.addEventListener("resize", hideTargetLowerFooter);

formOrder();

selectColorInBuilder();
// });
// window.option_data_san = option_data_san;
