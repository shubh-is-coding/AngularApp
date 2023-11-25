import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FormsModule, MenuComponent],
})
export class AppComponent implements OnInit {
  @ViewChild('yourElement') yourElement: ElementRef;

  ngOnInit() {
    const anim1: HTMLElement | null = document.querySelector('#name-title');
    const anim2: HTMLElement | null = document.querySelector('#img-section');
    const anim3: HTMLElement | null = document.querySelector('#name-description');
    const anim4: HTMLElement | null = document.querySelector('#background');

    if (anim1) {
      TweenMax.from(anim1, 1, 
      {
        y: -100,
        duration: 1,
        delay: 1.5,
        opacity: 0
      });
    }
    if(anim2){
      TweenMax.from(anim2, 1,
        {
          x: -300,
          duration: 1,
          delay: 1.5,
          opacity: 0
        });
    }
    if(anim3){
      TweenMax.from(anim3, 1,
        {
          x: 300,
          duration: 1,
          delay: 2,
          opacity: 0
        });
    }
    if(anim4){
      TweenMax.from(anim4, 1,
        {
          y: -3000,
          duration: 2.2,
          delay: 0,
          opacity: 0.5
        });
    }
  }
  title = 'Shubham Khunte';
}
