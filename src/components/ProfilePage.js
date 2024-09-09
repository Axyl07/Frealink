import { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    skills: '',
    portfolio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Skills</label>
          <input
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Portfolio (Link)</label>
          <input
            name="portfolio"
            value={profile.portfolio}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
