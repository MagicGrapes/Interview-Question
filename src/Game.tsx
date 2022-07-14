// You can think of these components as "pages"
// in your app.
import './Game.css'
import React, { useState} from "react"
import {AppContainer} from "./styles";
import { Button } from './Button';

      
function Game() {
  return(
    <p>
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
    </p>

  );
}

export default Game;