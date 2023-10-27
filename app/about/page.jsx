import React from "react";

const Pahe = () => {
  return (
    <div className="w-full h-screen p-24">
      <section className="w-[80%] h-screen mx-auto">
        <h1 className="font-bold text-2xl mb-4">Nosso time:</h1>
        <h2 className="font-semibold">Thomas</h2>
        <p>Desenvolverdor React</p>
        <p>NextJS / TailwindCSS. Front e backend.</p>
        <div className="h-1 w-full border-b border-slate-500 mb-4" />
        <h2 className="font-semibold">Cristine</h2>
        <p>Psicóloga UX</p>
        <p>Personas, Jornadas e Pesquisa Qualitativa</p>
        <div className="h-1 w-full border-b border-slate-500 mb-4" />
        <h2 className="font-semibold">Pedro</h2>
        <p>Segurança e LGPD</p>
        <p>Especialista em SEO</p>
        <div className="h-1 w-full border-b border-slate-500 mb-4" />
        <h2 className="font-semibold">Marina</h2>
        <p>Designer UI</p>
        <p>Tipologia e psicologia das cores.</p>
      </section>
    </div>
  );
};

export default Pahe;
