import getString from "../lang/getString";

function ProjectCard({lang, image, title, text, repoUrl}){
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card portfolio-project-card">
                <img src={image} className="card-img-top portfolio-project-img" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={repoUrl} className="btn btn-primary">{getString(lang,"Project-RepoButton")}</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;