import getString from "./../lang/getString";

function ContactView({lang}){
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ContactTitle")}</h1>
            </div>
        </div>
    );
}

export default ContactView;