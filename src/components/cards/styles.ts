import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
  position: relative;
`;

export const TrashIcon = styled(BsFillTrashFill)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: red;
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
  margin: 5px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  margin: 5px;
`;

export const Stock = styled.p`
  margin-bottom: 5px;
  margin: 5px;
`;

export const Description = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 5px;
`;
