import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'music-player',
    standalone: true,
    styles: `
        :host{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            background: black;
            padding: .4rem;
            color: white;
        }

        .banner{
            flex-grow: 1;
            display: grid;
            place-items: center;
        }

        .actions{
            display: flex;
            justify-content:center;
            gap: 1rem;
            align-items: center;
            padding: 1rem;
        }
        .progress_indicator{
            padding: .5rem;
            background: red;
        }
    `,
    template: `
        <div class="banner">
            Here should be the banner
        </div>
        <div class="progress_indicator">

        </div>
        <div class="actions">
            <div>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8L10.3333 12L16 16V8ZM14.6667 13.4267L12.6467 12L14.6667 10.5733V13.4267ZM8 16H9.33333V8H8V16Z" fill="#fff"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#fff"/>
                </svg>
            </div>
            <div (click)="play()">
                <svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 60 60" xml:space="preserve">
                <g>
                    <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
                        c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
                        C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
                    <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
                </g>
                </svg>
            </div>
            <div>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L13.6667 12L8 8V16ZM9.33334 10.5733L11.3533 12L9.33334 13.4267V10.5733ZM16 8H14.6667V16H16V8Z" fill="#fff"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#fff"/>
            </svg>
            </div>

            <audio src="/track1.mp3" #audioplayer></audio>
        <div>
        
    `
})
export class MusicPlayerComponent {

    @ViewChild('audioplayer') audioplayer!: ElementRef<HTMLAudioElement>;

    play(): void{
        this.audioplayer?.nativeElement?.play();
    }

}