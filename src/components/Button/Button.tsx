import React from "react";

import { Button as ButtonRST } from "reactstrap";
import styled from "styled-components";
type Props = {};

const Button = (props: Props) => {
  const AddButton = styled(ButtonRST)`
    background-color: #007bff;
    border: none;
    padding: 8px 16px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
    }
  `;

  return <AddButton>+</AddButton>;
};

export default Button;
