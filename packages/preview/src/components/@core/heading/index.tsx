import { BRAND_TITLE_MONO } from "@utils/constants";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import ActiveLink from "../active-link";
import BrandIcon from "./icon";


export default function Heading({ isOpen, setIsOpen }) {
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <div className="brand">
      <ActiveLink href="/">
        <a>
          <img
            style={{ width: "215px", height: "165px" }}
            src={'/imgs/logo.png'}
          />
        </a>
      </ActiveLink>
      <div className="brand--navmenu">
        <button className={`menu ${isOpen && "active"}`} onClick={toggleMenu}>
          <div>Menu</div>
        </button>
      </div>
    </div>
  );
}
