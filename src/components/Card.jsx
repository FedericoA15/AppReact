import styles from "./Styles/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addfavorities, deletefavorities } from "../redux/actions";
import { useState, useEffect } from "react";
export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deletefavorities(props.id);
    } else {
      setIsFav(true);
      props.addfavorities(props.id);
    }
  };
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    })
  }, [props.myFavorites]);

  return (
    <div className={styles.divContainer}>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <button className={styles.bn5} onClick={props.onClose}>
            X
          </button>
        </div>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
        <div className={styles.info}>
          <h2 className={styles.species}>{props.species}</h2>
          <h2 className={styles.gender}>{props.gender}</h2>
        </div>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addfavorities: (id) => {
      dispatch(addfavorities(id));
    },
    deletefavorities: (id) => {
      dispatch(deletefavorities(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
