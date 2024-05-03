import courseraLogo from "./../../images/CourseraLogo.png";
import AcademyItem from "./AcademyItem";

function CourseraItem({text, link}) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {courseraLogo}
        alt = "Coursera Logo"
        color = "#0056D2"
    />
}

export default CourseraItem;