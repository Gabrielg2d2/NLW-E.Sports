import { useEffect, useState } from "react";
import { getDataGames, GameBannerProps } from "../../services/gets/games";

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
