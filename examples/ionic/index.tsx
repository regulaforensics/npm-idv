import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule, Platform } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { Component } from '@angular/core'

import { main } from './src/main'

@Component({
    selector: 'app-root',
    templateUrl: 'src/main.html',
    styleUrl: 'src/main.css'
})
class Main {
    constructor(platform: Platform) {
        (async () => {
            await platform.ready()
            await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
            main()
        })()
    }
}

@NgModule({
    bootstrap: [Main],
    providers: [Platform],
    imports: [BrowserModule, IonicModule.forRoot()]
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule)
