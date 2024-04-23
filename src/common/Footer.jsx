import getString from "../lang/getString";

function Footer({lang}) {
    return (
        <div className="container-fluid portfolio-footer">
            <div className="row text-center">
                <div className="col-12 col-sm-6">
                    {getString(lang, "HostedWithGithub")}
                </div>
                <div className="col-12 col-sm-6">
                    {getString(lang, "LastUpdate")+ "2024-04-22"}
                </div>
            </div>
        </div>
    )
}

export default Footer;