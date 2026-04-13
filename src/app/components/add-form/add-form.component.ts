import { Component, signal } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';
import { FormsModule } from '@angular/forms';
import IInvestData from '../utils/investData';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  investData = signal<IInvestData>({duration: '', annual: '', initial: '', expected: ''});
  constructor(private investmentService: InvestmentService) {}

  handleSubmit() {
    this.investmentService.calculateInvestmentResults(this.investData());
    this.resetForm();
  }
  
  private resetForm() {
    this.investData.set({duration: '', annual: '', initial: '', expected: ''})
  }
}
