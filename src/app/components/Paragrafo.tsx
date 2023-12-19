interface ParagraphText {
  text: string;
}

export function Paragrafo({ text }: ParagraphText) {
  return <p className="m-3 bg-emerald-300 text-2xl w-48">{text}</p>;
}
