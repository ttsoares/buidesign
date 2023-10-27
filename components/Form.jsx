import React, { useState } from "react";

function ContactForm({ formData, setFormData, submit }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
      <h2 className="mb-5 text-3xl form-font-bold">
        Para que possamos responder seu contato:
      </h2>
      <form onSubmit={submit} className="space-y-5">
        <div className="flex justify-between space-x-8 w-full">
          <div>
            <label htmlFor="firstName">Nome:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Sobrenome (caso PF):</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex justify-between space-x-8 w-full">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Telefone:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center">
            <label htmlFor="message">Menssagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
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
