import SearchBar from "./SearchBar.jsx"
import styles from "./Styles/Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav(props){
    return(
        <div className={styles.nav}>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
    );
}