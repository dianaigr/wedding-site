import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="timeline"className="w-full max-w-7xl m-auto">
      <div className="text-center mt-[40px] mb-[40px]">
        <span className="font-display text-lg text-grey-900 mb-[20px] block">
          {t("eventSectionSubtitle")}
        </span>
        <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
          {t("eventSectionTitle")}
        </h2>
        <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
          <img src={Heart} alt="" className="inline-block" />
        </span>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="text-center sm:text-right">
            <span className="block font-display text-green-900 text-2xl">
              {t("eventBreakfastTitle")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventBreakfastDescription")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventBreakfastTime")}
            </span>
          </div>
          <div className="" />
        </div>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="" />
          <div className="text-center sm:text-left">
            <span className="block font-display text-green-900 text-2xl">
              {t("eventWeddingTitle")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventWeddingDescription")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventWeddingTime")}
            </span>
          </div>
        </div>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="text-center sm:text-right">
            <span className="block font-display text-green-900 text-2xl">
              {t("eventReceptionTitle")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventReceptionDescription")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventReceptionTime")}
            </span>
          </div>
          <div className="" />
        </div>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="" />
          <div className="text-center sm:text-left">
            <span className="block font-display text-green-900 text-2xl">
              {t("eventSunsetTitle")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventSunsetDescription")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventSunsetTime")}
            </span>
          </div>
        </div>

        <div className="block sm:grid sm:grid-cols-2 mb-[35px]">
          <div className="text-center sm:text-right">
            <span className="block font-display text-green-900 text-2xl">
              {t("eventPartyTitle")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventPartyDescription")}
            </span>
            <span className="block font-display text-green-900 text-lg">
              {t("eventPartyTime")}
            </span>
          </div>
          <div className="" />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
