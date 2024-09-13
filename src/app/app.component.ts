import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxWindowsComponent } from "../../projects/kntavidi/ngx-windows/src/lib/ngx-windows.component";
import { NgxWindowsService } from '../../projects/kntavidi/ngx-windows/src/public-api';
import { ApplicationsBarComponent } from "../applications-bar/applications-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxWindowsComponent, ApplicationsBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-windows';

  private readonly windowService = inject(NgxWindowsService);
}
