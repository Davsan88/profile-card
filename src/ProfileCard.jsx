import React from 'react';

function ProfileCard({ image, name, jobTitle, bio }) {
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}'s profile`} className="profile-image" />
            <h2 className="profile-name">{name}</h2>
            <h4 className="profile-job">{jobTitle}</h4>
            <p className="profile-name">{bio}</p>
        </div>
    );
}

export default ProfileCard;