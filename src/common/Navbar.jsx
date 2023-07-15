import { Link } from "react-router-dom";
import getString from "./../lang/getString";

function Navbar(
    {theme, setTheme, lang, setLang}
) {
    return (
        <div className = "portfolio-navbar">
            <nav className="navbar navbar-expand-lg static-top" >
                <div className="container">
                    <button
                        className="navbar-toggler me-3 text-center"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="navbar-toggler-icon text-center"
                            style={{
                                backgroundImage: `url(${
                                    theme === "light" ? 
                                        "https://img.icons8.com/ios-filled/50/000000/menu--v1.png" : 
                                        "https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
                                })`
                            }}
                        />
                    </button>

                    <div className="collapse navbar-collapse show" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-middle text-center">
                            <li className="nav-item text-center">
                                <Link className="nav-link text-center portfolio-link" to="/">
                                    {getString(lang, "HomepageTitle")}
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link className="nav-link text-center portfolio-link" to="/profile">
                                    {getString(lang, "ProfileTitle")}
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link className="nav-link text-center portfolio-link" to="/projects">
                                    {getString(lang, "ProjectsTitle")}
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link className="nav-link text-center portfolio-link" to="/achievements">
                                    {getString(lang, "AchievementsTitle")}
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <Link className="nav-link text-center portfolio-link" to="/contact">
                                    {getString(lang, "ContactTitle")}
                                </Link>
                            </li>
                            <li className="nav-item text-center">
                                <div className = "nav-link col-12"
                                    onClick = {
                                        () => {
                                            if (theme === "light") {
                                                setTheme("dark")
                                            } else {
                                                setTheme("light")
                                            }
                                        }
                                    }

                                    style = {{
                                        cursor: "pointer"
                                    }}
                                >
                                    🌗
                                </div>
                            </li>
                            <li className="nav-item text-center">
                                <div className = "nav-link col-12"
                                    onClick = {
                                        () => {
                                            if (lang === "es") {
                                                setLang("en")
                                            } else {
                                                setLang("es")
                                            }
                                        }
                                    }

                                    style = {{
                                        cursor: "pointer"
                                    }}
                                >
                                    {lang}
                                </div>
                            </li>

                        </ul>
                    </div>
                    
                </div>
        </nav>
      </div>
    )
    
}

export default Navbar;