import { Type } from "@angular/core"

export type WindowConfig =  {
    name: string,
    component: Type<any>,
    matIcon?: string
}

export type ExtendedWindowConfig = {
    id: number;
} & WindowConfig


export namespace IdGenerator{
    function* IdGenerator(){
        let i = 0;
        while(true){
            yield i++;
        }
    }
    export const Default = IdGenerator();
}