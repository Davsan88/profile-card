import './App.css';
import React from 'react';
import ProfileCard from './ProfileCard';

const profiles = [
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    jobTitle: "Software Engineer",
    bio: "Passionate about coding and teaching."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    jobTitle: "Product Manager",
    bio: "Loves building products that solve real problems."
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    jobTitle: "UX Designer",
    bio: "Designing intuitive user experiences is my passion."
  }
];


function App() {
  return (
    <div className="App">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          image={profile.image}
          name={profile.name}
          jobTitle={profile.jobTitle}
          bio={profile.bio}
        />
      ))}    
    </div>
  );
}

export default App;
