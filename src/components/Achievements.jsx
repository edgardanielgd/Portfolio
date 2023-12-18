import getString from "./../lang/getString";
import CourseraItem from "../common/CourseraItem";
import PlatziItem from "../common/PlatziItem";
import PageTitle from "../common/PageTitle";

function AchievementsView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "AchievementsTitle")}/>
                <p>
                    {getString(lang, "Achievements-description")}
                </p>
            </div>
            <div className="col-12 text-center mb-4">
                <h4>{getString(lang, "Achievements-Academic")}</h4>
                <p className="portfolio-paragraph">{getString(lang, "Achievements-Academic-1")}</p>
            </div>
            <div className="col-12 text-center mb-4">
                <h4>{getString(lang, "Achievements-Courses")}</h4>
            </div>
            
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-1")}
                link = "https://www.coursera.org/account/accomplishments/certificate/WHFJPNTMAJSS"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-2")}
                link = "https://www.coursera.org/account/accomplishments/certificate/WPY2P4QDZUMF"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-3")}
                link = "https://www.coursera.org/account/accomplishments/certificate/TECKCHLJWVVS"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-1")}
                link = "https://platzi.com/p/edgardanielgd123/curso/2485-backend-nodejs/diploma/detalle/"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-2")}
                link = "https://platzi.com/p/edgardanielgd123/curso/2507-backend-nodejs-postgres/diploma/detalle/"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-3")}
                link = "https://platzi.com/p/edgardanielgd123/curso/1331-bootstrap/diploma/detalle/"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-4")}
                link = "https://platzi.com/p/edgardanielgd123/curso/1800-fintech/diploma/detalle/"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-5")}
                link = "https://platzi.com/p/edgardanielgd123/curso/1193-basica-appsco/diploma/detalle/"
            />
            <PlatziItem
                text = {getString(lang, "Achievements-Platzi-6")}
                link = "https://platzi.com/p/edgardanielgd123/curso/1195-fundamentos-appsco/diploma/detalle/"
            />
        </div>
    );
}

export default AchievementsView;