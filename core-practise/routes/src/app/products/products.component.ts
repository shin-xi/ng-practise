import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ByIdComponent } from '../by-id/by-id.component';
import { InterestComponent } from '../interest/interest.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'interest', component: InterestComponent },
  { path: ':id', component: ByIdComponent }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
