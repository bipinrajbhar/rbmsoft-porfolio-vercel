export default function Works() {
  return (
    <section id="works" className="px-10 mx-auto my-10 max-w-7xl">
      <h2 className="mb-6 tracking-wider after:block after:w-full after:h-0.5 after:bg-gray-600 inline-block">
        WORKS
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <figure className="aspect-video">
          <div className="filter ">
            <img
              className="border rounded-md"
              src="https://res.cloudinary.com/dqhskqqa6/image/upload/v1641124330/rbm-software-inc/works/j9zwahumxhyanelhoheo.webp"
              alt="rh.com"
            />
          </div>
          <figcaption>
            <a
              className="after:h-0.5 text-sm text-gray-400 mt-2 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="https://rh.com/"
              target="_blank"
            >
              Restoration & Hardware
            </a>
          </figcaption>
        </figure>
        <figure className="aspect-video">
          <div className="filter ">
            <img
              className="border rounded-md"
              src="https://res.cloudinary.com/dqhskqqa6/image/upload/v1641125260/rbm-software-inc/works/bntrctrshtqmy1phctva.webp"
              alt="RHBaby&Child"
            />
          </div>
          <figcaption>
            <a
              className="after:h-0.5 text-sm text-gray-400 mt-2 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="https://rhbabyandchild.rh.com/"
              target="_blank"
            >
              RH Baby & Child
            </a>
          </figcaption>
        </figure>
        <figure className="aspect-video">
          <div className="filter ">
            <img
              className="border rounded-md"
              src="https://res.cloudinary.com/dqhskqqa6/image/upload/v1641125705/rbm-software-inc/works/blfrhrkee12scueknolu.webp"
              alt="RHBaby&Child"
            />
          </div>
          <figcaption>
            <a
              className="after:h-0.5 text-sm text-gray-400 mt-2 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="https://www.att.com/"
              target="_blank"
            >
              AT & T
            </a>
          </figcaption>
        </figure>
        <figure className="aspect-video">
          <div className="filter ">
            <img
              className="border rounded-md"
              src="https://res.cloudinary.com/dqhskqqa6/image/upload/v1641125667/rbm-software-inc/works/bczotm6wwvhnc81vrcei.webp"
              alt="RHBaby&Child"
            />
          </div>
          <figcaption>
            <a
              className="after:h-0.5 text-sm text-gray-400 mt-2 after:bg-gray-600 hover:text-gray-600 after:block after:w-0 hover:after:w-full transition-all after:duration-150 inline-block"
              href="https://www.jennycraig.com/"
              target="_blank"
            >
              Jenny Craig
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
