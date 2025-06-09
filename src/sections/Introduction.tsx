import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="max-h-[600px] sm:max-h-full h-screen relative">
      <div className="bg-[url(@assets/top_section2.png)] bg-center bg-cover w-full h-full"></div>
      <div className="absolute bottom-[40px] w-full text-center">
        <h2 className="font-brasilia text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-[40px]">
          {t("introNames")}
        </h2>
        <h3 className="font-display text-white text-2xl sm:text-3xl md:text-4xl p-3 sm:p-6 border-t-1 border-b-1 inline-block">
          {t("introDate")}
        </h3>
      </div>
    </div>
  );
}

export default Introduction;
