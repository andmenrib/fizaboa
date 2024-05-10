import Link from "next/link";
import Layout from "../components/Layout";
import Animation from "../components/Animation";
import { useEffect, useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";

function IndexPage() {
  const [animation, setAnimation] = useState<any>();
  const [scroll, setScroll] = useState<number>();

  useEffect(() => {
    setAnimation(<Animation />);
    setScroll(window.innerWidth - document.documentElement.clientWidth);
    console.log(scroll);
  });
  return (
    // <Layout title="Home | Next.js + TypeScript Example">
    <div className="">
      <Row
        className={[
          false
            ? "!w-[calc(100vw_-_" + scroll + "px)]"
            : "!w-[calc(100vw_-_20px)]",
          "p-6 !pt-12 sm:pt-6",
        ].join(" ")}
      >
        <Col md={4}>
          <div className="">
            <h1 className="font-['Life_Savers'] pt-3 text-white text-6xl tracking-widest leading-[.6] uppercase text-center">
              f<span className="text-5xl align-text-top">i</span>z
              <br />
              <span className="text-yellow-600 lowercase align-super">
                - a -
              </span>
              <br />b<span className="text-5xl">o</span>a
            </h1>
            <h5 className="font-['Sacramento'] text-yellow-600 text-2xl text-center -rotate-6">
              faz a boa você também!
            </h5>
            <h5 className="font-['BioRhyme'] text-white text-xl text-center">
              descontos <span className="text-red-600">&</span>
              <br />
              promoções
            </h5>
          </div>
          <div className="ml-16 md:ml-0">
            <h3 className="font-['Sacramento'] text-white -rotate-6 z-50">
              Edição atual:
            </h3>
            <div className="-z-10 scale-50 -mt-16 -ml-16 md:-ml-12 rotate-6 relative w-[28rem] h-[16rem] bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0)_75%),url('https://images.unsplash.com/photo-1633520593598-8070a7f23b6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover rounded-3xl bg-clip-padding border-white border-2">
              {/* <h6 className="relative flex justify-start items-end text-white">
            Gustavo Sánchez
          </h6> */}
              <div className="absolute -bottom-2 right-4">
                <p className="text-white ml-4 font-['Alata'] text-[0.5rem] text-[.6rem] text-end">
                  Foto: unsplash.com <br />
                  [@foodistika] Elena Leya
                </p>
              </div>
              <div className="absolute top-4 left-[7rem]">
                <h6 className="text-white ml-4 font-['Alata']">
                  Cartão de Membro
                </h6>
              </div>
              <div className="absolute bottom-1 left-3">
                <h3 className="text-white mr-4 text-[.7rem] font-['Alata']">
                  Edição I
                </h3>
              </div>
              <div className="absolute top-[4rem] right-6">
                {/* <h6 className="font-['Noto_Serif'] text-right [writing-mode:vertical-rl] rotate-180">
            Descontos e Promoções para
            <br />
            Comércio e Serviços
          </h6> */}
                <h6 className="font-['BioRhyme'] text-white text-center leading-[.8] [writing-mode:vertical-rl] rotate-180">
                  descontos <span className="text-red-600">& </span>
                </h6>
              </div>
              <div className="absolute top-[2rem] right-3">
                <h6 className="font-['BioRhyme'] text-white text-center leading-[.8] [writing-mode:vertical-rl] rotate-180">
                  promoções
                </h6>
              </div>
              <div className="absolute top-[2.9rem] end-9">
                {/* <div className="flex justify-center items-center"> */}
                <h1 className="font-['Life_Savers'] text-white text-6xl tracking-widest leading-[.6] uppercase text-center">
                  f<span className="text-5xl align-text-top">i</span>z
                  <br />
                  <span className="text-yellow-600 lowercase align-super font-bold">
                    - a -
                  </span>
                  <br />b<span className="text-5xl">o</span>a
                </h1>

                {/* </div> */}
              </div>
            </div>
            <div className="-z-20 scale-50 -mt-48 -ml-32 md:ml-20 -rotate-6 relative px-3 py-2 w-[28rem] h-[16rem] bg-slate-100 bg-center bg-cover rounded-3xl bg-clip-padding border-white border-2">
              <div className="absolute bottom-4 left-5">
                <h1 className="font-['Life_Savers'] text-black text-2xl tracking-widest leading-[.6] uppercase text-center border-yellow-500 border-b-2">
                  f<span className="text-xl align-text-top">i</span>z
                  <br />
                  <span className="text-slate-600 lowercase align-super">
                    - a -
                  </span>
                  <br />b<span className="text-xl">o</span>a
                </h1>
              </div>
              <h4 className="absolute bottom-1 left-20 font-['Sacramento'] text-black text-xl text-center">
                faz a boa você também!
              </h4>
              <h4 className="absolute top-5 right-5 font-['Life_Savers'] text-black text-xl text-center">
                onde fazer a boa:
              </h4>
              <img
                className="absolute top-14 right-5"
                width={100}
                src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
              />
              <h6 className="absolute bottom-7 right-5 font-['Alata'] text-black text-right text-[.6rem] border-b-2 pb-2 border-black">
                Contato & Renovação: <br />
                Rosa Maria (32) 99920-3720
              </h6>
              <h6 className="absolute bottom-3 right-5 font-['Alata'] text-black text-right text-[.45rem]">
                Edição I - Cartão com validade limitada
              </h6>
            </div>
          </div>
        </Col>
        <Col className="pt-20 flex-col items-center" md={8}>
          <div className="bg-black/75 p-9">
            {" "}
            <h2 className="font-['Life_Savers'] text-white">
              onde fazer a boa e os benefícios:
            </h2>
            <Accordion className="text-white" alwaysOpen>
              <Accordion.Item
                eventKey="0"
                className="bg-transparent rounded-0 border-0"
              >
                <Accordion.Header className="font-['Alata']">
                  Lanches do Imperador
                </Accordion.Header>
                <Accordion.Body className="font-['Alata'] text-white">
                  X-Tudo{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    30% de desconto na segunda-feira
                  </span>
                  <br /> X-Salada{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    15% de desconto
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="bg-transparent rounded-0 border-0"
              >
                <Accordion.Header className="font-['Alata']">
                  Restaurante Ibiza
                </Accordion.Header>
                <Accordion.Body className="font-['Alata'] text-white">
                  Suco Natural{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    15% de desconto
                  </span>{" "}
                  <br />
                  Marmita{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    10% de desconto na quinta-feira
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="bg-transparent rounded-0 border-0"
              >
                <Accordion.Header className="font-['Alata']">
                  Afonso Materias de Construção
                </Accordion.Header>
                <Accordion.Body className="font-['Alata'] text-white">
                  Tinta de Parede{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    5% de desconto
                  </span>
                  <br />
                  Espatula pequena{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    15% de desconto
                  </span>
                  <br />
                  Na compra de duas latas de verniz{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    ganhe um pincel pequeno
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="bg-transparent rounded-0 border-0"
              >
                <Accordion.Header className="font-['Alata'] text-white">
                  Lava-jato 53
                </Accordion.Header>
                <Accordion.Body className="font-['Alata'] text-white">
                  Lavagem de carro{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    10% de desconto nas terças-feiras
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className="bg-transparent rounded-0 border-0"
              >
                <Accordion.Header className="font-['Alata']">
                  Loja da Ana Luiza
                </Accordion.Header>
                <Accordion.Body className="font-['Alata'] text-white">
                  Na compra de 3 peças{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    ganhe uma bolsa
                  </span>
                  <br />
                  Camisas masculinas selecionadas{" "}
                  <span className="font-['BioRhyme'] text-yellow-600 text-lg">
                    15% de desconto
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
      <div className="sticky top-0 -z-50">{animation}</div>

      {false ? (
        <div className="flex items-center justify-center">
          <div className="relative w-[28rem] h-[16rem] bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0)_75%),url('https://images.unsplash.com/photo-1633520593598-8070a7f23b6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover rounded-3xl bg-clip-padding border-white border-2">
            {/* <h6 className="relative flex justify-start items-end text-white">
            Gustavo Sánchez
        </h6> */}
            <div className="absolute -bottom-2 right-4">
              <p className="text-white ml-4 font-['Alata'] text-[0.5rem] text-[.6rem] text-end">
                Foto: unsplash.com <br />
                [@foodistika] Elena Leya
              </p>
            </div>
            <div className="absolute top-4 left-[7rem]">
              <h6 className="text-white ml-4 font-['Alata']">
                Cartão de Membro
              </h6>
            </div>
            <div className="absolute bottom-1 left-3">
              <h3 className="text-white mr-4 text-[.7rem] font-['Alata']">
                Edição I
              </h3>
            </div>
            <div className="absolute top-[4rem] right-6">
              {/* <h6 className="font-['Noto_Serif'] text-right [writing-mode:vertical-rl] rotate-180">
            Descontos e Promoções para
            <br />
            Comércio e Serviços
      </h6> */}
              <h6 className="font-['BioRhyme'] text-white text-center leading-[.8] [writing-mode:vertical-rl] rotate-180">
                descontos <span className="text-red-600">& </span>
              </h6>
            </div>
            <div className="absolute top-[2rem] right-3">
              <h6 className="font-['BioRhyme'] text-white text-center leading-[.8] [writing-mode:vertical-rl] rotate-180">
                promoções
              </h6>
            </div>
            <div className="absolute top-[2.9rem] end-9">
              {/* <div className="flex justify-center items-center"> */}
              <h1 className="font-['Life_Savers'] text-white text-6xl tracking-widest leading-[.6] uppercase text-center">
                f<span className="text-5xl align-text-top">i</span>z
                <br />
                <span className="text-yellow-600 lowercase align-super font-bold">
                  - a -
                </span>
                <br />b<span className="text-5xl">o</span>a
              </h1>

              {/* </div> */}
            </div>
          </div>
          <div className="relative px-3 py-2 w-[28rem] h-[16rem] bg-slate-100 bg-center bg-cover rounded-3xl bg-clip-padding border-white border-2">
            <div className="absolute bottom-4 left-5">
              <h1 className="font-['Life_Savers'] text-black text-2xl tracking-widest leading-[.6] uppercase text-center border-yellow-500 border-b-2">
                f<span className="text-xl align-text-top">i</span>z
                <br />
                <span className="text-slate-600 lowercase align-super">
                  - a -
                </span>
                <br />b<span className="text-xl">o</span>a
              </h1>
            </div>
            <h4 className="absolute bottom-1 left-20 font-['Sacramento'] text-black text-xl text-center">
              faz a boa você também!
            </h4>
            <h4 className="absolute top-5 right-5 font-['Life_Savers'] text-black text-xl text-center">
              onde fazer a boa:
            </h4>
            <img
              className="absolute top-14 right-5"
              width={100}
              src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
            />
            <h6 className="absolute bottom-7 right-5 font-['Alata'] text-black text-right text-[.6rem] border-b-2 pb-2 border-black">
              Contato & Renovação: <br />
              Rosa Maria (32) 99920-3720
            </h6>
            <h6 className="absolute bottom-3 right-5 font-['Alata'] text-black text-right text-[.45rem]">
              Edição I - Cartão com validade limitada
            </h6>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* <h1 className="text-green-500">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p> */}
    </div>
    // </Layout>
  );
}

export default IndexPage;
