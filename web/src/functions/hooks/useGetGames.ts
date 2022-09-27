import { useEffect, useState } from "react";
import { getDataGames } from "../../services/gets/games";
import { GameBannerProps } from "../../types/GameBannerProps";

type ArrGameBannerProps = Array<GameBannerProps>;

export const useGetGames = () => {
  const [games, setGames] = useState<ArrGameBannerProps>([]);

  useEffect(() => {
    (async () => {
      const listGames: ArrGameBannerProps = await getDataGames();
      setGames(listGames);
    })();
  }, []);

  return { games };
};
