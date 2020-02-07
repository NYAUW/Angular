import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsusComponent } from './asus/asus.component';
import { MenuComponent } from './menu/menu.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { SamsungComponent } from './samsung/samsung.component';
import { LgComponent } from './lg/lg.component';
import { OppoComponent } from './oppo/oppo.component';
import { VivoComponent } from './vivo/vivo.component';
import { HawaeiComponent } from './hawaei/hawaei.component';
import { QuantumComponent } from './quantum/quantum.component';
import { RazerComponent } from './razer/razer.component';
import { SonyComponent } from './sony/sony.component';
import { RealmeComponent } from './realme/realme.component';
import { ZukComponent } from './zuk/zuk.component';
import { LeecoComponent } from './leeco/leeco.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { GoogleComponent } from './google/google.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { NavcityComponent } from './navcity/navcity.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AsusComponent,
    MenuComponent,
    XiaomiComponent,
    SamsungComponent,
    LgComponent,
    OppoComponent,
    VivoComponent,
    HawaeiComponent,
    QuantumComponent,
    RazerComponent,
    SonyComponent,
    RealmeComponent,
    ZukComponent,
    LeecoComponent,
    OneplusComponent,
    GoogleComponent,
    MotorolaComponent,
    NavcityComponent,
    LenovoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
