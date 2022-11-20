import React, { useEffect, useState } from "react";
import sprite from "./sprite.svg";

/**
 * This is the icon output component.
 */

type Props = {
  type: string;
  className?: string
};

const Icon = ({ type, className = '' }: Props) => {
  const [link, setLink] = useState<string>("");

  /**
   * Computed link address
   */
  useEffect(() => {
    setLink(sprite + "#" + type);
  }, [type]);

  return (
    <svg role="img" className={`icon ${className}`}>
      <use xlinkHref={link}></use>
    </svg>
  );
};

export default Icon;
