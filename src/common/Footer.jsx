import getString from "../lang/getString";

function Footer({lang}) {
    return (
        <div className="container-fluid portfolio-footer">
            <div className="row text-center">
                <div className="col-12 col-sm-4 m-auto">
                    {getString(lang, "HostedWithGithub")}
                </div>
                <div className="col-12 col-sm-4 m-auto">
                    {getString(lang, "LastUpdate")+ "2024-05-02"}
                </div>
                <div className="col-12 col-sm-4 m-auto">
                    {getString(lang, "FreePik")}
                </div>
            </div>
        </div>
    )
}

export default Footer;