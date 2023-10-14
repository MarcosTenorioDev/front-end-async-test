import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 350px;
  padding: 0px 20px;
  border-radius: 15px;
  align-items: center;
  
  @media (max-width: 1220px) {
    padding: 0px 40px 0px 0px;
  }
  @media (max-width: 768px) {
    max-width: 500px;
    padding: 0;
    text-align: center;
  }
`;
const CardImg = styled.img`
  width: 40px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  letter-spacing: 0.1px;
  font-size: 2rem;
  color: var(--neutral-colors-100);
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const CardDescription = styled.p`
  color: var(--neutral-colors-200);
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export { StyledCard, CardDescription, CardImg, CardTitle };
