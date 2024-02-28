import c from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={c.mainDiv}>
        <h2>About this website</h2>
        <p className={c.mainText}>
          This website is made for practice purposes.
        </p>
      </div>
    </>
  );
}
