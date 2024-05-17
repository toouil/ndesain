"use client"

import Link from "next/link";
import { useRef, useState } from "react";

export default function TrackButton({ children, childProps, ...props }) {
  const trackButtonRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ offsetX, offsetY }) => {
    let { height, width } = trackButtonRef.current.getBoundingClientRect();

    let centerY = height / 2;
    let centerX = width / 2;

    let x = (offsetX - centerX) / 4;
    let y = (offsetY - centerY) / 4;

    setPosition({ x, y });
  };

  const handleMouseOut = () => {
    setPosition({ x: 0, y: 0 });
  };

  props = {
    ...props,
    ref: trackButtonRef,
    style: {
      ...props?.style,
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: position.x != 0 && position.y != 0 ? null : ".4s",
    },
    onMouseMove: ({ nativeEvent: { offsetX, offsetY } }) => {
      handleMouseMove({ offsetX, offsetY });
    },
    onMouseOut: handleMouseOut,
  };

  childProps = {
    ...childProps,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: "none",
      display: "block",
      transition: position.x != 0 && position.y != 0 ? null : ".3s",
    },
  };

  if (props?.href) {
    return (
      <Link {...props}>
        <span {...childProps}>{children}</span>
      </Link>
    );
  }

  return (
    <button {...props}>
      <span {...childProps}>{children}</span>
    </button>
  );
}
