import Slider from "react-slick";
import { useEffect, useState } from "react";

const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 768) return "sm";
  return "md";
};

export default function PuneriWorld() {
  const [bp, setBp] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      const current = getBreakpoint();
      if (current !== bp) {
        setBp(current); // only update when breakpoint changes
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bp]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:
      bp === "md" ? 3 :
      bp === "sm" ? 2 :
      1,
  };

  return (
    <Slider key={bp} {...settings}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </Slider>
  );
}
