import React from "react";

const STEPS = [
  {
    titulo: "1. Projeto Figma/Sketch:",
    texto:
      "First, a designer creates a visual design of a website or app in Figma. This design includes everything from the layout of elements (like buttons and images) to the colors, fonts, and spacing between them. It's like creating a blueprint for how the website should look.",
  },
  {
    titulo: "2. Inspeção e Medições:",
    texto:
      "Developers inspect the Figma design to understand its structure. They look at how different elements are positioned, how big they are, and what colors and fonts are used. It's like taking measurements and notes from the blueprint.",
  },
  {
    titulo: "3. Estrutura HTML:",
    texto:
      "Based on the design, developers write HTML code. HTML is like the skeleton of a webpage. They create containers for different sections and elements, like headers, navigation menus, content areas, and footers. These containers are like the frame of the car.",
  },
  {
    titulo: "4. Formatação com CSS:",
    texto:
      "To make the webpage look like the Figma design, developers use CSS (Cascading Style Sheets). They specify the colors, fonts, sizes, and positions of elements in the HTML. This is like painting the car and adding details to match the design's colors and styles.",
  },
  {
    titulo: "5. Imagens e Media:",
    texto:
      "If the design includes images, developers add these to the code. It's like placing stickers or logos on the car according to the design.",
  },
  {
    titulo: "6. Responsividade:",
    texto:
      "Figma designs are often made for different screen sizes (like desktop and mobile). Developers use responsive design techniques to ensure the website looks good on various devices. This is similar to making sure the car's design works for both a small sports car and a large SUV.",
  },
  {
    titulo: "7. Interatividade com JS:",
    texto:
      "If the design includes interactive features like buttons, forms, or animations, developers use JavaScript to make them work. It's like adding an engine to the car that lets it move and respond to driver input.",
  },
  {
    titulo: "8. Testest e Correções: ",
    texto:
      "Developers test the website in various web browsers to ensure it looks and works as expected. They fix any issues, just like a car goes through quality control and gets fixed if there are problems.",
  },
  {
    titulo: "9. Hospedagem na Nuvem:",
    texto:
      "Finally, the coded website is hosted on a web server and made accessible on the internet. It's like driving the car out of the factory and putting it on the road for people to use.",
  },
];

const Page = () => {
  return (
    <div className="w-[80%] flex flex-col mx-auto">
      <p className="mb-3 font-bold">
        Translating a design from Figma into code for a web browser is like
        turning a detailed drawing of a car into a working automobile.
        Here&pops;s a simplified step-by-step explanation of how it works:
      </p>
      {STEPS.map((item, index) => (
        <div className="p-2 flex w-full" key={index}>
          <p className="w-1/5 font-bold">{item.titulo}</p>
          <p className="w-4/5">{item.texto}</p>
        </div>
      ))}
      <p className="mt-3 font-semibold">
        In a nutshell, Figma is like the design blueprint, and the developers
        are the builders who use HTML, CSS, and JavaScript to turn that
        blueprint into a functional and interactive website, just as an
        automobile is built based on a detailed design.
      </p>
    </div>
  );
};

export default Page;
