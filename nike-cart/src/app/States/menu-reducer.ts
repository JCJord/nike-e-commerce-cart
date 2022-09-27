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