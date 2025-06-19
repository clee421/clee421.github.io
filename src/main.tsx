import React, { ReactElement, useRef } from "react";
import { Title1, Card, Button } from "@fluentui/react-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./main.scss";

const Main = (): ReactElement => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".card", {
        y: -80,
        opacity: 0,
        duration: 0.8,
      }).from(
        ".title",
        {
          x: -40,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
    },
    { scope }
  );

  const handleClick = () => {
    gsap
    .timeline({ repeat: 1, repeatDelay: 0.2 })
    .to(".card", { y: -30, duration: 0.15, ease: "power3.out" })
    .to(".card", { y: 0,  duration: 0.4,  ease: "bounce.out" });
  };

  return (
    <div ref={scope} className="main-container">
      <Card className="card" style={{ width: 535, padding: 24 }} onClick={handleClick}>
        <Title1 className="title">calvin lee</Title1>
        <p style={{ marginTop: 12 }}>
          Welcome to my playground for frontend things. To see my personal site
          go to <a href="https://calvinlee.dev/">calvinlee.dev</a>
        </p>
      </Card>
    </div>
  );
};

export default Main;
