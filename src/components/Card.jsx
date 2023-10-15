import {
  StyledCard,
  CardDescription,
  CardImg,
  CardTitle,
} from "../styles/Card.style";

const Card = (props) => {
  return (
    <StyledCard>
      <CardImg src={props.img} alt={props.img} />
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
