import { useEffect, useState } from "react";
import { getDataGames, GameBannerProps } from "../../services/gets/games";

type ArrGameBannerProps = Array<GameBannerProps>;

export const useGetGames = () => {
  const [game, setGame] = useState<ArrGameBannerProps>([]);

  useEffect(() => {
    (async () => {
      const listGames: ArrGameBannerProps = await getDataGames();
      setGame(listGames);
    })();
  }, []);

  return { game };
};
