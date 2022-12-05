import SearchBar from "./SearchBar.jsx";
import styles from "./Styles/Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav(props) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className={styles.nav}>
      <div className={styles.buttons}>
        <NavLink className={styles.bn32} to={"/home"}>
          Home
        </NavLink>
        <NavLink className={styles.bn32} to={"/about"}>
          About
        </NavLink>
        <a className={styles.bn32} onClick={goToHome}>
          Back
        </a>
      </div>
      <SearchBar onSearch={props.onSearch}></SearchBar>
    </div>
  );
}
