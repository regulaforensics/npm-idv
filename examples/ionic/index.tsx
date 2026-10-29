import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule } from '@ionic/angular/lazy'
import { Platform } from '@ionic/angular'
import { NgModule, provideZoneChangeDetection } from '@angular/core'
import { Component } from '@angular/core'

import { main } from './src/main'

@Component({
    selector: 'app-root',
    standalone: false,
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
    declarations: [Main],
    providers: [Platform],
    imports: [BrowserModule, IonicModule.forRoot()]
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule, {
    applicationProviders: [provideZoneChangeDetection()]
})
