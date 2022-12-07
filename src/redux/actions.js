import {ADD_FAVORITIES,DELETE_FAVORITIES} from "./types"

export function addfavorities (char){
    return{
        type: ADD_FAVORITIES,
        payload: char,
    }
}
export function deletefavorities (id){
    return{
        type: DELETE_FAVORITIES,
        payload: id,
    }
}