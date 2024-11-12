type WhyUsItemProps = {
  title: string;
  description: string;
};
const WhyUsItem: React.FC<WhyUsItemProps> = ({ title, description }) => {
  return (
    <div className="relative max-w-[250px] max-h-[300px] min-h-[250px] h-[300px] w-full px-4 py-2 space-y-4 text-white shadow-md shadow-purple-600  rounded-lg overflow-hidden">
      <div className="absolute size-12 bg-purple-600 rounded-full top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-lg shadow-purple-700"></div>
      <h5 className="font-extrabold text-xl">{title}</h5>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  );
};
export default WhyUsItem;
