import { Banners } from "./components/Banners";
import { Container } from "./components/Container";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Header } from "./components/Header";
import { useGetGames } from "./functions/hooks/useGetGames";

function App() {
  const { games } = useGetGames();

  return (
    <Container>
      <Header />

      <Banners arrBanners={games} />

      <CreateAdBanner />
    </Container>
  );
}

export default App;
