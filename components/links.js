import Link from "next/link";
import c from "./links.module.css";

import Drop from "./dropDown/dropDown1";

export default function Dropdown() {
  return (
    <>
      <div className={c.mainDiv}>
        <div className={c.mainDivOne}>
          <Link className={c.linkMain} href={"/about"}>
            About this page
          </Link>
          <Link className={c.linkMain} href={"https://www.dakar.com/en/"}>
            Official page
          </Link>
        </div>
        <div className={c.showPhone}>
          <Drop />
        </div>
      </div>
    </>
  );
}
