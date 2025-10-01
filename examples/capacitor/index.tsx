import '@ionic/react/css/core.css'
import '/src/main.css'
import { setupIonicReact } from '@ionic/react'
import { StatusBar, Style } from '@capacitor/status-bar'
import { main } from './src/main'

document.addEventListener('deviceready', () => fetch("main.html")
    .then(response => response.text())
    .then(html => document.getElementById("content").innerHTML = html)
    .then(_ => document.dispatchEvent(new Event('ready')))
)

document.addEventListener('ready', main)

setupIonicReact()
StatusBar.setStyle({ style: Style.Light })
