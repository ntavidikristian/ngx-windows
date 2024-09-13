import { WindowConfig } from "../projects/kntavidi/ngx-windows/src/lib/window.model";
import { MusicPlayerComponent } from "./application-components/music-player-component";

export const SampleApps : WindowConfig[] = [
    {
        component: MusicPlayerComponent,
        name: 'Music player',
        matIcon: 'music_note'
    },
    {
        component: undefined as any,
        name: 'File explorer',
        matIcon: 'folder_open'
    },
    {
        component: undefined as any,
        name: 'Browser',
        matIcon: 'public'
    },
    {
        component: undefined as any,
        name: 'Terminal',
        matIcon: 'terminal'
    },
    {
        component: undefined as any,
        name: 'Radio',
        matIcon: 'radio'
    },
]