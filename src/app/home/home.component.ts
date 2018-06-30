import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('headerElement') headerElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])  onWindowScroll($event) {
    const pageY = window.pageYOffset;
    if (pageY > 150) {
      this.headerElement.nativeElement.classList.add('small-header');
      this.headerElement.nativeElement.classList.remove('navbar-dark');
      this.headerElement.nativeElement.classList.add('navbar-light');
    } else {
      this.headerElement.nativeElement.classList.remove('small-header');
      this.headerElement.nativeElement.classList.add('navbar-dark');
      this.headerElement.nativeElement.classList.remove('navbar-light');
    }
  }

}
