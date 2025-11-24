import React from "react";
import { appleImg as biomoleculaiImg, bagImg, githubImg, searchImg } from "../assets";
import { navLists, sourceCode } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-800/40 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-[980px] items-center justify-between px-4 h-[44px]">
        {/* 左侧 Logo */}
        <a href="#">
          <img
            src={biomoleculaiImg}
            alt="Biomoleculai"
            className="w-[18px] h-[18px] object-contain"
          />
        </a>

	{/* 中间导航菜单 */}
	<div className="flex items-center gap-6">
	  {navLists.map((nav) => (
	    <div
	      key={nav}
	      className="text-gray-100 cursor-pointer px-5 text-[13px] transition-all hover:text-white"
	    >
	      {nav}
	    </div>
	  ))}
	
	  {/* SaaS 外部链接 */}
	  <a
	    href="http://127.0.0.1:3000"
	    target="_blank"
	    rel="noopener noreferrer"
	    className="text-gray-100 cursor-pointer px-5 text-[13px] transition-all hover:text-white"
	  >
	   Our Engines 
	  </a>
	</div>


        {/* 右侧图标 */}
        <div className="flex items-center gap-4">
          <img src={searchImg} alt="Search" className="w-[16px] h-[16px]" />
          <img src={bagImg} alt="Bag" className="w-[16px] h-[16px]" />
          <a
            href={sourceCode}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={githubImg} alt="GitHub" className="w-[16px] h-[16px]" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

