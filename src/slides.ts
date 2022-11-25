import { MSplides } from "./initSlides";

export default function slides() {
    // const ranges = [0, 425, 768, 1024, 1440, Infinity];
    // const rangesTabs = [0, 468, 1323, Infinity];
    // // const rangesProduct = [0, 468, 1323, Infinity];

    // function matchRange(x: number, arr: number[]) {
    //     let res;
    //     arr = arr.sort((a, b) => a - b);
    //     for (let index = 0; index < arr.length - 1; index++) {
    //         const up = x >= arr[index];
    //         const down = x < arr[index + 1];
    //         if (up && down) res = index;
    //     }
    //     return res;
    // }

    /* RESIZE */
    // function debounce(f: Function, ms: number) {
    //     let isCooldown = false;
    //     return function () {
    //         if (isCooldown) return;
    //         f(arguments);
    //         isCooldown = true;
    //         setTimeout(() => (isCooldown = false), ms);
    //     };
    // }

    // window.addEventListener(
    //     "resize",
    //     debounce(() => {
    //         const perPage = matchRange(innerWidth, ranges);

    //         splidesInstance.instances["#service-package"] &&
    //             (splidesInstance.instances["#service-package"].options.perPage = perPage);
    //         splidesInstance.instances["#service-package"] &&
    //             splidesInstance.instances["#service-package"].refresh();
    //     }, 200),
    // );

    // window.addEventListener(
    //     "resize",
    //     debounce(() => {
    //         const perPage = 2 + (matchRange(innerWidth, rangesTabs) || 0);
    //         console.log("🚀 ~ perPage", perPage);

    //         splidesInstance.instances["#tabs"] &&
    //             (splidesInstance.instances["#tabs"].options.perPage = perPage);
    //         splidesInstance.instances["#tabs"] && splidesInstance.instances["#tabs"].refresh();
    //     }, 200),
    // );

    // let perPage = matchRange(innerWidth, ranges);
    // splidesInstance.instances["#service-package"] &&
    //     (splidesInstance.instances["#service-package"].options.perPage = perPage || 0 + 1);
    // splidesInstance.instances["#service-package"] &&
    //     splidesInstance.instances["#service-package"].refresh();

    // perPage = 2 + (matchRange(innerWidth, rangesTabs) || 0);
    // console.log("🚀 ~ perPage", matchRange(innerWidth, rangesTabs), perPage);
    // splidesInstance.instances["#tabs"] &&
    //     (splidesInstance.instances["#tabs"].options.perPage = perPage);
    // splidesInstance.instances["#tabs"] && splidesInstance.instances["#tabs"].refresh();

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
            console.log(splidesInstance.instances["#blog-slider"].index);
        });
        blogButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#blog-slider"].go("<");
            removeActive();
            setActive(splidesInstance.instances["#blog-slider"].index);
            console.log(splidesInstance.instances["#blog-slider"].index);
        });

        splidesInstance.instances["#blog-slider"].on("moved", () =>
            setActive(splidesInstance.instances["#blog-slider"].index),
        );

        setActive(0);
    }

    /* BUILDER */

    if (document.querySelector("#seat")) {
        splidesInstance.add("#seat", {
            type: "loop",
            arrows: false,
            pagination: false,
            focus: "center",
        });

        const seatButtons = document.querySelectorAll<HTMLElement>(".seat__controls > .next");
        // const blogContents = document.querySelectorAll(".blog__content");

        // const removeActive = () => {
        //     blogContents.forEach(e => e.removeAttribute("active"));
        // };
        // const setActive = (index: number) => {
        //     removeActive();
        //     blogContents.forEach(e => {
        //         if (e.getAttribute("data-id") === String(index)) e.setAttribute("active", "active");
        //     });
        // };

        seatButtons[0].addEventListener("click", () => {
            splidesInstance.instances["#seat"].go(">");
            // setActive(splidesInstance.instances["#blog-slider"].index);
            // console.log(splidesInstance.instances["#blog-slider"].index);
        });
        seatButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#seat"].go("<");
            // removeActive();
            // setActive(splidesInstance.instances["#blog-slider"].index);
            // console.log(splidesInstance.instances["#blog-slider"].index);
        });

        // splidesInstance.instances["#blog-slider"].on("moved", () =>
        //     setActive(splidesInstance.instances["#blog-slider"].index),
        // );

        // setActive(0);
    }

    if (document.querySelector("#legs")) {
        splidesInstance.add("#legs", { type: "loop", arrows: false, pagination: false });

        const legsButtons = document.querySelectorAll<HTMLElement>(".legs__controls > .next");
        // const blogContents = document.querySelectorAll(".blog__content");

        // const removeActive = () => {
        //     blogContents.forEach(e => e.removeAttribute("active"));
        // };
        // const setActive = (index: number) => {
        //     removeActive();
        //     blogContents.forEach(e => {
        //         if (e.getAttribute("data-id") === String(index)) e.setAttribute("active", "active");
        //     });
        // };

        legsButtons[0].addEventListener("click", () => {
            splidesInstance.instances["#legs"].go(">");
            // setActive(splidesInstance.instances["#blog-slider"].index);
            // console.log(splidesInstance.instances["#blog-slider"].index);
        });
        legsButtons[1].addEventListener("click", () => {
            splidesInstance.instances["#legs"].go("<");
            // removeActive();
            // setActive(splidesInstance.instances["#blog-slider"].index);
            // console.log(splidesInstance.instances["#blog-slider"].index);
        });

        // splidesInstance.instances["#blog-slider"].on("moved", () =>
        //     setActive(splidesInstance.instances["#blog-slider"].index),
        // );

        // setActive(0);
    }

    return splidesInstance;
}
