import { useEffect, useState } from "react";
import { Banners } from "./components/Banners";
import { Container } from "./components/Container";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Header } from "./components/Header";

function App() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGame(data));
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
