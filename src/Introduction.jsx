import React, { useState, useEffect, useRef } from "react";
import "./styles/Introduction.scss";

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  //   -------------------
  return (
    <div
      ref={ref}
      className={`introduction ${isVisible ? "introduction-animate" : ""}`}
    >
      <h1 className="introduction-title">introduction</h1>
      <div className="introduction-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        cumque, delectus nisi recusandae ipsum, veniam eligendi et laudantium,
        quis repudiandae repellat nesciunt autem? Odit dolorem sapiente non
        neque unde consequuntur. Commodi impedit quis maxime ipsam excepturi
        nostrum nihil earum vel. Cupiditate nam fugit sit ut sint eum
        dignissimos eligendi ex recusandae dolores, odio quos quae ad ratione.
        Fugit repellendus, voluptatum ad, eaque ipsum eos accusantium quod,
        animi atque facere labore!
      </div>
    </div>
  );
}

export default Introduction;
