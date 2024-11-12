"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { imageT } from "../../types/gallery";

type GalleryCarouselProps = {
  images: imageT[];
};

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  return (
    <div className="w-full">
      <LightGallery
        speed={500}
        download={false}
        plugins={[lgZoom]}
        mode="lg-fade"
      >
        {images?.map(({ id, src, title }) => (
          <a
            key={id}
            href={src}
            className={` inline-flex ${
              parseInt(id) % 2 === 0
                ? "px-3 md:px-0 md:pl-1 md:max-w-[45%]"
                : "px-3 md:px-0 md:pl-1 md:max-w-[25%]"
            }  w-full md:mr-2`}
          >
            <img
              width={parseInt(id) % 2 === 0 ? 450 : 350}
              height={300}
              alt={title}
              src={src}
              className="min-h-[300px] max-h-[300px]   w-full object-cover"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};
export default GalleryCarousel;
