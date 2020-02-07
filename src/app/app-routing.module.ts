import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsusComponent } from './asus/asus.component';
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
import { MotorolaComponent } from './motorola/motorola.component';
import { GoogleComponent } from './google/google.component';
import { NavcityComponent } from './navcity/navcity.component';
import { LenovoComponent } from './lenovo/lenovo.component';


const routes: Routes = [
  {path: 'asus', component: AsusComponent},
  {path: 'xiaomi', component: XiaomiComponent},
  {path: 'samsung', component: SamsungComponent},
  {path: 'lg', component: LgComponent},
  {path: 'oppo', component: OppoComponent},
  {path: 'vivo', component: VivoComponent},
  {path: 'hawaei', component: HawaeiComponent},
  {path: 'quantum', component: QuantumComponent},
  {path: 'razer', component: RazerComponent},
  {path: 'sony', component: SonyComponent},
  {path: 'realme', component: RealmeComponent},
  {path: 'zuk', component: ZukComponent},
  {path: 'leeco', component: LeecoComponent},
  {path: 'oneplus', component: OneplusComponent},
  {path: 'motorola', component: MotorolaComponent},
  {path: 'google', component: GoogleComponent},
  {path: 'navcity', component: NavcityComponent},
  {path: 'lenovo', component: LenovoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
