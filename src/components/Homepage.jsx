import React from "react";
import getString from "./../lang/getString";
import GithubProfile from "./../images/Github.jpg"
import TensorflowLogo from "./../images/TensorflowLogo.png";
import CppLogo from "./../images/Cpp.png";
import RustLogo from "./../images/Rust.png";
import WarpLogo from "./../images/Warp.png";
import ExpressLogo from "./../images/Express.png";
import PostgresLogo from "./../images/Postgres.png";
import SQLServerLogo from "./../images/SQLServer.png";
import PowerBILogo from "./../images/PowerBI.png";
import FabricLogo from "./../images/Fabric.png";
import PandasLogo from "./../images/Pandas.png";
import NumpyLogo from "./../images/Numpy.png";
import SparkLogo from "./../images/Spark.png";
import GraphQLLogo from "./../images/GraphQL.png";
import UNAL from "./../images/UNAL-light.png"
import PageTitle from "../common/PageTitle";
import TechnologiesContainer from "./../common/TechnologiesContainer";

function HomepageView({lang}){

    return (
        <div className="row">
            
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "HomepageDescriptionTitle")}/>
            </div>
            <div className="col-12 col-sm-5 m-auto portfolio-homepage-profile text-center">
                <a href="https://github.com/edgardanielgd">
                    <img
                        src={GithubProfile}
                        alt="Github"
                        className="portfolio-homepage-profile-image"
                    />
                </a>
            </div>
            <div className="col-12 col-sm-7 align-middle m-auto">
                <p className="portfolio-paragraph">{getString(lang, "HomepageDescription")}</p>
            </div>
            <div className="mb-5"></div>
            <div className="col-12 col-sm-7 mb-5">
                <div className="row">
                    <div className="col-12 mb-3">
                        <p className="portfolio-paragraph">{getString(lang, "HomepageParagraph1")}</p>
                    </div>
                    <div className="col-12">
                        <p className="portfolio-paragraph">{getString(lang, "HomepageParagraph2")}</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-5 mb-5 portfolio-homepage-profile text-center">
                <img
                    src={UNAL}
                    alt="UNAL"
                    className="portfolio-homepage-college-image"
                />
            </div>
            <div className="col-12">
                <TechnologiesContainer 
                    title={getString(lang, "HomepageTechnologiesTitleProgrammingLanguages")}
                    description={getString(lang, "HomepageTechnologiesDescriptionProgrammingLanguages")}
                    items={[
                        {
                            title: "Python",
                            score: 90,
                            alt: "Python Logo",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                        },
                        {
                            title: "Javascript",
                            score: 90,
                            alt: "Javascript Logo",
                            logo: "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png"
                        },
                        {
                            title: "Java",
                            score: 80,
                            alt: "Java Logo",
                            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                        },
                        {
                            title: "C/C++",
                            score: 80,
                            alt: "C/C++ Logo",
                            logo: CppLogo
                        },
                        {
                            title: "Rust",
                            score: 50,
                            alt: "Rust Logo",
                            logo: RustLogo
                        },
                        {
                            title: "Octave",
                            score: 70,
                            alt: "Octave Logo",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/1024px-Gnu-octave-logo.svg.png"
                        },
                        {
                            title: "Lua",
                            score: 80,
                            alt: "Lua Logo",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1024px-Lua-Logo.svg.png"
                        }
                    ]}
                />
                <TechnologiesContainer 
                    title={getString(lang, "HomepageTechnologiesTitleDatabases")}
                    description={getString(lang, "HomepageTechnologiesDescriptionDatabases")}
                    items={[
                        {
                            title: "MySQL",
                            score: 90,
                            alt: "MySQL Logo",
                            logo: "https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
                        },
                        {
                            title: "MongoDB",
                            score: 70,
                            alt: "MongoDB Logo",
                            logo: "https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.jpg"
                        },
                        {
                            title: "PostgreSQL",
                            score: 80,
                            alt: "PostgreSQL Logo",
                            logo: PostgresLogo
                        },
                        {
                            title: "SQL Server",
                            score: 60,
                            alt: "SQL Server Logo",
                            logo: SQLServerLogo
                        }
                    ]}
                />
                <TechnologiesContainer 
                    title={getString(lang, "HomepageTechnologiesTitleFrameworks")}
                    description={getString(lang, "HomepageTechnologiesDescriptionFrameworks")}
                    items={[
                        {
                            title: "Django",
                            score: 90,
                            alt: "Django Logo",
                            logo: "https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png"
                        },
                        {
                            title: "React",
                            score: 80,
                            alt: "React Logo",
                            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                        },
                        {
                            title: "Express JS",
                            score: 90,
                            alt: "Express Logo",
                            logo: ExpressLogo
                        },
                        {
                            title: "Spring Boot",
                            score: 60,
                            alt: "Spring Boot Logo",
                            logo: "https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png"
                        },
                        {
                            title: "Rust Warp",
                            score: 70,
                            alt: "Rust Warp Logo",
                            logo: WarpLogo
                        }
                        
                    ]}
                />
                <TechnologiesContainer 
                    title={getString(lang, "HomepageTechnologiesTitleMachineLearning")}
                    description={getString(lang, "HomepageTechnologiesDescriptionMachineLearning")}
                    items={[
                        {
                            title: "Tensorflow",
                            score: 90,
                            alt: "Tensorflow Logo",
                            logo: TensorflowLogo
                        },
                        {
                            title: "PowerBI",
                            score: 80,
                            alt: "PowerBI Logo",
                            logo: PowerBILogo
                        },
                        {
                            title: "Microsoft Fabric",
                            score: 60,
                            alt: "Microsoft Fabric Logo",
                            logo: FabricLogo
                        },
                        {
                            title: "Pandas",
                            score: 70,
                            alt: "Pandas Logo",
                            logo: PandasLogo
                        },
                        {
                            title: "Numpy",
                            score: 80,
                            alt: "Numpy Logo",
                            logo: NumpyLogo
                        },
                        {
                            title: "Spark",
                            score: 50,
                            alt: "Spark Logo",
                            logo: SparkLogo
                        }
                    ]}
                />
                <TechnologiesContainer 
                    title={getString(lang, "HomepageTechnologiesTitleMiscellaneous")}
                    description={getString(lang, "HomepageTechnologiesDescriptionMiscellaneous")}
                    items={[
                        {
                            title: "DIscord JS",
                            score: 70,
                            alt: "DIscord JS Logo",
                            logo: "https://raw.githubusercontent.com/github/explore/888aa7196bdda1de09e848148fc5929ccfe49ab6/topics/discord-js/discord-js.png"
                        },
                        {
                            title: "GraphQL",
                            score: 70,
                            alt: "GraphQL Logo",
                            logo: GraphQLLogo
                        }
                    ]}
                />
            </div>
        </div>
    );
}

export default HomepageView;