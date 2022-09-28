import { GameCardProps } from "../../../components/GameCard";

export function getGames() {
  try {
    return fetch("http://192.168.0.10:3333/games")
      .then((response) => response.json())
      .then((data: GameCardProps[]) => data);
  } catch (error) {
    console.log("catch getGames: " + error);
    return null;
  }
}
