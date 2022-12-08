import styles from "./Styles/Favorities.module.css";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "./redux/actions";
export function Favorities({ myFavorites }) {
  const dispatch = useDispatch();

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }
  function handleOrder(e){
    dispatch(orderCards(e.target.value))
  }
  return (
    <div className={styles.divContainer}>
      <div>
        <select
          name="order"
          id=""
          onChange={handleOrder}
        >
          <option value="default" disabled>
            Select...
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="gender" id="" onChange={handleFilter}>
          <option value="default" disabled>
            Select...
          </option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites.map((favorito) => (
        <div className={styles.divCard}>
          <h2>{favorito.name}</h2>
          <h2>{favorito.id}</h2>
          <h2>{favorito.gender}</h2>
          <img src={favorito.image} alt={favorito.name} />
        </div>
      ))}
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps, null)(Favorities);
