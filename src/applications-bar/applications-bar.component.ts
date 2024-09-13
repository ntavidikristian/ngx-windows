import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SampleApps } from '../sample-apps';
import { WindowConfig } from '../../projects/kntavidi/ngx-windows/src/lib/window.model';
import { NgxWindowsService } from '../../projects/kntavidi/ngx-windows/src/public-api';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-applications-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatTooltip
  ],
  templateUrl: './applications-bar.component.html',
  styleUrl: './applications-bar.component.scss'
})
export class ApplicationsBarComponent {

  protected apps = SampleApps;

  #windowsService = inject(NgxWindowsService);

  protected openApp(app: WindowConfig): void{
    if(!app){
      return ;
    }

    this.#windowsService.openWindow(app);
  }
}
