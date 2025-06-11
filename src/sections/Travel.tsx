import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

function Travel() {
  const { t } = useTranslation();

  return (
    <div id="travel" className="w-full max-w-7xl m-auto">
      <div className="text-center mt-[80px] mb-[40px]">
        <span className="font-display text-lg text-grey-900 mb-[20px] block">
          {t("travelSectionSubTitle")}
        </span>
        <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
          {t("travelSectionTitle")}
        </h2>
        <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
          <img src={Heart} alt="" className="inline-block" />
        </span>

        <div className="block sm:grid sm:grid-cols-2">
          <div className="text-left p-[40px] bg-gray-100">
            <span className="font-display block text-2xl mb-[8px]">
              {t("travelSectionStayTitle")}
            </span>
            <span className="font-display block text-base mb-[8px]">
              {t("travelSectionStayDescription")}
            </span>
          </div>
          <div className="bg-[url(@assets/coimbra-portugal.jpg)] bg-center bg-cover h-[250px] sm:h-full" />
        </div>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="bg-[url(@assets/coimbra-portugal.jpg)] bg-center bg-cover" />
          <div className="text-left p-[40px] bg-gray-100">
            <span className="font-display block text-2xl mb-[8px]">
              {t("travelSectionTransportTitle")}
            </span>
            <span className="font-display block text-base mb-[8px]">
              {t("travelSectionTransportDescription")}
            </span>
            <div className="font-display text-base mb-[8px]">
              {t("travelSectionTransportLink1")}
              <a
                href="https://www.cp.pt/passageiros/pt"
                target="_blank"
                className="text-green-700 underline pl-[5px]"
              >
                cp.pt
              </a>
            </div>
            <div className="font-display text-base mb-[8px]">
              {t("travelSectionTransportLink2")}
              <a
                href="https://rede-expressos.pt"
                target="_blank"
                className="text-green-700 underline pl-[5px]"
              >
                rede-expressos.pt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
