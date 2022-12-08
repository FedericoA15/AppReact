import {ADD_FAVORITIES,DELETE_FAVORITIES,FILTER,ORDER} from "./types"

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
export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender,
    }
}
export function orderCards(id){
    return{
        type: ORDER,
        payload: id, 
    }
}