import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('HeaderElement') headerElement: ElementRef;
  @ViewChild('IntroductionSectionElement') introductionSectionElement: ElementRef;
  @ViewChild('ResumeSectionElement') resumeSectionElement: ElementRef;

  constructor() { }

  ngOnInit() {
    // if the window is small start with the light theme
    if (window.innerWidth < 992) {
      this.headerElement.nativeElement.classList.remove('navbar-dark');
      this.headerElement.nativeElement.classList.add('navbar-light');
    }
  }

  scrollToHomeSmoothly() {
    this.introductionSectionElement.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  scrollToResumeSmoothly() {
    this.resumeSectionElement.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])  onWindowScroll($event) {
    // dynamically change header on scroll only if window isn't 'small'
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
    // make header correct format on window resize based on width
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
