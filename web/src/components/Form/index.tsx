import { Input } from "./components/Input";
import { GameController } from "phosphor-react";

export function Form() {
  return (
    <form action="" className="mt-8 flex flex-col gap-4">
      <Input
        id="game"
        label="Qual o game?"
        placeholder="Selecione o game que deseja"
      />
      <Input
        id="name"
        label="Seu nome (ou nickName)"
        placeholder="Como te chamam dentro do game?"
      />

      <div className="grid grid-cols-2 gap-6">
        <Input
          id="yearsPlaying"
          label="Joga a quantos anos?"
          type="number"
          name="yearsPlaying"
          placeholder="Tudo bem ser ZERO"
        />

        <Input
          id="discord"
          label="Qual o seu Discord?"
          type="text"
          name="discord"
          placeholder="Usuário#0000"
        />
      </div>

      <div className="flex">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Quando costuma jogar?</label>
          <div className="flex space-x-1">
            <button
              title="Domingo"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Dom
            </button>
            <button
              title="Segunda-feira"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Seg
            </button>
            <button
              title="Terça-feira"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Ter
            </button>
            <button
              title="Quarta-feira"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Qua
            </button>
            <button
              title="Quinta-feira"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Qui
            </button>
            <button
              title="Sexta-feira"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Sex
            </button>
            <button
              title="Sábado"
              type="button"
              className="w-[54px] h-10 rounded bg-zinc-900 hover:bg-neutral-900"
            >
              Sab
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="hourStart">Qual horário do dia?</label>
        <div className="grid grid-cols-2 gap-4">
          <Input id="hourStart" type="time" name="hourStart" placeholder="De" />
          <Input id="hourEnd" type="time" name="hourEnd" placeholder="Até" />
        </div>
      </div>

      <div className="mt-2 space-x-2">
        <input id="checkbox" type="checkbox" name="checkbox" />
        <label htmlFor="checkbox">Costumo me conectar ao chat de voz</label>
      </div>

      <footer className="mt-4 flex justify-end gap-4">
        <button
          type="button"
          className="bg-zinc-500 font-semibold rounded-md flex items-center gap-2 p-5 h-12 hover:bg-zinc-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-violet-500 font-semibold rounded-md flex items-center gap-2 p-5 h-12 hover:bg-purple-600"
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}
