import getString from "./../lang/getString";
import PageTitle from "../common/PageTitle";

function ContactView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "ContactTitle")}/>
            </div>
            <div className="col-12 text-center">
                <div className="row portfolio-contact-container">

                    <div className="offset-0 offset-sm-3 col-12 col-sm-2 mb-5 text-center">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="LinkedIn"
                            className="img-fluid portfolio-logo"
                        />
                    </div>
                    <div className="col-12 col-sm-4 mb-5 text-center">
                        <h4 className="mt-4">
                            <a href="https://www.linkedin.com/in/edgard-gonzalezd/">
                                {getString(lang, "Contact-LinkedIn")}
                            </a>
                        </h4>        
                    </div>

                    <div className="offset-0 offset-sm-3 col-12 col-sm-2 mb-5 text-center">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="LinkedIn"
                            className="img-fluid portfolio-logo"
                        />
                    </div>
                    <div className="col-12 col-sm-4 mb-5 text-center">
                        <h4 className="mt-4">
                            <a href="https://github.com/edgardanielgd">
                                {getString(lang, "Contact-GitHub")}
                            </a>
                        </h4> 
                    </div>
                    <div className="offset-0 offset-sm-3 col-12 col-sm-2 mb-5 text-center">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                            alt="LinkedIn"
                            className="img-fluid portfolio-logo"
                        />
                    </div>
                    <div className="col-12 col-sm-4 mb-5 text-center">
                        <h4 className="mt-4">
                            <a href="mailto: edgargonzalez.sistemas@gmail.com">
                                {getString(lang, "Contact-Email")}
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactView;