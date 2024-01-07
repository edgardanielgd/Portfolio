import getString from "../lang/getString";

function Footer({lang}) {
    return (
        <div className="container-fluid portfolio-footer">
            <div className="row text-center">
                <div className="col-12 col-sm-6">
                    {getString(lang, "HostedWithGithub")}
                </div>
                <div className="col-12 col-sm-6">
                    {getString(lang, "LastUpdate")+ "2023-01-07"}
                </div>
            </div>
        </div>
    )
}

export default Footer;