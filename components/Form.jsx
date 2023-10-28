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
          <div>
            <label htmlFor="firstName">Nome:</label>
            <input
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

          <div>
            <label htmlFor="lastName">Sobrenome (caso PF):</label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
        </div>

        <div className="flex justify-between space-x-8 w-full">
          <div>
            <label htmlFor="email">Email:</label>
            <input
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

          <div>
            <label htmlFor="phoneNumber">Telefone:</label>
            <input type="tel" id="phoneNumber" {...register("phoneNumber")} />
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center">
            <label htmlFor="message">Menssagem:</label>
            <textarea
              id="message"
              name="message"
              {...register("message")}
              className="w-[460px] h-32"
            />
          </div>

          <button
            className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-50 transition-transform mx-5 flex duration-300"
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
