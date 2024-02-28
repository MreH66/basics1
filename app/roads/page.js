import c from "./page.module.css";

import mapImg from "../../public/dakarRoute.jpeg";
import Image from "next/image";

export default function Roads() {
  return (
    <>
      <div className={c.divMain}>
        <h2>
          Every year there are some new features in the itinerary, <br></br> not
          always being the same despite the regions being the same.
        </h2>
        <p className={c.mainText}>Route for 2024 dakar rally</p>
        <div>
          <Image
            className={c.Img}
            src={mapImg}
            alt="map of upcoming 2024 rally"
          />
        </div>
      </div>
    </>
  );
}
