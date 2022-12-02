import SearchBar from "./SearchBar.jsx"
import styles from "./Styles/Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav(props){
    return(
        <div className={styles.nav}>
            <div>
                {/* <div>
                    <Link to={"/About"}>About</Link>
                </div>
                <div>
                    <Link to={"/"}>Home</Link>
                </div> */}
            </div>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
    );
}