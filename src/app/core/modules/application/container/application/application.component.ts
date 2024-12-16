import { Component } from '@angular/core';
import { NavigationComponent } from '../../fragments/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application',
  imports: [NavigationComponent, CommonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
})
export class ApplicationComponent {
  public childrenStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 56.92%, #F8FFF4 100%)',
  };
}
