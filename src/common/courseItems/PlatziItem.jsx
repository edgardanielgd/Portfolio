import platziLogo from "./../../images/PlatziLogo.webp";
import AcademyItem from "./AcademyItem";

function PlatziItem({text, link}) {
    return <AcademyItem
        text = {text}
        link = {link}
        logo = {platziLogo}
        alt = "Platzi Logo"
        color = "#98CA3F"
    />
}

export default PlatziItem;