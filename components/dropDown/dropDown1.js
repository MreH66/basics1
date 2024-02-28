"use client";

import { useState } from "react";
import c from "./dropdown.module.css";

import { FiAlignCenter } from "react-icons/fi";
import Link from "next/link";

export default function Drop() {
  const [dropDownMain, setDropDownMain] = useState(false);

  return (
    <>
      <FiAlignCenter
        size={60}
        onClick={() => {
          setDropDownMain(!dropDownMain);
        }}
      />

      <div className={dropDownMain ? c.dropDown : c.dontshow}>
        <div className={c.mainLinks}>
          <Link
            onClick={() => {
              setDropDownMain(!dropDownMain);
            }}
            className={c.mainLink + " LinkMain"}
            href={"/about"}
          >
            About this page
          </Link>
          <Link
            onClick={() => {
              setDropDownMain(!dropDownMain);
            }}
            className={c.mainLink + " LinkMain"}
            href={"/"}
          >
            main
          </Link>
        </div>
      </div>
    </>
  );
}
