import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ❌ no token → redirect
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch("https://eltoncryptobackend.onrender.com/api/auth/profile", {
          headers: {
            Authorization: token
          }
        });

        const data = await res.json();

        if (!res.ok) {
          navigate("/signin");
          return;
        }

        setUser(data);

      } catch (err) {
        navigate("/signin");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-[#111111] p-10 rounded-2xl border border-gray-800 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Your Profile
        </h1>

        <div className="space-y-4 text-center">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;