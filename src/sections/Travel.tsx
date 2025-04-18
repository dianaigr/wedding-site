import * as React from "react";

import { useTranslation } from "react-i18next";

function Travel() {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-[80px] mb-[40px]">
      <span className="font-display text-lg text-grey-900 mb-[20px] block">
        {t("travelSectionSubTitle")}
      </span>
      <h2 className="font-brasilia text-green-700 text-4xl">
        {t("travelSectionTitle")}
      </h2>
      <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
        <img src="src/assets/Heart.svg" alt="" className="inline-block" />
      </span>

      <div className="grid grid-cols-2 mb-[35px]">
        <div className="text-left">
          <span className="font-display block text-lg mb-[8px]">
            {t("travelSectionStayTitle")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Travel;
