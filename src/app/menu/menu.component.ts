import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  ngOnInit(){

  }
  title = 'PortalRoms';
  carteira = 5000;

  Carteira(){
    this.carteira
  }
  Home(){
    this.title = 'PortalRoms';
  }

  AboutUs(){
    this.title = 'About Us';
  }

  ContactUs(){
    this.title = 'Contact Us';
  }

}
