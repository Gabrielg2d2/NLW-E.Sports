import logoImg from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} className="App-logo" alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="mx-1 bg-nlw-gradient text-transparent bg-clip-text ">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <a href="" className="relative rounded-lg overflow-hidden">
            <img
              key={`game_${item}`}
              src={`./src/assets/cards/game${item}.png`}
              alt={`game_${item}`}
            />
            <div className=" w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
              <strong className="font-bold text-white">Name Game</strong>
              <span className="text-zinc-300 text-sm block mt-1">
                4 anúncios
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="rounded-lg self-stretch overflow-hidden pt-1 mt-8 bg-nlw-gradient">
        <div className="bg-[#2A2634] px-8 py-6 mt-1 flex justify-between items-center">
          <div>
            <span className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </span>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded-md">
            Pulicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
