import getString from "./../lang/getString";

function HomepageView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "HomepageDescriptionTitle")}</h1>
            </div>
            <div className="col-12 col-sm-5 offset-sm-7">
                <p>{getString(lang, "HomepageDescription")}</p>
            </div>
        </div>
    );
}

export default HomepageView;