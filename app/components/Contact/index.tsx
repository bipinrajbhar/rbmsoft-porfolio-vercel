import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-10 mx-auto my-10 max-w-7xl scroll-m-24">
      <div>
        <h2 className="mb-6 tracking-wider after:block after:w-full after:h-0.5 after:bg-gray-600 inline-block">
          Contact
        </h2>
      </div>
      <div className="grid w-full grid-cols-2 gap-10 p-6 overflow-hidden rounded-lg bg-gray-50">
        <div className="flex flex-col items-center justify-center [transform:rotate3d(0,90,0,180deg)]">
          <img src="/img/undraw/online-message.svg" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
