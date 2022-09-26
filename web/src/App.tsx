import { useEffect, useState } from "react";
import { Banners } from "./components/Banners";
import { Container } from "./components/Container";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBannerProps } from "./components/GameBanner";
import { Header } from "./components/Header";
import { getDataGames } from "./services/gets/games";

function App() {
  const [game, setGame] = useState<Array<GameBannerProps>>([]);

  useEffect(() => {
    (async () => {
      const listGames = await getDataGames();
      setGame(listGames);
    })();
  }, []);

  return (
    <Container>
      <Header />

      <Banners arrBanners={game} />

      <CreateAdBanner />
    </Container>
  );
}

export default App;
