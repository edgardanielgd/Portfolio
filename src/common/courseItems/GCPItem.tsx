import gcpLogo from "./../../images/GCPLogo.png";
import AcademyItem from "./AcademyItem";

interface GCPItemProps {
    text: string;
    link: string;
}

function GCPItem({text, link}: GCPItemProps) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {gcpLogo}
        alt = "GCP Logo"
        color = "#FFFFFF"
        textColor = "#000000"
    />
}

export default GCPItem;

