import getString from "./../lang/getString";

function ContactView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ContactTitle")}</h1>
            </div>
            <div className="col-12 text-center">
                <h4>
                    {getString(lang, "Contact-LinkedIn")}
                </h4>
                <p>
                    {getString(lang, "Contact-LinkedIn-body")}
                </p>

                <h4>
                    {getString(lang, "Contact-GitHub")}
                </h4>
                <p>
                    {getString(lang, "Contact-GitHub-body")}
                </p>

                <h4>
                    {getString(lang, "Contact-Email")}
                </h4>
                <p>
                    {getString(lang, "Contact-Email-body")}
                </p>
            </div>
        </div>
    );
}

export default ContactView;