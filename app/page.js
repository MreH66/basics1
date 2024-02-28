import Image from "next/image";
import c from "./page.module.css";

import mainImg from "../public/mainIMGMAIN.jpg";
import secondImg from "../public/redbull2.jpg";
import trhirdImg from "../public/truck2.jpg";
import Link from "next/link";

import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <main className={c.mainDiv}>
        <div className={c.gridDiv}>
          <Image
            className={c.mainImage}
            src={mainImg}
            priority
            alt="car racing"
          />

          <p className={c.mainText + " " + c.textPositionFirst}>
            <GoChevronRight size={60} />
            <Link className={c.mainLink} href="/history">
              From the year 1977
            </Link>
          </p>
        </div>
        <div className={c.gridDiv}>
          <Image className={c.mainImage} src={secondImg} alt="car racing" />

          <p className={c.mainText + " " + c.textPositionSecond}>
            <GoChevronRight size={60} />
            <Link className={c.mainLink} href="/vehicles">
              Five categories of vehicles
            </Link>
          </p>
        </div>
        <div className={c.gridDiv}>
          <Image className={c.mainImage} src={trhirdImg} alt="car racing" />

          <p className={c.mainText + " " + c.textPositionThird}>
            <GoChevronRight size={60} />
            <Link className={c.mainLink} href={"/roads"}>
              8.000km in 14 days
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}