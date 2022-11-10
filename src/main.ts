import "./sass/style.sass";
// import { MSplides } from "./initSlides";
import "@splidejs/splide/css";
import toggleSidePanel from "./toggleSlidePanel";
import slides from "./slides";
import selector from "./selector";

slides();

toggleSidePanel(".side-panel", "#trigger");

selector();
