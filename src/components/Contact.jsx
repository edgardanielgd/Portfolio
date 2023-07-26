import getString from "./../lang/getString";

function ContactView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ContactTitle")}</h1>
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
                    <a href="edgargonzalez.sistemas@gmail.com">
                        {getString(lang, "Contact-Email")}
                    </a>
                </h4>
            </div>
        </div>
    );
}

export default ContactView;