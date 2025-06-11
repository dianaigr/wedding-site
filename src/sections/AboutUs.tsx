import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div id="about" className="w-full max-w-7xl m-auto">
      <div className="text-center mt-[80px] mb-[40px]">
        <span className="font-display text-lg text-grey-900 mb-[20px] block">
          {t("aboutSectionSubtitle")}
        </span>
        <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
          {t("aboutSectionTitle")}
        </h2>
        <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
          <img src={Heart} alt="" className="inline-block" />
        </span>

        <div className="block sm:grid sm:grid-cols-3 mb-[35px] min-h-[330px]">
          <div className="text-center sm:text-right p-[40px] bg-gray-100">
            <span className="font-display block text-2xl mb-[8px]">
              {t("aboutSectionGroomName")}
            </span>
            <span className="font-display block text-base">
              {t("aboutSectionGroom")}
            </span>
          </div>

          <div className="bg-[url(@assets/about.jpg)] bg-center bg-cover h-[330px] sm:h-full" />

          <div className="text-center sm:text-left p-[40px] bg-gray-100">
            <span className="font-display block text-2xl mb-[8px]">
              {t("aboutSectionBrideName")}
            </span>
            <span className="font-display block text-base">
              {t("aboutSectionBride")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
