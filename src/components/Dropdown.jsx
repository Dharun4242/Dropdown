import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

const DropdownContext = createContext();

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({ children }) => {
  const { setIsOpen } = useContext(DropdownContext);
  return <div onClick={() => setIsOpen((prev) => !prev)}>{children}</div>;
};

export const DropdownContent = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  return isOpen ? (
    <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-10 p-3">
      {children}
    </div>
  ) : null;
};

export const DropdownItem = ({ children }) => {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded">
      {children}
    </div>
  );
};
