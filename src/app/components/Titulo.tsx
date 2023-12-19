interface Titulo {
  title: string;
}

export function Titulo({ title }: Titulo) {
  return (
    <h1 className="bg-red-400 text-4xl text-gray-800 w-48 m-3">{title}</h1>
  );
}
