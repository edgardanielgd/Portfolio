import ciscoLogo from "./../../images/CiscoLogo.png";
import AcademyItem from "./AcademyItem";

function CiscoItem({text, link}) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {ciscoLogo}
        alt = "Cisco Logo"
        color = "#000000"
    />
}

export default CiscoItem;