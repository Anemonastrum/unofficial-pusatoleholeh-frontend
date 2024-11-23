import React from "react";
import { Link } from "react-router-dom";

const LoginRegisterAlert = () => {
  return (
    <section className="bg-primary text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span>
          You are not logged in!{" "}
        </span>
        
        <div className="flex space-x-2">
          <Link to="/login">
            <button className="btn btn-neutral w-24">Login</button> {/* Adjust width here */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginRegisterAlert;
