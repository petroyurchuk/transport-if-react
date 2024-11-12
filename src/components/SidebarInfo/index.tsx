type SidebarInfoProps = {
  label: string;
  inputValue: string;
};
const SidebarInfo: React.FC<SidebarInfoProps> = ({ label, inputValue }) => {
  return (
    <div className="relative px-3 py-1 border-[1px] border-gray-300 min-w-[200px] min-h-[40px] z-100 rounded-md mb-5">
      <span className="absolute -top-3 bg-white px-3 text-purple-500 font-bold">
        {label}
      </span>
      {inputValue.includes("+380") ? (
        <a
          href={`tel:${inputValue}`}
          className="absolute bottom-2 hover:underline"
        >
          {inputValue}
        </a>
      ) : (
        <span className="absolute bottom-2">{inputValue}</span>
      )}
    </div>
  );
};
export default SidebarInfo;
