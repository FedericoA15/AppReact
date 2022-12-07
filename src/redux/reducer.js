import { ADD_FAVORITIES, DELETE_FAVORITIES } from "./types"
const initialState = {
    myFavorites: [],
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVORITIES:
            const upFavorities = [...state.myFavorites, action.payload]
            return{
                ...state,
                myFavorites: upFavorities,
            }
        case DELETE_FAVORITIES:
            const filterFav = state.myFavorites.filter(char=>char.id!==action.payload)
            return{
                ...state,
                myFavorites: filterFav
            }
        default:
            return state
    }
}
export default reducer