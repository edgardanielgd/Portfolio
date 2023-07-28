import courseraLogo from "./../images/CourseraLogo.png";

function CourseraItem({text, link}) {
    return (
        <div className="col-12 text-center portfolio-coursera mb-3">
            <div className="row">
                <div className="col-12 col-sm-3">
                    <img
                        src={courseraLogo}
                        alt="Coursera"
                        className="img-fluid portfolio-coursera-logo"
                    />
                </div>
                <div className="col-12 col-sm-9 portfolio-course-container">
                    <a href={link} className="portfolio-coursera-link">
                        <h4>{text}</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CourseraItem;