import { Component } from '@angular/core';
import {  CartComponent } from "../cart/cart.component";
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-dashboard',
  imports: [CartComponent, HeaderComponent, NavbarComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  carts: Cart[] = [
    {
      id: 1,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:2,
      title: 'Qayta oqish',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:3,
      title: 'Eslatma',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:4,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:5,
      title: 'yakuniy nazorat',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:6,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:7,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:8,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    },
    {
      id:9,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link : 'hhtbdbfyec'
    }

  ]

}
