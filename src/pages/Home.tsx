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

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${slides[imageIndex].url})` }}
        className="h-[100vh] flex justify-between items-center text-[50px]"
      >
        <IoChevronBackCircleOutline />
        <IoChevronForwardCircleOutline />
      </div>
    </div>
  );
};

export default Home;
