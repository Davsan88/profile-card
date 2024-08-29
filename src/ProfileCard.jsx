import React from 'react';

function ProfileCard({ image, name, jobTitle, bio }) {
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}'s profile`} className="profile-image" />
            <h2>{name}</h2>
            <h4>{jobTitle}</h4>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileCard;