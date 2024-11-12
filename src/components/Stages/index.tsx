import { Title, Stage } from "../";
import { stages } from "../../data/stage";

type StagesProps = {};

const Stages: React.FC<StagesProps> = () => {
  return (
    <div className="max-w-[90%] w-full m-auto mb-10 ">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        Етапи роботи
      </Title>
      <div className="flex justify-center md:justify-normal gap-[25px] flex-wrap">
        {stages.map(({ id, title, body }) => (
          <Stage key={id} title={title} description={body} />
        ))}
      </div>
    </div>
  );
};
export default Stages;
