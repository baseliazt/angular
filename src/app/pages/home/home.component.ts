import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public title: WritableSignal<number> = signal(0);
  public changeTitle: () => void = () => {
    this.title.update((value) => value + 1);
  };
}
