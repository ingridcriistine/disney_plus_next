import type { Metadata } from "next";
import Image from "next/image";
import Carousel from "@/components/carousel";

import Logo from "../assets/logo.png"
import Arrow from "../assets/arrow.png"

export const metadata: Metadata = {
  title: "Disney Plus",
  description: "Reprodução do site da Disney Plus",
};

export default function Home() {

  return (
    <div className="w-full bg-black text-white p-2">
      <section className="home flex justify-center items-center flex-col">
        <button className="w-auto p-2 z-10 text-sm border-white border-solid border rounded self-end">ENTRAR</button>
        <Carousel/>
        <Image src={Logo} alt="" className="w-36"/>
        <h2>Chegou o novo Disney+</h2>
        <h3>onde tudo se encontra</h3>
        <button className="mt-5 bg-blue w-80 text-black p-3 rounded">DISNEY+ PADRÃO</button>
        <p>O Disney+ Padrão inclui canais selecionados da ESPN (ESPN e ESPN3)</p>
        <button className="mt-5 bg-blue w-80 text-black p-3 rounded">DISNEY+ PREMIUM</button>
        <p>O Disney+ Premium inclui todos os canais da ESPN, torneios e mais de 500 eventos exclusivos por mês</p>
        <a href="" className="underline p-8 text-sm">Confira os detalhes dos planos</a>
        <Image src={Arrow} alt="" className="w-5 opacity-60 m-6"/>
      </section>
      <section className="star">

      </section>
      <section className="plans">
        <h2>Que plano você vai escolher?</h2>
        <p>Você pode alterar ou cancelar seu plano quando quiser.</p>
        <hr/>
          <div className="">
            <div>
              <button>PADRÃO</button>
              <p>R$ 43,90/mês (inclui impostos)**</p>
            </div>
            <div>
              <button>PREMIUM</button>
              <p>R$  62,90/mês (inclui impostos)**</p>
            </div>
          </div>
        <hr/>
      </section>
    </div>
  );
}
