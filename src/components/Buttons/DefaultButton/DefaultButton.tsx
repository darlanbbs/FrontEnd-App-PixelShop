import React from "react";
import styled from "styled-components";
type props = {
  title: string;
  onClick?: any;
  type?: string;
};
const DetailsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
`;

const DefaultButton = ({ title, onClick, type }: props) => {
  return (
    // @ts ignore
    <DetailsButton type={type} onClick={onClick}>
      {title}
    </DetailsButton>
  );
};

export default DefaultButton;
