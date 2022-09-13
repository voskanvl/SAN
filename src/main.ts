import './sass/style.sass'
import { MSplides } from "./initSlides"
import '@splidejs/splide/css'

const splidesInstance = new MSplides()
splidesInstance.add('#test', { type: 'loop', autoplay: true })
splidesInstance.add('#chairtypes', { type: 'loop', autoplay: false, perPage: 4, perMove: 1, direction: 'rtl', arrows: false, focus: 'center', pagination: false })

const chairtypesButtons = document.querySelectorAll(".chairtypes__button")
chairtypesButtons[0].addEventListener("click", () => {
    splidesInstance.instances['#chairtypes'].go('<')
})
chairtypesButtons[1].addEventListener("click", () => {
    splidesInstance.instances['#chairtypes'].go('>')
})

const audio: HTMLAudioElement | null = document.querySelector("audio")
const next = document.querySelector(".next")
next?.addEventListener("click", () => {
    audio!.currentTime += 2
})
