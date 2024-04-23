import getString from "./../lang/getString";
import CourseraItem from "../common/CourseraItem";
import PlatziItem from "../common/PlatziItem";
import AWSItem from "../common/AWSItem";
import CiscoItem from "../common/CiscoItem";
import GCPItem from "../common/GCPItem";
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
            <GCPItem
                text = {getString(lang, "Achievements-GCP-1")}
                link = "GCP.pdf"
            />
            <CiscoItem
                text = {getString(lang, "Achievements-Cisco-1")}
                link = "https://www.credly.com/badges/b03768c0-b336-403a-bb42-cccdfc285ce1/public_url"
            />
            <AWSItem 
                text = {getString(lang, "Achievements-AWS-2")}
                link = "https://www.credly.com/badges/f54153f6-5920-4b32-8ca5-53c3d4a5e637/public_url"
            />
            <AWSItem 
                text = {getString(lang, "Achievements-AWS-1")}
                link = "https://www.credly.com/badges/5d7012a0-d553-4731-82fe-3dd975640370/public_url"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-7")}
                link = "https://www.coursera.org/account/accomplishments/specialization/certificate/2RD6DJB5BVWG"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-6")}
                link = "https://www.coursera.org/account/accomplishments/certificate/2EFHZZ2M6PL2"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-5")}
                link = "https://www.coursera.org/account/accomplishments/certificate/GYAPNACJMSQ7"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-4")}
                link = "https://www.coursera.org/account/accomplishments/certificate/Q3F4MTSEM49S"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-3")}
                link = "https://www.coursera.org/account/accomplishments/certificate/TECKCHLJWVVS"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-2")}
                link = "https://www.coursera.org/account/accomplishments/certificate/WPY2P4QDZUMF"
            />
            <CourseraItem 
                text = {getString(lang, "Achievements-Coursera-1")}
                link = "https://www.coursera.org/account/accomplishments/certificate/WHFJPNTMAJSS"
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