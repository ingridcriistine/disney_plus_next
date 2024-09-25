import type { Metadata } from "next";
import Image from "next/image";

import Logo from "../assets/logo.png"

export const metadata: Metadata = {
  title: "Disney Plus",
  description: "Reprodução do site da Disney Plus",
};

export default function Home() {

  return (
    <div className="w-full bg-black text-white p-2">
      <section className="home flex justify-center items-center flex-col">
        <button className="w-auto p-2 text-sm border-white border-solid border rounded">ENTRAR</button>
        <Image src={Logo} alt="" className="w-36"/>
        <h2>Chegou o novo Disney+</h2>
        <h3>onde tudo se encontra</h3>
        <button className="mt-5 bg-blue w-80 text-black p-3 rounded">DISNEY+ PADRÃO</button>
        <p>O Disney+ Padrão inclui canais selecionados da ESPN (ESPN e ESPN3)</p>
        <button className="mt-5 bg-blue w-80 text-black p-3 rounded">DISNEY+ PREMIUM</button>
        <p>O Disney+ Premium inclui todos os canais da ESPN, torneios e mais de 500 eventos exclusivos por mês</p>
        <a>Confira os detalhes dos planos</a>
      </section>
      <section className="star">

      </section>
      <section className="plans">

      </section>
    </div>
  );
}
