function AcademyItem({text, link, logo, alt, color}) {
    return (
        <div className="col-12 col-sm-6 text-center mb-3">
            <a href={link} className="portfolio-academy-link" target="_blank">
            <div 
                className="row portfolio-academy"
                style={{
                    backgroundColor: color
                }}
            >
                <div className="col-12 col-sm-3">
                    <img
                        src={logo}
                        alt={alt}
                        className="img-fluid portfolio-academy-logo"
                    />
                </div>
                <div className="col-12 col-sm-9 portfolio-course-container">
                        <h4>{text}</h4>
                </div>
            </div>
            </a>
        </div>
    )
}

export default AcademyItem;