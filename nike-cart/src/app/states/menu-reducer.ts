import { Action } from "@ngrx/store";

export function menuReducer(state:boolean = false, action: Action) {
    switch (action.type) {

        case 'open': 
            return state = true;

        case 'closed':
            return state = false;

        default: 
        
        return state = state;
    }
}

export function cartMenuReducer(state:boolean = false, action: Action) {
    switch (action.type) {

        case 'show_cart_menu': 
            return state = true;

        case 'hide_cart_menu':
            return state = false;

        default: 
        
        return state = state;
    }
}

export function mobileMenuReducer(state:boolean = false, action: Action) {
    switch (action.type) {

        case 'show_mobile_menu': 
            return state = true;

        case 'hide_mobile_menu':
            return state = false;

        default: 
        
        return state = state;
    }
}