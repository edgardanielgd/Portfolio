import getString from "./../lang/getString";
import PageTitle from "../common/PageTitle";

function ProjectsView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "ProjectsTitle")}/>
            </div>
            
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                    <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-OfertappTitle")}</h5>
                        <p className="card-text">{getString(lang,"Project-OfertappTitle-description")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-NNFromScrath")}</h5>
                        <p className="card-text">{getString(lang,"Project-NNFromScrath-description")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-DynamicSystemSimulator")}</h5>
                        <p className="card-text">{getString(lang,"Project-DynamicSystemSimulator-description")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-HaloStatsDiscordBot")}</h5>
                        <p className="card-text">{getString(lang,"Project-HaloStatsDiscordBot-description")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">{getString(lang,"Project-NextWordPredictor")}</h5>
                        <p className="card-text">{getString(lang,"Project-NextWordPredictor-description")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">
                            {getString(lang,"Project-ChatSimulator")}
                        </h5>
                        <p className="card-text">
                            {getString(lang,"Project-ChatSimulator-description")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card portfolio-project-card">
                <div className="card-body">
                        <h5 className="card-title">
                            {getString(lang,"Project-MathsLang")}
                        </h5>
                        <p className="card-text">
                            {getString(lang,"Project-MathsLang-description")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;