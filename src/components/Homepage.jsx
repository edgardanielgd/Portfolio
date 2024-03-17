import React from "react";
import getString from "./../lang/getString";
import GithubProfile from "./../images/Github.jpg"
import UNAL from "./../images/UNAL-light.png"
import PageTitle from "../common/PageTitle";

function HomepageView({lang, theme}){

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
                <div className="row text-center">
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                            alt="Python Logo" 
                            className="portfolio-framework-logo"
                        />
                    </div>    
                    </div>
                
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png"
                            alt="Django Logo" 
                            className="portfolio-framework-logo"
                        />
                    </div>
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png"
                            alt="Javascript Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                            alt="Node JS Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                            alt="React Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://raw.githubusercontent.com/github/explore/888aa7196bdda1de09e848148fc5929ccfe49ab6/topics/discord-js/discord-js.png"
                            alt="DIscord JS Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>               
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                            alt="Java Logo"
                            className="portfolio-framework-logo"
                        />       
                    </div>             
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png"
                            alt="Spring Boot Logo"
                            className="portfolio-framework-logo"
                        />     
                    </div>               
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/1024px-Gnu-octave-logo.svg.png"
                            alt="Octave Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1024px-Lua-Logo.svg.png"
                            alt="Lua Logo"
                            className="portfolio-framework-logo"
                        />   
                    </div>                 
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
                            alt="MySQL Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    </div>
                    
                    <div className = "col-12 col-sm-3 col-md-2 mb-3">
                    <div className="portfolio-framework-div">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.jpg"
                            alt="MongoDB Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageView;