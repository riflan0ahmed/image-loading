import Image from "next/image";
import high from "/high.jpg";
import low from "../../public/low.jpg";
import "./page.css";

export default function Home() {
  return (
    <main className="page">
      {/* <div className="page">
        <Image src="/high.jpg" alt="Vercel Logo" fill priority />
      </div>

      <div className="page">
        <Image src="/low.jpg" alt="Next.js Logo" fill priority />
      </div> */}
      <div id="avatarImage"></div>

      <div
        style={{
          backgroundImage: `url(${"/high.jpg"}), url(${"/low.jpg"})`,
          backgroundPosition: "center",
          height: "1080px",
          width: "100%",
        }}
      ></div>
    </main>
  );
}
