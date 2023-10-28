"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import ContactForm from "@/components/Form";

const Page = () => {
  // Formulário
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();

    const serviceId = "service_dp8kh53";
    const templateId = "template_yjte46j";

    try {
      await emailjs.send(serviceId, templateId, {
        nome: formData.firstName + " " + formData.lastName,
        email: formData.email,
        fone: formData.phoneNumber,
        mensagem: formData.message,
      });
      setLoading(flase);
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <div className="w-full h-screen ">
        <div className="flex w-full h-full justify-center items-center">
          <h1 className=" text-5xl font-bold animate-bounce">Enviando...</h1>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full h-screen">
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        submit={submit}
      />
    </section>
  );
};

export default Page;
