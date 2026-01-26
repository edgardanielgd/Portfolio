import awsLogo from "./../../images/AWSLogo.png";
import AcademyItem from "./AcademyItem";

interface AWSItemProps {
    text: string;
    link: string;
}

function AWSItem({text, link}: AWSItemProps) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {awsLogo}
        alt = "AWS Logo"
        color = "#232f3e"
    />
}

export default AWSItem;

