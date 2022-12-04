import SearchBar from "./SearchBar.jsx"
import styles from "./Styles/Nav.module.css"
import { NavLink, useNavigate } from "react-router-dom"

export default function Nav(props){
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate ("/home")
    }
    return(
        <div className={styles.nav}>
            <div>
                <button onClick={goToHome}>Back</button>
            </div>
            <div>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
    );
}