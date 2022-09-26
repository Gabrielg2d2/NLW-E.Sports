import { useEffect, useState } from "react";
import { getDataGames } from "../../services/gets/games";
import { GameBannerProps } from "../../components/GameBanner";

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
