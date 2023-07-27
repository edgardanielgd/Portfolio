import getString from "./../lang/getString";
import PageTitle from "../common/PageTitle";

function ContactView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "ContactTitle")}/>
            </div>
            <div className="col-12 text-center">
                <h4>
                    <a href="https://www.linkedin.com/in/edgard-gonzalezd/">
                        {getString(lang, "Contact-LinkedIn")}
                    </a>
                </h4>

                <h4>
                    <a href="https://github.com/edgardanielgd">
                        {getString(lang, "Contact-GitHub")}
                    </a>
                </h4>

                <h4>
                    <a href="mailto: edgargonzalez.sistemas@gmail.com">
                        {getString(lang, "Contact-Email")}
                    </a>
                </h4>
            </div>
        </div>
    );
}

export default ContactView;