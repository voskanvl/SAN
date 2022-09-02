import './sass/style.sass'
import Splide from "@splidejs/splide"
import '@splidejs/splide/css'

const splides = new Map()
splides.set('#test', { type: 'loop', autoplay: 1000 })

const AllSplides = (splides: Map<string, object>) => (fn: 'mount' | 'refresh') => splides.forEach((value, key) => new Splide(key, value)[fn]())
AllSplides(splides)("mount")