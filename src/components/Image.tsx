import * as React from "react";

interface Img {
  src: string;
  altSrc: string;
  customClass?: string;
}

function Image({ src, altSrc, customClass }: Img) {
  return (
    <div className="">
      <img className={customClass} src={src} alt={altSrc} />
    </div>
  );
}

export default Image;
