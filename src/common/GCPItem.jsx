import gcpLogo from "./../images/GCPLogo.png";
import AcademyItem from "./AcademyItem";

function GCPItem({text, link}) {
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