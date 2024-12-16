import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationComponent } from "./core/modules/application/container/application/application.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
