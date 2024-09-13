import { computed, Injectable, Signal, signal } from '@angular/core';
import {ExtendedWindowConfig, IdGenerator, WindowConfig} from './window.model'

@Injectable({
  providedIn: 'root'
})
export class NgxWindowsService {

  #focusQueue = signal<number[]>([]);
  public currentActiveWindowId = computed(() => this.#focusQueue()[0]);

  public getZIndexForWindowId(windowId: number):Signal<number | undefined>{
    return computed(
      () => this.#focusQueue().includes(windowId)  
        ? this.#focusQueue().map(x => x ).reverse().findIndex(id => windowId === id) + 1
        : undefined
    );
  }


  #windows = signal<ExtendedWindowConfig[]>([
    {
      id: IdGenerator.Default.next().value as number,
      component: undefined as any,
      name: 'some window',
      matIcon: 'public'
    },
    {
      id: IdGenerator.Default.next().value as number,
      component: undefined as any,
      name: 'some window 2',
      matIcon: 'terminal'
    }
  ]);
  windows = this.#windows.asReadonly();

  constructor(

  ) {
  }


  public openWindow(window: WindowConfig): void{
    const nextId = IdGenerator.Default.next().value as number;
    this.#windows.update(
      windows => [...windows, {...window, id: nextId}]
    )

    this.requestFocus(nextId);
  }

  public requestFocus(windowId: number): void{
    if(!this.windows().find(x => x.id === windowId)){
      return;
    }


    this.#focusQueue.update(
      queue => [ windowId, ...queue.filter(x => x === windowId)]
    )
  }

  public closeWindow(windowId: number): void{
    this.#windows.update(
      windows => windows.filter(x => x.id !== windowId)
    )
    this.#focusQueue.update(
      windows => windows.filter(x => x !== windowId)
    )
  }
}
