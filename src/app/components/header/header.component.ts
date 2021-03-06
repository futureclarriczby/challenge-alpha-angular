import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() sendTypeSearch = new EventEmitter();

  hotel: any
  package: any
  ticket: any
  active: string
  
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
   
    if (nav.extras.state?.active) {
      this.active = nav.extras.state.active;
    }
  }

  selectedMenuOption() {
    this.hotel = (<HTMLInputElement>document.getElementById('hotelOption'));
    this.package = (<HTMLInputElement>document.getElementById('packageOption'));
    this.ticket = (<HTMLInputElement>document.getElementById('ticketOption'));

    this.hotel.addEventListener('click', () => {
      this.hotel.classList.add('underlinedMenuSelection');
      this.package.classList.remove('underlinedMenuSelection');
      this.ticket.classList.remove('underlinedMenuSelection');
      this.sendTypeSearch.emit('hotel');
    });

    this.package.addEventListener('click', () => {
      this.package.classList.add('underlinedMenuSelection');
      this.hotel.classList.remove('underlinedMenuSelection');
      this.ticket.classList.remove('underlinedMenuSelection');
      this.sendTypeSearch.emit('offer');
    });

    this.ticket.addEventListener('click', () => {
      this.ticket.classList.add('underlinedMenuSelection');
      this.hotel.classList.remove('underlinedMenuSelection');
      this.package.classList.remove('underlinedMenuSelection');
      this.sendTypeSearch.emit('ticket');
    });
  }

  ngOnInit() {
    this.selectedMenuOption();
    if (this.active) {
      document.getElementById(this.active).click();
    }
  }

}
