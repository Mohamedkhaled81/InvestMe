import { Injectable, signal } from "@angular/core";
import IInvestData from "../components/utils/investData";
import { IAnnualData } from "../components/utils/annualInterface";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    annualSignalData = signal<IAnnualData[]>([])
    calculateInvestmentResults(data: IInvestData) {
        const annualData = [];
        let investmentValue = (+data.initial);
        for (let i = 0; i < (+data.duration); i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (+data.expected / 100);
            investmentValue += interestEarnedInYear + (+data.annual);
            const totalInterest = (+investmentValue) - (+data.annual) * year - (+data.initial);
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: (+data.annual),
                totalInterest: totalInterest,
                totalAmountInvested: (+data.initial) + (+data.annual) * year,
            });
        }
        this.annualSignalData.set(annualData);
    }
}