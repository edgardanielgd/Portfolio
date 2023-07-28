import getString from "./../lang/getString";
import PageTitle from "../common/PageTitle";
import ProjectCard from "../common/ProjectCard";
import OfertAppLogo from "../images/Ofertapp.png"
import IdealistLogo from "../images/IdealistLogo.png"
import SonderSyncLogo from "../images/SonderSync.png"


function ProjectsView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "ProjectsTitle")}/>
            </div>
            
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-IdealistTitle")}
                text={getString(lang,"Project-IdealistTitle-description")}
                image={IdealistLogo}
                repoUrl={"https://github.com/edgardanielgd/Idealist"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-SonderSyncTitle")}
                text={getString(lang,"Project-SonderSyncTitle-description")}
                image={SonderSyncLogo}
                repoUrl={"https://github.com/SonderSync"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-OfertappTitle")}
                text={getString(lang,"Project-OfertappTitle-description")}
                image={OfertAppLogo}
                repoUrl={"https://github.com/OfertAp-UNAL"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-NNFromScrath")}
                text={getString(lang,"Project-NNFromScrath-description")}
                image="https://storage.googleapis.com/tfds-data/visualization/fig/mnist-3.0.1.png"
                repoUrl={"https://github.com/edgardanielgd/Algoritmos-2022-2-2/tree/master/Algoritmos-ML"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-DynamicSystemSimulator")}
                text={getString(lang,"Project-DynamicSystemSimulator-description")}
                image="https://upload.wikimedia.org/wikipedia/commons/3/3b/Adoption_SFD.png"
                repoUrl={"https://github.com/edgardanielgd/Systems-Dynamics-Model-Solver"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-HaloStatsDiscordBot")}
                text={getString(lang,"Project-HaloStatsDiscordBot-description")}
                image="https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg"
                repoUrl={"https://github.com/edgardanielgd/HaloStatsBot"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-NextWordPredictor")}
                text={getString(lang,"Project-NextWordPredictor-description")}
                image="https://media.istockphoto.com/id/177299085/photo/magnetic-words-collection.jpg?b=1&s=612x612&w=0&k=20&c=VMA8Kz6-v1uBBIP965tMgufYZLGdCsHoss36VDeXkQU="
                repoUrl={"https://github.com/edgardanielgd/ME-Proyecto"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-ChatSimulator")}
                text={getString(lang,"Project-ChatSimulator-description")}
                image="https://freepngimg.com/save/11489-chat-free-download-png/512x512"
                repoUrl={"https://github.com/edgardanielgd/Audio-Transmission"}
            />
            <ProjectCard
                lang={lang}
                title={getString(lang,"Project-MathsLang")}
                text={getString(lang,"Project-MathsLang-description")}
                image="https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg"
                repoUrl={"https://github.com/edgardanielgd/SMITH-Language"}
            />
        </div>
    );
}

export default ProjectsView;