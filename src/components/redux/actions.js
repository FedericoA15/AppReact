import {ADD_FAVORITIES,DELETE_FAVORITIES} from "./types"

export function addfavorities (id){
    return{
        type: ADD_FAVORITIES,
        payload: id,
    }
}
export function deletefavorities (id){
    return{
        type: DELETE_FAVORITIES,
        payload: id,
    }
}