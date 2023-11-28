import React from "react";

function Footer() {
  return (
    <div className="h-auto relative mx-auto border-t border-[#696e79]">
      <div className="h-auto">
        <div className="block w-1/4 m-auto md:w-full text-center md:flex py-7 md:pl-10">
          <div className="flex pb-2 justify-center px-3 text-sm text-[#696e79]">
            <p>&copy; {new Date().getFullYear()} chile </p>
          </div>
          <div className="block md:flex md:space-x-5 text-[#84a0ef] hover:cursor-pointer text-sm">
            <div className=" pb-2 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <a href="/contact-us">About the project</a>
            </div>
            <div className="hidden md:text-[#696e79]">|</div>
            <div className="pb-2 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <a href="/about">Contact us</a>
            </div>
            <div className="hidden md:md:text-[#696e79]">|</div>
            <div className="pb-2 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <a href="/privacy-policy">Terms of usage</a>
            </div>
            <div className="hidden md:md:text-[#696e79]">|</div>
            <div className="pb-2 hover:text-[#e3796a] hover:border-b hover:border-[#e3796a]">
              <a href="/cookies-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
