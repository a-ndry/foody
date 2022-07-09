import { FC, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";

interface ImageLazyProps {
  alt?: string;
  src?: string;
  className?: string;
}

const ImageLazy: FC<ImageLazyProps> = ({
  alt = "",
  src = "",
  className = "",
}) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgSrc = imgRef.current?.querySelector<HTMLElement>(".img-src");
    const imgElt = imgRef.current?.querySelector<HTMLImageElement>(".img-elt");
    if (!imgSrc || !imgElt) return;

    // we use this observer to lazy load the image
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          imgElt.setAttribute("src", imgSrc.textContent || "");
          observer.unobserve(imgElt);
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(imgElt);
  }, []);

  return (
    <div ref={imgRef} className={`${className} d-inline-block`}>
      <Image className="img-elt w-100" alt={alt} />
      <span className="img-src d-none">{src}</span>
    </div>
  );
};

export default ImageLazy;
