import { Component, computed } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';
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
  
  // ReadOnly Computed Signal
  annualData = computed(() => this.investmentService.annualSignalData());
}
