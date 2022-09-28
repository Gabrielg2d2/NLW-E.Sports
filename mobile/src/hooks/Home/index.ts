import { useEffect, useState } from "react";
import { GameCardProps } from "../../components/GameCard";
import { getGames } from "../../services/gets/games";

export function useGames() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getGames();
      if (response) setGames(response);
    })();
  }, []);

  return { games };
}
