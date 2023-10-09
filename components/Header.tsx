import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-3 shadow-sm">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h2 className="text-xl text-red-500 tracking-widest font-semibold">
          DISCOVER
        </h2>
      </div>
      <ul className="flex items-center gap-8">
        <li className="text-lg hover:text-red-500 cursor-pointer">Home</li>
        <li className="text-lg hover:text-red-500 cursor-pointer">About Us</li>
        <li className="text-lg hover:text-red-500 cursor-pointer">
          Contact Us
        </li>
      </ul>
    </div>
  );
}

export default Header;
