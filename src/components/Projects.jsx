import getString from "./../lang/getString";

function ProjectsView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ProjectsTitle")}</h1>
            </div>
            
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                    <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-OfertappTitle")}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-NNFromScrath")}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-DynamicSystemSimulator")}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-HaloStatsDiscordBot")}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-NextWordPredictor")}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">
                            {getString(lang,"Project-ChatSimulator")}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">
                            {getString(lang,"Project-MathsLang")}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;