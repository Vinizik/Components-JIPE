import { Itens } from "@/app/components/Itens";

export function ListaItens() {
  return (
    <ul className="bg-lime-500 w-28 h-48 m-3">
      <Itens nomeItem="nomeItem1" />
      <Itens nomeItem="nomeItem2" />
      <Itens nomeItem="nomeItem3" />
      <Itens nomeItem="nomeItem4" />
    </ul>
  );
}
