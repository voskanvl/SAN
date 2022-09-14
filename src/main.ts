import './sass/style.sass'
import { MSplides } from "./initSlides"
import '@splidejs/splide/css'

const splidesInstance = new MSplides()
splidesInstance.add('#test', { type: 'loop', autoplay: true })
splidesInstance.add('#chairtypes', { 
    type: 'loop',
    autoplay: false,
    perMove: 1,
    direction: 'rtl',
    arrows: false,
    focus: 'center',
    pagination: false,
    autoWidth: true 
})
splidesInstance.add('#blog-slider', { type: 'loop', arrows: false })

const chairtypesButtons = document.querySelectorAll(".chairtypes__button")
chairtypesButtons[0].addEventListener("click", () => {
    splidesInstance.instances['#chairtypes'].go('<')
})
chairtypesButtons[1].addEventListener("click", () => {
    splidesInstance.instances['#chairtypes'].go('>')
})

const blogButtons = document.querySelectorAll(".blog__button")
blogButtons[0].addEventListener("click", () => {
    splidesInstance.instances['#blog-slider'].go('>')
})
blogButtons[1].addEventListener("click", () => {
    splidesInstance.instances['#blog-slider'].go('<')
})

const audio: HTMLAudioElement | null = document.querySelector("audio")
const next = document.querySelector(".next")
next?.addEventListener("click", () => {
    audio!.currentTime += 2
})
