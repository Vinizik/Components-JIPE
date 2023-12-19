interface UrlAndDesc {
  url: string;
  desc: string;
}

export function Imagem({ url, desc }: UrlAndDesc) {
  return <img src={url} alt={desc} className="auto h-80 m-3" />;
}
