import platziLogo from "./../../images/PlatziLogo.webp";
import AcademyItem from "./AcademyItem";

interface PlatziItemProps {
    text: string;
    link: string;
}

function PlatziItem({text, link}: PlatziItemProps) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {platziLogo}
        alt = "Platzi Logo"
        color = "#98CA3F"
    />
}

export default PlatziItem;

