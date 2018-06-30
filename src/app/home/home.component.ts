import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = true;

  @ViewChild('headerElement') headerElement: ElementRef;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 992) {
      this.headerElement.nativeElement.classList.remove('navbar-dark');
      this.headerElement.nativeElement.classList.add('navbar-light');
    }
  }

  @HostListener('window:scroll', ['$event'])  onWindowScroll($event) {
    const pageY = window.pageYOffset;
    if (window.innerWidth >= 992) {
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

  @HostListener('window:resize', ['$event'])  onResize($event) {
    if ($event.target.innerWidth < 992) {
      this.headerElement.nativeElement.classList.remove('navbar-dark');
      this.headerElement.nativeElement.classList.add('navbar-light');
    } else if ($event.target.innerWidth >= 992 && window.pageYOffset <= 150) {
      this.headerElement.nativeElement.classList.remove('small-header');
      this.headerElement.nativeElement.classList.add('navbar-dark');
      this.headerElement.nativeElement.classList.remove('navbar-light');
    }
  }

}
