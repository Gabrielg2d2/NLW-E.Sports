import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <>
      <img src={logoImg} className="App-logo" alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="mx-1">duo</span>
        está aqui.
      </h1>
    </>
  );
}
