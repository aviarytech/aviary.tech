import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'aviary.tech';
  services: string[];
  constructor() {
    this.services = [
      '⨳ User Research',
      '⨳ Technical Architecture',
      '⨳ Delivery Management',
      '⨳ DevOps Engineering',
      '⨳ Security Engineering',
      '⨳ User Experience Design',
      '⨳ Agile Coaching',
      '⨳ Frontend Web Development',
      '⨳ Backend Web Development',
    ].sort(function() {
      return 0.5 - Math.random();
    });
  }
}
