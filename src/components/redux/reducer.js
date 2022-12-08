import { ADD_FAVORITIES, DELETE_FAVORITIES, FILTER, ORDER } from "./types"
const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_FAVORITIES:
            const upFavorities = [...state.allCharacters, payload]
            return{
                ...state,
                allCharacters: upFavorities,
                myFavorites: upFavorities,
            }
        case DELETE_FAVORITIES:
            const filterFav = state.myFavorites.filter(char=>char.id !== payload)
            return{
                ...state,
                myFavorites: filterFav
            }
        case FILTER:
            const filterChar = state.allCharacters.filter(char=>char.status === payload)
            return{
                ...state,
                myFavorites: filterChar
            }
        case ORDER:
            const sorted = state.allCharacters
            if( payload === "Ascendiente"){
                sorted.sort((a,b)=>a.id-b.id)
            }else{
                sorted.sort((a,b)=>b.id-a.id)
            }
            return{
                ...state,
                myFavorites: sorted
            }
        default:
            return {...state}
    }
}
export default reducer