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
            <div className="row">
                <a href="https://www.freepik.com/free-vector/white-background-with-zigzag-pattern-design_17564643.htm#query=white%20pattern&position=0&from_view=keyword&track=ais">
                    Background Image by starline
                </a> on Freepik
            </div>
        </div>
    )
}

export default Footer;