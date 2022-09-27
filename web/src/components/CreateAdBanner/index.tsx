import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "../Form";

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

          <Form />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
