import './sass/style.sass'
import { MSplides } from "./initSlides"
import '@splidejs/splide/css'

const splidesInstance = new MSplides()
splidesInstance.add('#test', { type: 'loop', autoplay: true })
splidesInstance.add('#test1', { type: 'loop', autoplay: true, perPage: 2, perMove: 1, direction: 'rtl', arrows: false })

const chairtypesButtons = document.querySelectorAll(".chairtypes__button")
chairtypesButtons[0].addEventListener("click", () => {
    splidesInstance.instances['#test1'].go('<')
})
chairtypesButtons[1].addEventListener("click", () => {
    splidesInstance.instances['#test1'].go('>')
})