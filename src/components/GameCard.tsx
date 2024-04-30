import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
