import styles from "./Styles/Favorities.module.css";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "./redux/actions";
export function Favorities({ myFavorites }) {
  const dispatch = useDispatch();

  function handleOrder(e) {
    dispatch(orderCards(e.target.value))
  }
  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }
  return (
    <div>
      <div className={styles.divoptions}>
          <select className={styles.options} name="order" onClick={handleOrder}>
            <option value="default" disabled>
              Select...
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select className={styles.options} name="gender" onClick={handleFilter}>
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
      <div className={styles.divContainer}>
        {myFavorites.map((favorito) => (
          <div className={styles.divCard}>
            <h2>{favorito.name}</h2>
            <h2>{favorito.id}</h2>
            <h2>{favorito.gender}</h2>
            <img src={favorito.image} alt={favorito.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps, null)(Favorities);
