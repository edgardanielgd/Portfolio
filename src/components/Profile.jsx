import getString from "./../lang/getString";
import myImage from "./../images/Edgar.jpg";
import PageTitle from "../common/PageTitle";

function ProfileView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <PageTitle title={getString(lang, "ProfileTitle")}/>
            </div>
            <div className = "row">
                <div className="col-12 col-sm-4 text-center align-middle">
                    <div className="mb-5">
                        <img
                            src = {myImage}
                            alt = "GithubProfile"
                            className = "img-fluid portfolio-face-img"
                        />
                    </div>
                    <div className="mb-5">
                        <h3>
                            {getString(lang, "Profile-lang-skills-title")}
                        </h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="mb-4">
                            {getString(lang, "Profile-lang-skills-spanish")}
                        </h4>
                        <div className="row portfolio-language-rep">
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h4 className="mb-4">
                            {getString(lang, "Profile-lang-skills-english")}
                        </h4>
                        <div className="row portfolio-language-rep">
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">🟦</h3>
                            <h3 className="col-2">◻️</h3>
                            <h3 className="col-2">◻️</h3>
                            <h3 className="col-2">◻️</h3>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 text-center">
                    <div className="mb-5">
                        <h3 className="mb-1">
                            {getString(lang, "Profile-description-title")}
                        </h3>
                        <p className="portfolio-paragraph">
                            {getString(lang, "Profile-description")}
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3>
                            {getString(lang, "Profile-skills-title")}
                        </h3>
                        <ul className="portfolio-list"
                            style={{"listStyleType": "\"📒\""}}
                        >
                            <li>
                                {getString(lang, "Profile-skills-1")}
                            </li>
                            <li>
                                {getString(lang, "Profile-skills-2")}
                            </li>
                            <li>
                                {getString(lang, "Profile-skills-3")}
                            </li>
                            <li>
                                {getString(lang, "Profile-skills-4")}
                            </li>
                            <li>
                                {getString(lang, "Profile-skills-5")}
                            </li>
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h3>
                            {getString(lang, "Profile-soft-skills-title")}
                        </h3>
                        <ul className="portfolio-list"
                            style={{"listStyleType": "\"🐻‍❄️\""}}
                        >
                            <li>
                                {getString(lang, "Profile-soft-skills-1")}
                            </li>
                            <li>
                                {getString(lang, "Profile-soft-skills-2")}
                            </li>
                            <li>
                                {getString(lang, "Profile-soft-skills-3")}
                            </li>
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h3>
                            {getString(lang, "Profile-experience-title")}
                        </h3>
                        <h5>
                            {getString(lang, "Profile-teacher-assistant-title")}
                        </h5>
                        <p className="portfolio-paragraph">
                            {getString(lang, "Profile-teacher-assistant")}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileView;