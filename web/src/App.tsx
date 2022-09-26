import { Banners } from "./components/Banners";
import { Container } from "./components/Container";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Header } from "./components/Header";
import { useGetGames } from "./functions/hooks/useGetGames";

function App() {
  const { game } = useGetGames();

  return (
    <Container>
      <Header />

      <Banners arrBanners={game} />

      <CreateAdBanner />
    </Container>
  );
}

export default App;
