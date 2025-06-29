import React, { ReactElement, useRef } from "react";
import { Title1, Card, Button } from "@fluentui/react-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

import "./main.scss";

const Main = (): ReactElement => {
  const isAnimating = useRef(false)
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

  const jump = (onComplete: () => void) => {
    gsap
      .timeline()
      .to(".card", { y: -30, duration: 0.15, ease: "power3.out" })
      .to(".card", { y: 0,  duration: 0.4,  ease: "bounce.out" })
      .to([".card-intro"], { y: 6, duration: 0.12, ease: "power3.out" }, "-=0.25")
      .to([".card-intro"], { y: -10, duration: 0.12, ease: "power3.out" })
      .to([".card-intro"], { y: 0, duration: 0.15, ease: "bounce.out"})
      .to([".card-intro"], { y: -6, duration: 0.08, ease: "power3.out" })
      .to([".card-intro"], { y: 0, duration: 0.12, ease: "bounce.out", stagger: 0.05 })
      .eventCallback("onComplete", onComplete);
  }

  const drop = (onComplete: () => void) => {
    gsap
      .timeline({ defaults: { ease: "power2.out" } })
      .to(".card", { y: 50, autoAlpha: 0, duration: 0.3, ease: "power2.in" })
      .set(".card", { y: -50 })
      .to(".card", { y: 0, autoAlpha: 1, duration: 0.3 })
      .to(".card-intro", { y: 25, autoAlpha: 0, duration: 0.3, ease: "power2.in" },  "-=0.25")
      .set(".card-intro", { y: -25 })
      .to(".card-intro", { y: 0, autoAlpha: 1, duration: 0.3 })
      .eventCallback("onComplete", onComplete);
  };

  const spin = (onComplete: () => void) => {
    gsap
      .timeline()
      .to(".card", { rotation: 360, duration: 0.45, ease: "power2.out" })
      .to(".card", { rotation: 0,   duration: 0.45, ease: "power2.inOut" })
      .eventCallback("onComplete", onComplete);
  }

  const handleClick = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const actions = [jump, drop, spin];
    const actionIndex = Math.floor(Math.random() * actions.length)
    const action = actions[actionIndex]
    action(() => { isAnimating.current = false })
  };

  return (
    <div ref={scope} className="main-container">
      <Card className="card" onClick={handleClick}>
        <Title1 className="title">calvin lee</Title1>
        <p className="card-intro">
          Welcome to my playground for frontend things. To see my personal site
          go to <a href="https://calvinlee.dev/">calvinlee.dev</a>
        </p>
      </Card>
    </div>
  );
};

export default Main;
