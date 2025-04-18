import * as React from "react";

import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-[80px] mb-[40px]">
      <span className="font-display text-lg text-grey-900 mb-[20px] block">
        {t("aboutSectionSubtitle")}
      </span>
      <h2 className="font-brasilia text-green-700 text-4xl">
        {t("aboutSectionTitle")}
      </h2>
      <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
        <img src="src/assets/Heart.svg" alt="" className="inline-block" />
      </span>

      <div className="grid grid-cols-3 mb-[35px] min-h-[330px]">
        <div className="text-right p-[40px] bg-gray-100">
          <span className="font-display block text-lg mb-[8px]">
            {t("aboutSectionGroomName")}
          </span>
          <span className="font-display block text-sm">
            {t("aboutSectionGroom")}
          </span>
        </div>

        <div className="bg-[url(src/assets/about.jpg)] bg-center bg-cover" />

        <div className="text-left p-[40px] bg-gray-100">
          <span className="font-display block text-lg mb-[8px]">
            {t("aboutSectionBrideName")}
          </span>
          <span className="font-display block text-sm">
            {t("aboutSectionBride")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
