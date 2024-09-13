import { Component, inject } from '@angular/core';
import { NgxWindowsService } from './ngx-windows.service';
import { NgxWindowComponent } from './window-item-host/ngx-window.component';

@Component({
  selector: 'ngx-windows-host',
  standalone: true,
  imports: [
    NgxWindowComponent
  ],
  template: `
    <p>
      @for(window of windows(); track window.id){
        <ngx-window [windowConfig]="window"/>
      }
    </p>
  `,
  styles: ``
})
export class NgxWindowsComponent {

  protected readonly windowsService = inject(NgxWindowsService);

  protected windows = this.windowsService.windows;

}
