import getString from "./../lang/getString";
import myGithubProfimage from "./../images/Github.jpg";

function ProfileView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ProfileTitle")}</h1>
            </div>
            <div className = "row">
                <div className="col-12 col-sm-4 text-center">
                    <img
                        src = {myGithubProfimage}
                        alt = "GithubProfile"
                        className = "img-fluid portfolio-face-img"
                    />
                    <h4>
                        {getString(lang, "Profile-lang-skills-title")}
                    </h4>
                    <h5>
                        {getString(lang, "Profile-lang-skills-spanish")}
                    </h5>
                    <h5>
                        {getString(lang, "Profile-lang-skills-english")}
                    </h5>
                </div>
                <div className="col-12 col-sm-8 text-center">
                    <h4>
                        {getString(lang, "Profile-description-title")}
                    </h4>
                    <p>
                        {getString(lang, "Profile-description")}
                    </p>

                    <h4>
                        {getString(lang, "Profile-skills-title")}
                    </h4>
                    <p>
                        {getString(lang, "Profile-skills-1")}
                    </p>
                    <p>
                        {getString(lang, "Profile-skills-2")}
                    </p>
                    <p>
                        {getString(lang, "Profile-skills-3")}
                    </p>
                    <p>
                        {getString(lang, "Profile-skills-4")}
                    </p>
                    <p>
                        {getString(lang, "Profile-skills-5")}
                    </p>

                    <h4>
                        {getString(lang, "Profile-soft-skills-title")}
                    </h4>
                    <p>
                        {getString(lang, "Profile-soft-skills-1")}
                    </p>
                    <p>
                        {getString(lang, "Profile-soft-skills-2")}
                    </p>
                    <p>
                        {getString(lang, "Profile-soft-skills-3")}
                    </p>

                    <h4>
                        {getString(lang, "Profile-experience-title")}
                    </h4>
                    <h5>
                        {getString(lang, "Profile-teacher-assistant-title")}
                    </h5>
                    <p>
                        {getString(lang, "Profile-teacher-assistant")}
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileView;