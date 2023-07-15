import getString from "../lang/getString";

function Footer({lang}) {
    return (
        <div className="container-fluid portfolio-footer">
            <div className="row text-center">
                <div className="col-12 col-sm-4">
                    {getString(lang, "HostedWithGithub")}
                </div>
                <div className="col-12 col-sm-4">
                    {getString(lang, "VisitCV")}
                </div>
                <div className="col-12 col-sm-4">
                    {getString(lang, "LastUpdate")+ "2023-07-15"}
                </div>
            </div>
        </div>
    )
}

export default Footer;