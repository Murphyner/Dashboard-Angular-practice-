import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShoppingBag,
  faPauseCircle,
  faCheckCircle,
  faMoneyBill,
  faBox,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './cards.component.html',
  standalone: true ,
  imports: [FontAwesomeModule],
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  // FontAwesome icons
  faShoppingBag = faShoppingBag;
  faPauseCircle = faPauseCircle;
  faCheckCircle = faCheckCircle;
  faMoneyBill = faMoneyBill;
  faBox = faBox;
  faUsers = faUsers;
}
