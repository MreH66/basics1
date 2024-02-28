import Image from "next/image";

import c from "../history/page.module.css";

import porsheSeat from "../../public/porsheSeat.jpg";
import Sabine from "../../public/mainCharacter.jbg.jpg";
import Link from "next/link";

export default function HistroyPage() {
  return (
    <>
      <div className={c.backgoundDiv}>
        <h2 className={c.mainHeader}>History</h2>

        <div className={c.mainDiv}>
          <Image
            priority
            className={c.mainImage}
            src={porsheSeat}
            alt="man sitting in his bucket seat"
          />
          <div>
            <p className={c.mainText}>
              The legendary Jacky Ickx waiting patiently to go racing, on a
              removed seat from his Porsche 959 at the 1986 Dakar Rally
            </p>
          </div>
        </div>
        <h3 className={c.secondHeader}>The beginning </h3>

        <div className={c.gridMain}>
          <div className={c.mainDiv}>
            <Image
              priority
              className={c.secondImg}
              src={Sabine}
              alt="man sitting in his bucket seat"
            />
          </div>

          <div>
            <p className={c.mainTextSecond}>
              The adventure began back in 1977, when Thierry Sabine got lost on
              his motorbike in the Libyan desert during the Abidjan-Nice Rally.
              Saved from the sands in extremis, he returned to France still in
              thrall to this landscape and promising himself he would share his
              fascination with as many people as possible. --{">"}
              <Link
                className={c.mainLink}
                href={"https://www.dakar.com/en/historical"}
              >
                More on this topic
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
