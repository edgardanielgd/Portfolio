import ciscoLogo from "./../../images/CiscoLogo.png";
import AcademyItem from "./AcademyItem";

interface CiscoItemProps {
    text: string;
    link: string;
}

function CiscoItem({text, link}: CiscoItemProps) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {ciscoLogo}
        alt = "Cisco Logo"
        color = "#000000"
    />
}

export default CiscoItem;

