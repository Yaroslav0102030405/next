import Button from "../components/Button/Button";
import Carousel from "../comments/carousel/Carousel";

export const metadata = {
  title: "Сторінка про нас",
  description: "Сторінка про нас",
};

const About = () => {
  return (
    <>
      <h1>Про</h1>
      <Button />
      <Carousel />
    </>
  );
};

export default About;
