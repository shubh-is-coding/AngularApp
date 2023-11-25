import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent {
 
  ngOnInit() {

    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".list-item1, .list-item2, .list-item3"), { max: 30, speed: 500, scale: 1.3 }
    );}

    constructor(private el: ElementRef) {
    }
    
  items: String[] = ['My Skills', 'Work', 'Contact'];
  vanillaTilt: any;  
}
