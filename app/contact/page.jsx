"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import Link from "next/link";

import ContactForm from "@/components/Form";

import usePage from "/store/currPage.js";

const Page = () => {
  const { choose } = usePage();

  useEffect(() => {
    emailjs.init("CFMMXCFGd0f_hv9k2");
    choose(5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
