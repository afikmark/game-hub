import { Image, ImageProps } from "@chakra-ui/react";
import fire from "../assets/fire.webp";
import poop from "../assets/poop.webp";
import star from "../assets/star.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 0) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    2: { src: poop, alt: "poop", boxSize: "25px" },
    4: { src: star, alt: "Recommended", boxSize: "15px" },
    5: { src: fire, alt: "Must play", boxSize: "20px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
