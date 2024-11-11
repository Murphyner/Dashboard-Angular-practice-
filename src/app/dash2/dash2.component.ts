import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShoppingCart,
  faDollarSign,
  faChartBar,
  faReceipt,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dash2',
  standalone: true,
  imports: [FontAwesomeModule ,NgFor],
  templateUrl: './dash2.component.html',
  styleUrl: './dash2.component.css'
})
export class Dash2Component {
  faShoppingCart = faShoppingCart;
  faDollarSign = faDollarSign;
  faChartBar = faChartBar;
  faReceipt = faReceipt;
  faMoneyBillWave = faMoneyBillWave;

  stats = [
    { title: 'Sales', value: '2358', icon: this.faShoppingCart, percentage: '+26%', color: 'text-blue-500' },
    { title: 'Refunds', value: '356', icon: this.faReceipt, percentage: '+8%', color: 'text-orange-500' },
    { title: 'Earnings', value: '235.8', icon: this.faDollarSign, percentage: '-3%', color: 'text-green-500' }
  ];

  profitData = [
    { label: 'Earning this year', value: '$63,489.50', change: '23%' },
    { label: 'Profit this year', value: '$48,820.00', change: '+23%' }
  ];

  salesGrowth = { title: 'Product Sales', growth: '18%' };

}
