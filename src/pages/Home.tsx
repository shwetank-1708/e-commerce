import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kids from "../assets/kids.jpg";
import { useState } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    { id: 0, url: men },
    { id: 1, url: women },
    { id: 2, url: kids },
  ];

  const prevSlide = () => {
    // if (imageIndex == 0) {
    //   setImageIndex(slides.length - 1);
    // } else if (imageIndex == 2) {
    //   setImageIndex(slides.length - 2);
    // } else {
    //   setImageIndex(slides.length - 3);
    // }
    setImageIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    // if (imageIndex == 0) {
    //   setImageIndex(1);
    // } else if (imageIndex == 1) {
    //   setImageIndex(2);
    // } else {
    //   setImageIndex(0);
    // }
    setImageIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${slides[imageIndex].url})` }}
        className="h-[100vh] flex justify-between items-center text-[50px]"
      >
        <IoChevronBackCircleOutline
          onClick={prevSlide}
          className="cursor-pointer text-gray-700"
        />
        <IoChevronForwardCircleOutline
          onClick={nextSlide}
          className="cursor-pointer text-gray-700"
        />
      </div>
    </div>
  );
};

export default Home;
