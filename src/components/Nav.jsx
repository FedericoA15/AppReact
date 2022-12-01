import SearchBar from "./SearchBar.jsx"
import styles from "./Styles/Nav.module.css"

export default function Nav(props){
    return(
        <div className={styles.nav}>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
    )


}