import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AddFormComponent } from "./components/add-form/add-form.component";
import { InvestTableComponent } from "./components/invest-table/invest-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AddFormComponent, InvestTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Invest';
}
