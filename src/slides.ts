import { Option } from "./optionInterface";
import { CreateConstructor } from "./constructor";
// import { restoreActiveColorControl, updateColorSet } from "./constructor";
import { MSplides } from "./initSlides";

export default function slides(option_data_san: { [key: string]: Option }) {
    const splidesInstance = new MSplides();
    if (document.querySelector("#chairtypes")) {
        splidesInstance.add("#chairtypes", {
            type: "loop",
            autoplay: false,
            perMove: 1,
            direction: "rtl",
            arrows: false,
            focus: "center",
            pagination: false,
            autoWidth: true,
        });
        const chairtypesButtons = document.querySelectorAll(".chairtypes__button");
        chairtypesButtons[0].addEventListener("click", () => {
            splidesInstance.instances["#chairtypes"].go("<");
        });
        chairtypesButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#chairtypes"].go(">");
        });
    }
    if (document.querySelector("#blog-slider")) {
        splidesInstance.add("#blog-slider", { type: "loop", arrows: false, pagination: false });

        const blogButtons = document.querySelectorAll(".blog__button");
        const blogContents = document.querySelectorAll(".blog__content");

        const removeActive = () => {
            blogContents.forEach(e => e.removeAttribute("active"));
        };
        const setActive = (index: number) => {
            removeActive();
            blogContents.forEach(e => {
                if (e.getAttribute("data-id") === String(index)) e.setAttribute("active", "active");
            });
        };

        blogButtons[0].addEventListener("click", () => {
            splidesInstance.instances["#blog-slider"].go(">");
            setActive(splidesInstance.instances["#blog-slider"].index);
        });
        blogButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#blog-slider"].go("<");
            removeActive();
            setActive(splidesInstance.instances["#blog-slider"].index);
        });

        splidesInstance.instances["#blog-slider"].on("moved", () =>
            setActive(splidesInstance.instances["#blog-slider"].index),
        );

        setActive(0);
    }

    /* BUILDER */

    //---- TEST ------------------------------------
    // const builderId = "#seat";
    // if (document.querySelector(builderId)) {
    //     splidesInstance.add(builderId, {
    //         type: "loop",
    //         arrows: false,
    //         pagination: false,
    //         focus: "center",
    //     });
    //     const tmp = splidesInstance.instances[builderId];
    //     tmp.on("move", updateColorSet);
    // }

    //_____________________________________________________________
    const BUILDER_ID = "#seat";
    if (document.querySelector(BUILDER_ID)) {
        const { restoreActiveColorControl, updateColorSet } = new CreateConstructor(
            option_data_san,
        );

        splidesInstance.add(BUILDER_ID, {
            type: "loop",
            arrows: false,
            pagination: false,
            focus: "center",
        });

        const seatButtons = document.querySelectorAll<HTMLElement>(".seat__controls > .next");

        seatButtons[0].addEventListener("click", () => {
            splidesInstance.instances[BUILDER_ID].go(">");
        });
        seatButtons[1].addEventListener("click", () => {
            splidesInstance.instances[BUILDER_ID].go("<");
        });

        const tmp = splidesInstance.instances[BUILDER_ID];
        tmp.on("move", updateColorSet);
        tmp.on("moved", restoreActiveColorControl);
    }

    if (document.querySelector("#legs")) {
        splidesInstance.add("#legs", { type: "loop", arrows: false, pagination: false });

        const legsButtons = document.querySelectorAll<HTMLElement>(".legs__controls > .next");

        legsButtons[0].addEventListener("click", () => {
            splidesInstance.instances["#legs"].go(">");
        });
        legsButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#legs"].go("<");
        });
    }

    return splidesInstance;
}
