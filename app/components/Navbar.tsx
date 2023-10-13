import React from "react";
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-slate-600 flex flex-col p-4 justify-between items-center md:flex-row'>
      <h1 className='text-white text-xl'>
        <Link href={"/"}>WikiRocket</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
