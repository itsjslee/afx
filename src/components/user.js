import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>Current Grade: {user.grade}</p>
            {/* Additional user info can go here */}
        </div>
    );
};

export default UserProfile;
