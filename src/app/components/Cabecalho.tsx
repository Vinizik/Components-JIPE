import { Titulo } from "@/app/components/Titulo";
import { Paragrafo } from "@/app/components/Paragrafo";

export function Cabecalho() {
  return (
    <header className="bg-black w-auto text-center m-3 p-3 flex justify-between">
      <Titulo title="Titulo do Cabecalho" />
      <Paragrafo text="Descrição do Cabecalho" />
    </header>
  );
}
