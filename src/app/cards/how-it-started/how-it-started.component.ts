import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-how-it-started',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './how-it-started.component.html',
  styleUrls: ['./how-it-started.component.css']
})
export class HowItStartedComponent {

  headding: string = `Code to Dreams`;

  how: string = `My journey from curious beginner to passionate developer discovering that great code is part art, part science, and all about solving real problems.`;

  date: string = "June 1 2019";

  openCodeForm(event: Event) {
    event.preventDefault();

    const el = event.currentTarget as HTMLElement;
    el.classList.add('see');

    window.open('https://codepen.io/thisNiharika/pens/public', '_blank');
  }
}