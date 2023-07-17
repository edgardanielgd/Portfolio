import getString from "./../lang/getString";

function AchievementsView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
            <h1>{getString(lang, "AchievementsTitle")}</h1>
            </div>
        </div>
    );
}

export default AchievementsView;