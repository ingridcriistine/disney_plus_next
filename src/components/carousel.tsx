"use client"

import { Carousel } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

import imagem1 from "../assets/ouat.jpg"
import imagem2 from "../assets/enrolados.jpg"

interface Item {
  name: string;
  image: string | StaticImageData;
}

const items: Item[] = [
  {
    name: "Once Upon a Time",
    image: imagem1
  }
];

// const Carousel: React.FC = () => {
//   const [indexAtual, setIndexAtual] = useState(0);

//   const proximoProduto = () => {
//     setIndexAtual((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const produtoAtual = items[indexAtual];
// }

export default function CarouselCustomNavigation() {

  return (
    <Carousel
      className="rounded-xl "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      placeholder={<div className="h-full w-full bg-gray-200" />} // Example placeholder
      onPointerEnterCapture={() => {/* handle pointer enter */}}
      onPointerLeaveCapture={() => {/* handle pointer leave */}}
    >
        <div className="h-full w-screen ">
            <Image src={imagem1} alt="image 1"/>
        </div>

        <div className="h-full w-screen "> 
            <Image src={imagem1} alt="image 2"/>
        </div>

        <div className="h-full w-screen ">
            <Image src={imagem2} alt="image 3"/>
        </div>
    </Carousel>
  );
}