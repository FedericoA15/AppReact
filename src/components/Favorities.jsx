import styles from "./Styles/Favorities.module.css";
import { connect } from "react-redux";
export function Favorities ({myFavorites}){
    return(
        <div className={styles.divContainer}>
            {myFavorites.map((favorito)=>(
                <div className={styles.divCard}>
                    <h2>{favorito.name}</h2>
                    <h2>{favorito.id}</h2>
                    <img src={favorito.image} alt={favorito.name}/>
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

