import React from "react";
import { Header } from "./index-components/Header.js";
import { Body } from "./index-components/Body.js";
import "./styles/general.css"

export function App(){
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}