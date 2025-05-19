import * as React from "react";

import { useTranslation } from "react-i18next";

function Collapsible({ label, content, link, linkName }) {
  const { t } = useTranslation();
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="mb-[10px] block bg-gray-100 p-[16px] pl-[40px]">
      <button
        onClick={toggle}
        className="font-display text-lg text-grey-900 block text-left"
      >
        {label}
      </button>
      {isOpen && (
        <div className="font-display text-base block text-left pt-[10px] pb-[10px]">
          {content}
          {link && (
            <a href={link} target="_blank" className="block">
              {linkName}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
