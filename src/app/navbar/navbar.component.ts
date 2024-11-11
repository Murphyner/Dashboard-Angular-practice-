import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBars, faSearch, faFlag, faCommentDots, faThLarge } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBars = faBars;
  faSearch = faSearch;
  faFlag = faFlag;
  faCommentDots = faCommentDots;
  faThLarge = faThLarge;

  @Output() NewEmitter = new EventEmitter
  sidebar() {
    this.NewEmitter.emit()
  }
  constructor(private isActive: GeneralService) {}

 toggleBoolean(){
  this.isActive.toggleActive(!this.isActive.getActiveStatus())  
  console.log('d', this.isActive.getActiveStatus());
    
 }

}
