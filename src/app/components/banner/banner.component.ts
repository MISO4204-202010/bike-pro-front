import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ab-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title: string;
  hasLogin = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.title = environment.product;
    this.hasLogin = sessionStorage.getItem('userAuth') !== undefined && sessionStorage.getItem('userAuth') !== null
    && sessionStorage.getItem('userAuth') === 'true' ? true : false;
  }

  goHome() {
    this.route.navigate(['']);
  }

  closeSession(){
    location.reload();
    sessionStorage.setItem('userAuth', undefined);
  }

}
