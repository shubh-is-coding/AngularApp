import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';
import { gsap } from 'gsap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  ngOnInit() {
    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(
        '#list-item1, #list-item2, #list-item3'
      ),
      { max: 50, speed: 500, scale: 1.4 }
    );

    const icon1: any = document.getElementById('list-item1');
    const icon2: any = document.getElementById('list-item2');
    const icon3: any = document.getElementById('list-item3');

    gsap.from(icon1, {
      x: -200,
      duration: 0.6,
      delay: 2.8,
      opacity: 0,
    });
    gsap.from(icon2, {
      x: -200,
      duration: 0.6,
      delay: 2.6,
      opacity: 0,
    });
    gsap.from(icon3, {
      x: -200,
      duration: 0.6,
      delay: 2.4,
      opacity: 0,
    });
  }

  constructor(private el: ElementRef) {}

  vanillaTilt: any;
}
