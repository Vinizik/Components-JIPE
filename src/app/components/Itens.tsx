interface NomedoItem {
  nomeItem: string;
}

export function Itens({ nomeItem }: NomedoItem) {
  return <li className="p-3">{nomeItem}</li>;
}
