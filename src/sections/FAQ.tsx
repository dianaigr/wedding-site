import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

import Collapsible from "../components/Collapsible";

type FAQ = {
  question: string;
  answer: string;
  link?: string;
  linkName?: string;
}

function FAQ() {
  const { t } = useTranslation();

  var faqs = t("faqs", { returnObjects: true });

  // https://www.coimbraportugaltourism.com/

  return (
    <div id="other" className="w-full max-w-7xl m-auto">
      <div className="text-center mt-[80px] mb-[40px]">
        <span className="font-display text-lg text-grey-900 mb-[20px] block">
          {t("faqSectionSubTitle")}
        </span>
        <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
          {t("faqSectionTitle")}
        </h2>
        <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
          <img src={Heart} alt="" className="inline-block" />
        </span>

        {(faqs as Array<FAQ>).map(faq => {
          return (
            <Collapsible
              label={faq.question}
              content={faq.answer}
              link={faq.link}
              linkName={faq.linkName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
