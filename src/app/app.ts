import { Component, signal } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('jas-contruciones');
  currentUrl = signal('/'); 

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl.set(this.router.url);
    });

  }

}
