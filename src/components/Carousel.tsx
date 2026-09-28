"use client";

import React, { FC, useEffect, useState, useRef } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @author Sgattix
 * @function @Carousel
 **/

export const Carousel: FC<IProps> = ({ children, className }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          carouselIndex * 100
        }%)`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [carouselIndex]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex < React.Children.count(children) - 1 ? prevIndex + 1 : 0
      );
    }, 10000);

    return () => {
      window.clearInterval(id);
    };
  }, [children]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${carouselIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            {child}
          </div>
        ))}
      </div>
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50 cursor-pointer">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => setCarouselIndex(index)}
            className={`w-3 h-3 rounded-full ${
              carouselIndex === index ? "bg-amber-500" : "bg-amber-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
