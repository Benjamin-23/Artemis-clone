import { AlertOptions } from './alert';

import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export  type AlertStye = "error" | "message" | "info" |" warning" |"none"

export interface AlertOptions { 
    html?: boolean
    closable?:boolean
    timeout?: string | true
    style?:AlertStye
}
const defaultOptions: Required<AlertOptions> ={
    html: false,
    closable: true,
    timeout: '3000',
    style: 'info'
}
export interface Alert extends AlertOptions{
    id:string
    message:string,
}

export const alert = defineStore('alert', { 
    state: () => ({
        items:[] as Alert []
    }),
    actions:{
      notify( message:string, style:AlertStye, options?:AlertOptions = {}){
        options = { ...defaultOptions, style ...options}
        const id = uuid()
        this.items.push({
            message,
            id,
            ...options,
        })
        if( options.timeout ==false){setTimeout(() => {
            this.remove(id);
        }), options.timeout;
    }
        
      },
      remove(){}
    }
})