
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export  type AlertStye = "error" | "message" | "info" |" warning" |"none"

export interface AlertOptions { 
    html?: boolean
    closable?:boolean
    timeout?: number | false
    style?:AlertStye
}
const defaultOptions: Required<AlertOptions> ={
    html: false,
    closable: true,
    timeout: 3000,
    style: 'info'
}
export interface Alert extends AlertOptions{
    id:string
    message:string,
}

export const useAlerts = defineStore('alert', { 
    state: () => ({
        items:[] as Alert []
    }),
    actions:{
      notify( message:string, style:AlertStye, options:AlertOptions = {}){
        options = { ...defaultOptions, style, ...options}
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
      remove(id:string){
        const index = this.items.findIndex((item) => item.id === id)
        if( index > -1){
            this.items.slice(index, 1)
        }
      }
    }
})