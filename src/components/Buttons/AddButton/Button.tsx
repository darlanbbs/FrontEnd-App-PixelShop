"use client";
import React from "react";
import { AddButton } from "./style";

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return <AddButton onClick={onClick}>+</AddButton>;
};

export default Button;
