import React from "react";

type InputWrapperProps = {
  children: React.ReactNode;
};
const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => {
  return (
    <div className="relative max-w-[300px] w-full">
      {children}
      <div className="absolute -left-1 top-[50%] translate-y-[-50%] size-2 rounded-full bg-purple-600 border-[1px] border-white"></div>
    </div>
  );
};
export default InputWrapper;
