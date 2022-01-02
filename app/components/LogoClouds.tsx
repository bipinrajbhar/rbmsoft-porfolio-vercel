import RHLogo from "../../public/img/brands/rh.svg";
import RHBabyAndChildLogo from "../../public/img/brands/rh-baby-and-child.svg";
import ATTLogo from "../../public/img/brands/att.svg";
import JennyCraigLogo from "../../public/img/brands/jenny-craig.webp";

export default function LogoClouds() {
  return (
    <section className="mt-10 mb-6">
      <p className="mb-6 font-semibold tracking-wider text-center">
        TRUSTED BY 4 FORWARD-THINKING COMPANIES
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
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <a href="https://www.att.com/" target="_blank">
            <img src={ATTLogo} alt="RH Baby & Child" />
          </a>
        </div>
        <div className="flex items-center justify-center p-8 bg-gray-50">
          <a href="https://www.jennycraig.com/" target="_blank">
            <img
              className="w-auto h-6"
              src={JennyCraigLogo}
              alt="RH Baby & Child"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
