import { Component, OnInit } from '@angular/core';
import { BetaService } from 'src/app/services/beta.service';

@Component({
  selector: 'app-search-beta-test',
  templateUrl: './search-beta-test.component.html',
  styleUrls: ['./search-beta-test.component.css'],
})
export class SearchBetaTestComponent implements OnInit {
  betaList;
  loading = true;
  constructor(private betaService: BetaService) {}

  ngOnInit(): void {
    this.fetchBeta();
  }

  fetchBeta() {
    this.betaService.getAll().subscribe((data) => {
      console.log(data);
      this.betaList = data;
      this.loading = false;
    });
  }
}
