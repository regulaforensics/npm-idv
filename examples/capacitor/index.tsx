import mainHtml from './src/main.html?raw'
import '/src/main.css'
import { main } from './src/main'

document.addEventListener('deviceready', async () => {
    document.getElementById("content").innerHTML = mainHtml
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    document.dispatchEvent(new Event('ready'))
})

document.addEventListener('ready', main)
