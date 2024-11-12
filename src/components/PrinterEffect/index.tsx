import React from "react";

type PrinterEffectProps = {
  originalText: string;
};
const PrinterEffect: React.FC<PrinterEffectProps> = ({ originalText }) => {
  return (
    <p className="animate-printer text-[14px]  md:text-2xl  md:tracking-widest overflow-hidden whitespace-nowrap w-full md:max-w-[80%]">
      {originalText}
    </p>
  );
};
export default PrinterEffect;
