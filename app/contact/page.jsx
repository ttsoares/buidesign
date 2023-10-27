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

  async function submit(event) {
    event.preventDefault();

    const serviceId = "service_dp8kh53";
    const templateId = "template_yjte46j";

    // try {
    //   await emailjs.send(serviceId, templateId, {
    //     nome: formData.firstName + " " + formData.lastName,
    //     email: formData.email,
    //     fone: formData.phoneNumber,
    //     mensagem: formData.message,
    //   });
    //   alert("email successfully sent check inbox");
    // } catch (error) {
    //   console.log(error);
    // }
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
