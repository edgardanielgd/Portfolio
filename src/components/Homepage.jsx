import getString from "./../lang/getString";

function HomepageView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "HomepageDescriptionTitle")}</h1>
            </div>
            <div className="col-12 col-sm-5 offset-sm-7 mb-5">
                <p>{getString(lang, "HomepageDescription")}</p>
            </div>
            <div className="col-12 col-sm-5 mb-5">
                <p>{getString(lang, "HomepageParagraph1")}</p>
            </div>
            <div className="col-12">
                <div className="row portfolio-frameworks-div text-center">
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                            alt="Python Logo" 
                            className="portfolio-framework-logo"
                        />
                    </div>
                
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png"
                            alt="Django Logo" 
                            className="portfolio-framework-logo"
                        />
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png"
                            alt="Javascript Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://nodejs.org/images/logos/nodejs.png"
                            alt="Node JS Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                            alt="React Logo"
                            className="portfolio-framework-logo"
                        />
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://raw.githubusercontent.com/github/explore/888aa7196bdda1de09e848148fc5929ccfe49ab6/topics/discord-js/discord-js.png"
                            alt="DIscord JS Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                            alt="Java Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png"
                            alt="Spring Boot Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/1024px-Gnu-octave-logo.svg.png"
                            alt="Octave Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1024px-Lua-Logo.svg.png"
                            alt="Lua Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
                            alt="MySQL Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                    
                    <div className = "col-12 col-sm-3 col-md-2">
                        <img
                            src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.jpg"
                            alt="MongoDB Logo"
                            className="portfolio-framework-logo"
                        />                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageView;