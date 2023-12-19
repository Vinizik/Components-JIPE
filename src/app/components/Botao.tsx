interface ButtonText {
  buttonText: string;
}

const buttonFuction = (): void => {
  window.alert("Botao clicado com sucesso!");
};

export function Botao({ buttonText }: ButtonText) {
  return (
    <button
      onClick={buttonFuction}
      className="bg-orange-900 w-24 h-12 m-3 text-amber-300"
    >
      {buttonText}
    </button>
  );
}
