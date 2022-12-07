import Card from "./Card";
import { connect } from "react-redux";
export function Favorities ({myFavorites}){
    return(
        <div>
            {myFavorites.map((favorito)=>(
                <div>
                    <h1>hola</h1>
                    <h1>{favorito.image}</h1>
                </div>
            ))}
        </div>
    )
}
export function mapStateToProps(state) {
    return {
      myFavorites: state.myFavorites,
    }
  }
export default connect(mapStateToProps, null)(Favorities);

