import { GameBannerProps } from "../../../types/GameBannerProps";

export function getDataGames() {
  try {
    const response = fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data: Array<GameBannerProps>) => data);

    return response;
  } catch (error) {
    return [];
  }
}
