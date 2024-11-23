import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Trash, Plus } from "lucide-react"; // Importing icons from lucide-react

const Profile = ({ userData, isLoggedIn }) => {
  const navigate = useNavigate(); // Hook for navigation

  const [user, setUser] = useState({
    profilePicture: "https://placehold.co/100", // Default placeholder image
    name: "Guest",
    email: "",
    phoneNumber: "",
    addresses: [],
  });

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to /login if the user is not logged in
      navigate("/login");
    } else if (userData) {
      setUser({
        profilePicture: userData.image[0]?.url || "https://placehold.co/100", // Use profile image or default
        name: userData.user.name,
        email: userData.user.email,
        phoneNumber: userData.user.phoneNumber,
        addresses: (userData.userAddress || []).map((address) => ({
          id: address._id,
          address: `${address.subdistrict}, ${address.district}, ${address.city}, ${address.province} - ${address.postalCode}`,
        })),
      });
    }
  }, [isLoggedIn, userData, navigate]); // Add navigate to the dependency array

  const handleDeleteAddress = (addressId) => {
    setUser((prevUser) => ({
      ...prevUser,
      addresses: prevUser.addresses.filter((address) => address.id !== addressId),
    }));
  };

  const handleAddAddress = () => {
    // Add logic to handle address addition
    alert("Add address functionality here");
  };

  const handleEditProfile = () => {
    // Add logic to handle profile editing
    alert("Edit profile functionality here");
  };

  return (
    <section className="py-5 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-center mb-6 gap-2">
          <button
            className="btn btn-primary"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          <button
            className="btn btn-primary"
            onClick={handleEditProfile}
          >
            Add Picture
          </button>
        </div>

        {/* User Information */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Profile Information</h2>
        </div>

        {/* Display Profile Info as List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-sm">
            <div>
              <p className="text-sm font-semibold">Name</p>
              <p className="text-sm">{user.name}</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-sm">
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-sm">
            <div>
              <p className="text-sm font-semibold">Phone Number</p>
              <p className="text-sm">{user.phoneNumber || "No phone number added"}</p>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="mt-8 px-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Addresses</h3>
          <button
            className="text-blue-500"
            onClick={handleAddAddress}
          >
            <Plus size={20} />
          </button>
        </div>

        {user.addresses.length === 0 ? (
          <p className="text-center mt-4">No addresses added.</p>
        ) : (
          <div className="space-y-4 mt-4">
            {user.addresses.map((address) => (
              <div
                key={address.id}
                className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-sm"
              >
                <p className="text-sm flex-1">{address.address}</p>
                <div className="flex space-x-2">
                  {/* Delete Button for Address */}
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
