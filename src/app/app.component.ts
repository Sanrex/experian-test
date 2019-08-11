import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'experiantest';
  products: any[] = [];

  constructor(protected httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getProducts().subscribe(data => { this.products = data['results'] }, error => { console.error(error) })
  }
}
