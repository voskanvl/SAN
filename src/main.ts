import "./sass/style.sass";
// import { MSplides } from "./initSlides";
import "@splidejs/splide/css";
import toggleSidePanel from "./toggleSlidePanel";
import slides from "./slides";
import selector from "./form/selector";
import bookingOrder from "./form/booking-order";
import { tabs, storeTabs } from "./tabs";
import hideTargetLowerFooter from "./hideTargetUpperFooter";
import formOrder from "./form/form-order";

slides();

toggleSidePanel(".side-panel", "#trigger");

selector();

tabs();
storeTabs.subscribe((current: string) => {
    const allListItems = Array.from(document.querySelectorAll<HTMLElement>(".list__item"));
    allListItems.forEach(element => {
        const dataIndex = element.dataset.index;
        if (dataIndex === current) element.setAttribute("active", "active");
        else element.removeAttribute("active");
    });
    setTimeout(hideTargetLowerFooter, 1000);
});

bookingOrder();

hideTargetLowerFooter();
window.addEventListener("resize", hideTargetLowerFooter);

formOrder();
