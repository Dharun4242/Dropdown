import React from "react";

const Avatar = ({ src, fallback, className = "" }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        fallback
      )}
    </div>
  );
};

export default Avatar;
