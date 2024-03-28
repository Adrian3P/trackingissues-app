"use client";

// import Image from "next/image";
// import coffee from "@/public/images/coffee.jpg";
// import { useState } from "react";
// import HeavyComponent from "./components/HeavyComponent";
// import dynamic from "next/dynamic";
// import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));

// {
//   ssr: false;
//   loading: () => <p>Loading...</p>;
// }

export default function Home() {
  // const [isVisible, setVisible] = useState(false);
  return (
    <main>
      {/* <Image
        src="https://www.google.com/"
        alt="coffee"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>Hi there people!</h1>
      <button
        onClick={async () =>
          // setVisible(true)
          {
            const _ = (await import("lodash")).default;
            const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

            const sorted = _.orderBy(users, ["name"]);
            console.log(sorted);
          }
        }
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
