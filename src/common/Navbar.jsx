import { Link } from "react-router-dom";

function Navbar(
    theme, setTheme, lang, setLang
) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg static-top" >
                <div className="container">
                    <div className = "row">
                        <div className = "col-3 change-theme"
                            onCLick = {
                                () => {
                                    if (theme === "light") {
                                        setTheme("dark")
                                    } else {
                                        setTheme("light")
                                    }
                                }
                            }
                        >
                            🌗
                        </div>
                    </div>

                    <button
                        className="navbar-toggler me-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="navbar-toggler-icon"
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
                            <Link className="nav-link text-center" to="/">
                                Inicio
                            </Link>
                            <Link className="nav-link text-center" to="/profile">
                                Perfil
                            </Link>
                            <Link className="nav-link text-center" to="/projects">
                                Proyectos
                            </Link>
                            <Link className="nav-link text-center" to="/achievements">
                                Logros
                            </Link>
                            <Link className="nav-link text-center" to="/contact">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    </div>
                    
                </div>
        </nav>
      </div>
    )
    
}

export default Navbar;