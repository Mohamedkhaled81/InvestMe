import { Component } from '@angular/core';
import { InvestmentService } from '../../services/InvestmentService';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invest-table',
  standalone: true,
  imports: [ CurrencyPipe],
  templateUrl: './invest-table.component.html',
  styleUrl: './invest-table.component.css'
})
export class InvestTableComponent {
  constructor(private investmentService: InvestmentService) {}
  get annualData() {
    return this.investmentService.annualSignalData();
  }
}
