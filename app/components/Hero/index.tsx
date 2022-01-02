import heroImageUrl from "../../../public/img/hero.webp";

export default function Hero() {
  return (
    <section className="">
      <figure className="relative bg-gray-900 [aspect-ratio:2.39] rounded-xl overflow-hidden">
        <img
          className="object-cover w-full h-full opacity-70"
          src={heroImageUrl}
          alt="hero"
        />
      </figure>
    </section>
  );
}
