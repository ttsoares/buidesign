import React from "react";

import { useForm } from "react-hook-form";

//--------------------------
function ContactForm({ submit }) {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    const object = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };

    submit(object);
  }

  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
      <h2 className="mb-5 text-3xl form-font-bold">
        Para que possamos responder seu contato:
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="flex justify-between space-x-8 w-full">
          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110">
            <label htmlFor="firstName">Nome:</label>
            <input
              className="rounded-md ml-2"
              type="text"
              id="firstName"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "É necessário preencher o nome.",
                },
              })}
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>

          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110">
            <label htmlFor="lastName">Sobrenome (caso PF):</label>
            <input
              type="text"
              className="rounded-md ml-2"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="flex justify-between space-x-8 w-full">
          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110">
            <label htmlFor="email">Email:</label>
            <input
              className="rounded-md ml-2"
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Isso não parece ser um endereço válio !",
                },
                required: "É necessário preencher o email.",
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div className="shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110">
            <label htmlFor="phoneNumber">Telefone:</label>
            <input
              className="rounded-md ml-2"
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center shadow-md shadow-indigo-600/50 p-3 border-2 bg-slate-400 border-black rounded-lg transition-all duration-300 hover:scale-110">
            <label htmlFor="message">Menssagem:</label>
            <textarea
              id="message"
              name="message"
              {...register("message")}
              className="w-[460px] h-32 rounded-lg ml-2"
            />
          </div>

          <button
            className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-50 transition-transform mx-5 flex duration-300 hover:bg-blue-800 hover:border-2"
            type="submit"
          >
            Submeter
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
