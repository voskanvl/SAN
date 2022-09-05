import './sass/style.sass'
import { MSplides } from "./initSlides"
import '@splidejs/splide/css'

const splidesInstance = new MSplides()
splidesInstance.add('#test', { type: 'loop', autoplay: 1000 })
console.log(splidesInstance.instances['#test'])