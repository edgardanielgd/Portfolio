import getString from "./../lang/getString";

function ProfileView({lang}) {
    return (
        <div className="row">
            <div className="col-12 text-center portfolio-main-title">
                <h1>{getString(lang, "ProfileTitle")}</h1>
            </div>
        </div>
    );
}

export default ProfileView;