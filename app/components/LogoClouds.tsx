import RHLogo from "../../public/images/brands/rh.svg";
import RHBabyAndChildLogo from "../../public/images/brands/rh-baby-and-child.svg";

export default function LogoClouds() {
  return (
    <section className="mt-10 mb-6">
      <p className="mb-6 font-semibold tracking-wider text-center text-gray-700">
        TRUSTED BY 2 FORWARD-THINKING COMPANIES
      </p>
      <div className="grid grid-cols-4 gap-0.5">
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <a href="https://rh.com/" target="_blank">
            <img src={RHLogo} alt="RH" />
          </a>
        </div>
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <a href="https://rhbabyandchild.rh.com/" target="_blank">
            <img src={RHBabyAndChildLogo} alt="RH Baby & Child" />
          </a>
        </div>
      </div>
    </section>
  );
}
