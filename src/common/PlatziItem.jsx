import platziLogo from "./../images/PlatziLogo.webp";

function PlatziItem({text, link}) {
    return (
        <div className="col-12 col-sm-6 text-center mb-3">
            <div className="row portfolio-platzi">
                <div className="col-12 col-sm-3">
                    <img
                        src={platziLogo}
                        alt="Platzi"
                        className="img-fluid portfolio-platzi-logo"
                    />
                </div>
                <div className="col-12 col-sm-9 portfolio-course-container">
                    <a href={link} className="portfolio-platzi-link">
                        <h4>{text}</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlatziItem;