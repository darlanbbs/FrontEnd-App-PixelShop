import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";

type Props = {
  onClick: (id: number) => void;
};

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

export const DeleteButton = ({ onClick }: Props) => {
  return <TrashIcon onClick={onClick} />;
};

export default DeleteButton;
