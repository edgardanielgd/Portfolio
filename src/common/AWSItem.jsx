import awsLogo from "./../images/AWSLogo.png";
import AcademyItem from "./AcademyItem";

function AWSItem({text, link}) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {awsLogo}
        alt = "AWS Logo"
        color = "#232f3e"
    />
}

export default AWSItem;