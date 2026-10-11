import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return; // mouse devices only

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;
    html.classList.add("has-cursor");

    const ring = ringRef.current;
    const dot = dotRef.current;
    const labelEl = labelRef.current;
    if (!ring || !dot || !labelEl) return;

    const COLORS = ["#13b9fd", "#54c5f8", "#0175c2"];
    let mx = 0, my = 0, rx = 0, ry = 0, sx = 0, sy = 0;
    let seen = false, sparks = 0;
    let animationFrameId = null;

    const dialogOpen = () => !!document.querySelector("dialog[open]");

    const setState = () => {
      // Do not change cursor on code card or copy button on hover
      if (html.classList.contains("cur-hover") || html.classList.contains("cur-label") || html.classList.contains("cur-text")) {
        html.classList.remove("cur-hover", "cur-label", "cur-text");
        if (labelEl) labelEl.textContent = "";
      }
    };

    function spark(x, y) {
      if (sparks >= 24) return;
      const s = document.createElement("i");
      s.className = "spark";
      s.style.cssText = `left:${x}px;top:${y}px;background:${COLORS[(Math.random() * 3) | 0]};--dx:${(Math.random() - 0.5) * 36}px;--dy:${12 + Math.random() * 26}px;--r:${Math.random() * 90}deg`;
      sparks++;
      s.addEventListener("animationend", () => {
        s.remove();
        sparks--;
      });
      document.body.appendChild(s);
    }

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        rx = sx = mx;
        ry = sy = my;
        seen = true;
      }
      html.classList.add("cursor-on");
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;

      setState(e.target);

      const off = dialogOpen();
      html.classList.toggle("cursor-off", off);
      if (reduce || off) return;

      if (Math.hypot(mx - sx, my - sy) > 38 && sparks < 24) {
        spark(mx, my);
        sx = mx;
        sy = my;
      }
    };

    const handleMouseOver = (e) => setState(e.target);
    const handleMouseDown = () => html.classList.add("cur-down");
    const handleMouseUp = () => html.classList.remove("cur-down");

    const handleClick = (e) => {
      setState(e.target);
      const off = dialogOpen();
      html.classList.toggle("cursor-off", off);
      if (reduce || off) return;

      const r = document.createElement("span");
      r.className = "ripple";
      r.style.left = e.clientX + "px";
      r.style.top = e.clientY + "px";
      r.addEventListener("animationend", () => r.remove());
      document.body.appendChild(r);
    };

    const handleMouseLeave = () => {
      html.classList.remove("cursor-on");
    };

    const handleMouseEnter = () => {
      if (seen) html.classList.add("cursor-on");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const k = reduce ? 1 : 0.18; // ring easing: lower = more lag
    function tick() {
      rx += (mx - rx) * k;
      ry += (my - ry) * k;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      animationFrameId = requestAnimationFrame(tick);
    }
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      html.classList.remove("has-cursor", "cursor-on", "cur-hover", "cur-label", "cur-text", "cur-down", "cursor-off");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cur cur-ring" aria-hidden="true">
        <span className="ring-i">
          <b ref={labelRef} className="ring-label"></b>
        </span>
      </div>
      <div ref={dotRef} className="cur cur-dot" aria-hidden="true">
        <span></span>
      </div>
    </>
  );
};
