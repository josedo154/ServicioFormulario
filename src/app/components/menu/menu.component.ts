import { Component } from '@angular/core';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private modeService: ModeService) {}

  cambiarModo(nuevoMode: string) {
    this.modeService.cambiarMode(nuevoMode);
  }
}
