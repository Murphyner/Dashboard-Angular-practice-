import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NgClass } from '@angular/common';
import { GeneralService } from './services/general.service';
import { CardsComponent } from "./cards/cards.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, NgClass, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit  {
  sidebarCollapsed: boolean = false

  constructor(private isActiv: GeneralService){
  }
  ngOnInit(): void {
    this.isActiv.isActive$.subscribe(status => this.sidebarCollapsed = status)
  }
  changecollapse(){
    this.sidebarCollapsed = !this.sidebarCollapsed
    console.log(this.sidebarCollapsed);
    
  }


}
