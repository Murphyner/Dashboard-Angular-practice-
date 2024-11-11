import { Component, Input, OnInit } from '@angular/core';
import {
  faGaugeSimple,
  faChartLine,
  faComments,
  faCalendarAlt,
  faEnvelope,
  faPhone,
  faCommentDots,
  faShieldAlt,
  faPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgIf } from '@angular/common';
import { GeneralService } from '../services/general.service';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule , NgClass , NgIf ,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent implements OnInit {
  faGaugeSimple = faGaugeSimple;
  faChartLine = faChartLine;
  faComments = faComments;
  faCalendarAlt = faCalendarAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faCommentDots = faCommentDots;
  faShieldAlt = faShieldAlt;
  faPlane = faPlane

  collapsed: boolean = false;
  currentRouter: string = ''
  private statusSubscription!: Subscription ;

  constructor(private generalService: GeneralService , private route: Router) {
    
  }
  ngOnInit() {
    this.statusSubscription = this.generalService.isActive$.subscribe(status => this.collapsed = status)
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRouter = event.url;
        console.log(this.currentRouter); // Logs the current route URL
      });
        
  }
  toggle(){
    this.generalService.toggleActive(true)
  }
  @Input() isActived: boolean = false
  
}
