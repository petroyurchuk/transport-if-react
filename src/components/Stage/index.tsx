type StageProps = {
  title: string;
  description: string;
};
const Stage: React.FC<StageProps> = ({ title, description }) => {
  return (
    <div className="max-w-[250px] max-h-[300px] min-h-[200px] h-[250px] w-full px-4 py-2 space-y-4 text-white shadow-md shadow-purple-600 rounded-lg">
      <h5 className="font-extrabold text-[60px]">{title}</h5>
      <p className="text-lg font-semibold">{description}</p>
    </div>
  );
};
export default Stage;
