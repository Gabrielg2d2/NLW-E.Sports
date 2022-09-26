import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <Dialog.Root>
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

          <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded-md">
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />

        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form action="">
            <div>
              <label htmlFor="game">Qual o game?</label>
              <input
                id="game"
                type="text"
                name="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>

            <div>
              <label htmlFor="name">Seu nome (ou nickName)</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div>
              <div>
                <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                <input
                  id="yearsPlaying"
                  type="number"
                  name="yearsPlaying"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div>
                <label htmlFor="discord">Qual o seu Discord?</label>
                <input
                  id="discord"
                  type="text"
                  name="discord"
                  placeholder="Usuário#0000"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <input id="weekDays" type="text" name="weekDays" />
              </div>

              <div>
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <input
                  id="hourStart"
                  type="time"
                  name="hourStart"
                  placeholder="De"
                />
                <input
                  id="hourEnd"
                  type="time"
                  name="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>

            <div>
              <label htmlFor="checkbox">
                Costumo me conectar ao chat de voz
              </label>
              <input id="checkbox" type="checkbox" name="checkbox" />
            </div>

            <footer>
              <button>Cancelar</button>
              <button type="submit">
                <GameController />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
