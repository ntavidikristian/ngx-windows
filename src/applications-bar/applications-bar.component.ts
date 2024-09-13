import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SampleApps } from '../sample-apps';
import { WindowConfig } from '../../projects/kntavidi/ngx-windows/src/lib/window.model';
import { NgxWindowsService } from '../../projects/kntavidi/ngx-windows/src/public-api';
import { MatTooltip } from '@angular/material/tooltip';
import { MusicPlayerComponent } from '../application-components/music-player-component';

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.#windowsService.openWindow(
      {
          component: MusicPlayerComponent,
          name: 'Music player',
          matIcon: 'music_note'
      }
    )
    
  }

  protected openApp(app: WindowConfig): void{
    if(!app){
      return ;
    }

    this.#windowsService.openWindow(app);
  }
}
