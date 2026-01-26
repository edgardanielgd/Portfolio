import courseraLogo from "./../../images/CourseraLogo.png";
import AcademyItem from "./AcademyItem";

interface CourseraItemProps {
    text: string;
    link: string;
}

function CourseraItem({text, link}: CourseraItemProps) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {courseraLogo}
        alt = "Coursera Logo"
        color = "#0056D2"
    />
}

export default CourseraItem;

