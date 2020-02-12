import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { AsusComponent } from './asus/asus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carteira = 5000;
  public Carteira(): void {

    if (this.carteira <= 0) {
      alert("Saldo é Insuficiente");
    }
    else {
      this.carteira = this.carteira - 500;
    }
  }  

  public AddCarteira(){
    
  this.carteira += + 1000; 

  }

title = 'PortalRoms';


Home(){
  this.title = 'PortalRoms';
}
Asus() {
  this.title = 'Asus';
}

Xiaomi() {
  this.title = 'Xiaomi';
}

Samsung(){
  this.title = 'Samsung';
}

Lg(){
  this.title = 'Life is Good';
}

Oppo(){
  this.title = 'Oppo';
}

Vivo() {
  this.title = 'Vivo';
}

Hawaei() {
  this.title = 'Hawaei';
}

Quantum(){
  this.title = 'Quantum';
}

RazerPhone(){
  this.title = 'Razer';
}

Sony(){
  this.title = 'Contact Us';
}

Realme() {
  this.title = 'Realme';
}

ZUK() {
  this.title = 'ZUK';
}

LeEco(){
  this.title = 'LeEco';
}

Oneplus(){
  this.title = 'Oneplus';
}

Google(){
  this.title = 'Google';
}

Motorola() {
  this.title = 'Motorola';
}

NavCity() {
  this.title = 'NavCity';
}

Lenovo(){
  this.title = 'Lenovo';
}

}
