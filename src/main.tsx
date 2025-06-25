import React, { ReactElement, useRef } from "react";
import { Title1, Card, Button } from "@fluentui/react-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

import "./main.scss";

const Main = (): ReactElement => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = new SplitText(".card-intro", { type: "lines" });
      const textBody = split.lines;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".card", { y: -80, opacity: 0, duration: 0.8 })
        .from(".title", { x: -40, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(textBody, { x: 40, opacity: 0, stagger: 0.03, duration: 0.25 }, "-=0.2");

      return () => split.revert();
    },
    { scope }
  );

  const handleClick = () => {
    gsap
    .timeline()
    .to(".card", { y: -30, duration: 0.15, ease: "power3.out" })
    .to(".card", { y: 0,  duration: 0.4,  ease: "bounce.out" })
    .to([".card-intro"], { y: 6, duration: 0.12, ease: "power3.out" }, "-=0.25")
    .to([".card-intro"], { y: -10, duration: 0.12, ease: "power3.out" })
    .to([".card-intro"], { y: 0, duration: 0.15, ease: "bounce.out"})
    .to([".card-intro"], { y: -6, duration: 0.08, ease: "power3.out" })
    .to([".card-intro"], { y: 0, duration: 0.12, ease: "bounce.out", stagger: 0.05 });
  };

  return (
    <div ref={scope} className="main-container">
      <Card className="card" style={{ maxWidth: 535, minWidth: 120, padding: 24, margin: 15 }} onClick={handleClick}>
        <Title1 className="title">calvin lee</Title1>
        <p className="card-intro" style={{ marginTop: 12 }}>
          Welcome to my playground for frontend things. To see my personal site
          go to <a href="https://calvinlee.dev/">calvinlee.dev</a>
        </p>
      </Card>
    </div>
  );
};

export default Main;
