"use client";

import Image from "next/image";
import { Quadrado } from "@/app/components/Quadrado";
import { Titulo } from "@/app/components/Titulo";
import { Botao } from "@/app/components/Botao";
import { ListaItens } from "./components/ListaItens";
import { Imagem } from "@/app/components/Imagem";
import { Paragrafo } from "@/app/components/Paragrafo";
import { Cabecalho } from "./components/Cabecalho";
import { Rodape } from "./components/Rodape";

export default function Home() {
  return (
    <main>
      <Quadrado />
      <Titulo title="Teste título" />
      <Botao buttonText="Clique aqui" />
      <ListaItens />
      <Imagem
        url="https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/03/30123650/lamborghini-revuelto-01-scaled.jpeg"
        desc="Imagem de uma Lamborghini"
      />
      <Paragrafo text="Teste paragrafo" />
      <Cabecalho />
      <Rodape />
    </main>
  );
}
