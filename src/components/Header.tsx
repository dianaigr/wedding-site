import * as React from "react";

import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed w-full z-999">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6">
        <div className="flex flex-row items-center gap-10 text-white">
          <div className="font-display">{t("headerMenuItem1")}</div>
          <div className="font-display">{t("headerMenuItem2")}</div>
          <div className="bg-[url(src/assets/LOGO.svg)] font-brasilia bg-center bg-cover w-[160px] h-[110px]"></div>
          <div className="font-display">{t("headerMenuItem3")}</div>
          <div className="font-display">{t("headerMenuItem4")}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
