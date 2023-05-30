import { Stack } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import upi from "../../Images/upi.png";
import visa from "../../Images/visa.png";
import mastercard from "../../Images/mastercard.png";
const Footer = () => {
  const handleMouseEnter = (e) => {
    const icon = e.currentTarget.querySelector(".translate-icon");
    if (icon) {
      icon.style.transform = "translateX(5px)";
    }
  };

  const handleMouseLeave = (e) => {
    const icon = e.currentTarget.querySelector(".translate-icon");
    if (icon) {
      icon.style.transform = "translateX(0)";
    }
  };
  return (
    <div className="w-full text-[15px] border-t-2">
      <div className="flex justify-between my-10 mx-20">
        <div className="">
          {/* Footer section */}
          <Stack spacing={1}>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              TRACK ORDER
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              BECOME AN AFFILIATE MEMBER
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              FAQS{" "}
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              REVIEWS
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              RECIPES
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              BECOME A DISTRIBUTOR
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              WHOLESALE
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              CORPORATE GIFTING
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              BLOG
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              VIP REWARDS PROGRAM
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              RETURN POLICY
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              TERMS OF SERVICE
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              PRIVACY POLICY
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              SUSTAINIBILITY
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              CAREERS
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              OUR STORY
            </span>
            <span className="transition-all duration-100 hover:text-rose-500 cursor-pointer">
              CONTACT US
            </span>
          </Stack>
        </div>
        <div>
          {/* Subscribe to Newsletter */}
          <div className="w-[450px] mb-5 space-y-2">
            <p className="text-[20px]">Become a Member</p>
            <p className="text-[12px]">
              Get first dibs on contests, freebies, new launches, up-to-date
              news, and giveaways every once in a while.
            </p>
          </div>
          <Stack
            direction="row"
            spacing={2}
            className="flex justify-between items-center border-b-2 border-b-black w-[450px]"
          >
            <input
              id="email"
              className="outline-none bg-transparent h-10 placeholder-black w-[300px]"
              placeholder="Email address"
            />
            <div className="">
              <button
                className="transition-all duration-100 active:scale-95 "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Subscribe
                <ChevronRightIcon
                  className="transition-all duration-100 hover:translate-x-1 translate-icon"
                  style={{ transform: "translateX(0)" }}
                />
              </button>
            </div>
          </Stack>
        </div>
      </div>
      <div className="flex justify-between items-center my-10 mx-20">
        <div>
          <Stack direction="row" spacing={2} className="flex items-center">
            <FacebookIcon className="text-[30px] cursor-pointer transition-all duration-100 ease-in hover:text-blue-800" />
            <InstagramIcon className="text-[30px] cursor-pointer transition-all duration-100 ease-in hover:text-rose-500" />
            <YouTubeIcon className="text-[38px] cursor-pointer transition-all duration-100 ease-in hover:text-red-600" />
          </Stack>
        </div>
        <div>
          <span className="text-[15px]">
            Copyright ©️ 2023, Elacihi Kitchen
          </span>
        </div>
        <div>
          <Stack direction="row" spacing={2} className="flex items-center">
            <img src={upi} alt="" className="h-10 w-20 object-contain" />
            <img src={mastercard} alt="" className="h-10 w-10 object-cover" />
            <img src={visa} alt="" className="h-12 w-12 object-cover" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Footer;
