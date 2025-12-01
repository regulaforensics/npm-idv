import '@ionic/react/css/core.css'
import '/src/main.css'
import { setupIonicReact } from '@ionic/react'
import { StatusBar, Style } from '@capacitor/status-bar'
import { main } from './src/main'

document.addEventListener('deviceready', async () => {
    document.getElementById("content").innerHTML = await fetch("main.html").then(r => r.text())
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    document.dispatchEvent(new Event('ready'))
})

document.addEventListener('ready', main)

setupIonicReact()
StatusBar.setStyle({ style: Style.Light })
