import React from "react";
import defaultUser from '../../common/img/default_user.jpg';
import { useSelector } from "react-redux";

const Profile = () => {
    const profile = useSelector(state => state.auth)
    return (
        <div className="container-md p-5">
            <div className="container-md d-inline-flex" >
                <img src={defaultUser} className="img-thumbnail profile-image" alt="..."></img>
                <h1>{profile.login}</h1>
            </div>
        </div>
        
    )
};

export default Profile;