import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Elementos', url: 'elementos', icon: 'planet' },
    { title: 'Contacto', url: 'contacto', icon: 'paper-plane' },
  ];
  constructor() {}
}
