import React from "react";
import { Global, css, keyframes } from "@emotion/react";

const driftA = keyframes`
  0%, 100% { transform: translate(-8%, -8%) scale(1); }
  50% { transform: translate(12%, 8%) scale(1.15); }
`;

const driftB = keyframes`
  0%, 100% { transform: translate(8%, 10%) scale(1.1); }
  50% { transform: translate(-12%, -6%) scale(0.95); }
`;

const driftC = keyframes`
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  50% { transform: translate(-8%, 10%) scale(1.2); }
`;

const styles = css`
  .aurora-background {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    /* Own compositor layer — without this, Chromium fails to repaint a
       fixed + blurred layer correctly on scroll and it appears to vanish. */
    transform: translateZ(0);
    will-change: transform;
  }

  .aurora-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }

  .aurora-blob--a {
    top: -15%;
    left: -10%;
    width: 55vw;
    height: 55vw;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.09), transparent 70%);
    animation: ${driftA} 40s ease-in-out infinite;
  }

  .aurora-blob--b {
    bottom: -20%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.07), transparent 70%);
    animation: ${driftB} 48s ease-in-out infinite;
  }

  .aurora-blob--c {
    top: 25%;
    left: 40%;
    width: 45vw;
    height: 45vw;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.06), transparent 70%);
    animation: ${driftC} 55s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .aurora-blob--a,
    .aurora-blob--b,
    .aurora-blob--c {
      animation: none;
    }
  }

  @media print {
    .aurora-background {
      display: none;
    }
  }
`;

export const AuroraBackground = () => {
  return (
    <>
      <Global styles={styles} />
      <div className="aurora-background" aria-hidden="true">
        <div className="aurora-blob aurora-blob--a" />
        <div className="aurora-blob aurora-blob--b" />
        <div className="aurora-blob aurora-blob--c" />
      </div>
    </>
  );
};
