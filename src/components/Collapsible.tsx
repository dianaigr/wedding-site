import * as React from "react";

import "./style/collapsible.css";

type CollapsibleProps = {
  label: string,
  content: string,
  link?: string,
  linkName?: string
}

function Collapsible({ label, content, link, linkName }: CollapsibleProps) {
  const [isOpen, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`mb-[10px] block bg-gray-100 p-[16px] pl-[40px] collapsible ${isOpen && "open"}`}>
      <button
        onClick={toggle}
        className="font-display text-lg text-grey-900 flex justify-between text-left collapsible-button w-full"
      >
        {label}
      </button>
      <div className="font-display text-base block text-left collapsible-content">
        {isOpen && (
          <>
            {content}
            {link && (
              <a href={link} target="_blank" className="block">
                {linkName}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Collapsible;
