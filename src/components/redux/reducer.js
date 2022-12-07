import { ADD_FAVORITIES, DELETE_FAVORITIES } from "./types"
const initialState = {
    myFavorites: [],
}

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_FAVORITIES:
            const upFavorities = [...state.myFavorites, payload]
            return{
                ...state,
                myFavorites: upFavorities,
            }
        case DELETE_FAVORITIES:
            const filterFav = state.myFavorites.filter(char=>char.id !== payload)
            return{
                ...state,
                myFavorites: filterFav
            }
        default:
            return {...state}
    }
}
export default reducer