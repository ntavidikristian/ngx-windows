import { Component, computed, HostBinding, HostListener, inject, input } from "@angular/core";

import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop'
import { ExtendedWindowConfig } from "../window.model";
import { NgxWindowsService } from "../ngx-windows.service";
import { MatIcon } from "@angular/material/icon";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'ngx-window',
    standalone: true,
    animations: [
        trigger('windowAnimation', [
            transition(':enter', [
                style({
                    opacity: .6,
                    transform: 'scale(.6)'
                }),
                animate('250ms cubic-bezier(.41,.9,.36,1.44)', style({
                    opacity: 1,
                    transform: 'scale(1)'
                }))
            ]),
        ])
    ],
    imports: [
        CdkDragHandle,
        MatIcon,
    ],
    hostDirectives: [
        CdkDrag,
    ],
    styleUrl: './ngx-window.component.scss',
    template: `
        <div class="window-header">
            <div class="window-title" cdkDragHandle>
                @if(matIcon()){
                    <mat-icon>{{matIcon()}}</mat-icon>
                }
                <span class="text">
                    {{title()}}
                </span>
            </div>
            <div class="window-actions">
                <button>
                    minimize
                </button>
                <button>
                    full
                </button>
                <button (click)=" closeWindow()">
                    close
                </button>

            </div>
        </div>

        
    `,
})
export class NgxWindowComponent {


    windowConfig = input.required<ExtendedWindowConfig>();

    #windowService = inject(NgxWindowsService);
    #zIndex = computed(
        () => this.#windowService.getZIndexForWindowId(
            this.windowConfig().id
        )()
    )

    protected matIcon = computed(() => this.windowConfig()?.matIcon);


    protected title = computed(() => this.windowConfig().name);

    protected readonly hasFocus = computed(() => this.windowConfig().id === this.#windowService.currentActiveWindowId());


    @HostBinding('style.z-index') get __zindex() {
        return this.#zIndex();
    }

    @HostBinding('class.window-blurred') get ___() {
        return !this.hasFocus();
    }

    @HostBinding('@windowAnimation') animate = true;

    @HostListener('click') __() {
        if (!this.hasFocus()) {
            this.#windowService.requestFocus(this.windowConfig().id);
        }
    }

    protected closeWindow(): void {
        this.#windowService.closeWindow(this.windowConfig().id);
    }
}