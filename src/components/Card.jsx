import styles from "./Styles/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addfavorities, deletefavorities } from "./redux/actions";
import { useState, useEffect } from "react";
function Card({
  name,
  id,
  species,
  gender,
  image,
  deletefavorities,
  addfavorities,
  myFavorites,
  onClose,
}) {
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deletefavorities(id);
    } else {
      setIsFav(true);
      addfavorities({ name, id, image, gender });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
        console.log(fav);
      }
    });
  }, []);
  const [isFav, setIsFav] = useState(false);
  return (
    <div className={styles.divContainer}>
      <div>
        <div className={styles.buttonContainer}>
          <div className={styles.divButtonFav}>
            {isFav ? (
              <button onClick={handleFavorite}>❤️</button>
            ) : (
              <button onClick={handleFavorite}>🤍</button>
            )}
          </div>
          <button className={styles.bn5} onClick={onClose}>
            X
          </button>
        </div>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.info}>
          <h2 className={styles.species}>{species}</h2>
          <h2 className={styles.gender}>{gender}</h2>
        </div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addfavorities: (name, id, image) => {
      dispatch(addfavorities(name, id, image));
    },
    deletefavorities: (id) => {
      dispatch(deletefavorities(id));
    },
  };
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
