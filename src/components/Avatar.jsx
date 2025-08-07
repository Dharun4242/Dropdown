import React from "react";

const Avatar = ({
  src,
  alt = "User Avatar",
  fallback = "?",
  className = "",
}) => {
  const baseClass = `w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold`;

  return (
    <div className={`${baseClass}  ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        fallback
      )}
    </div>
  );
};

export default Avatar;
