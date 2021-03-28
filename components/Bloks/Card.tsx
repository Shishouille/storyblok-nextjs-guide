import { Richtext, StoryblokComponent } from "storyblok-js-client";

import RichTextField from "../Atoms/RichTextField";
import DynamicComponent from "../DynamicComponent";
import { TCTA } from "./CTA";

interface TCard extends StoryblokComponent<"card"> {
  title: string;
  cta: TCTA[];
  description: Richtext;
}
interface IProps {
  blok: TCard;
}

const Card = ({ blok }: IProps) => {
  const { description, cta, title } = blok;
  return (
    <section className="m-10 p-6 border-1 border-gray-200 rounded-md text-center shadow-md bg-gray-50 ">
      <h4 className="text-xl  font-semibold ">{title}</h4>
      <RichTextField data={description} className="mb-5 mt-3" />
      {cta.map((b) => (
        <DynamicComponent blok={b} />
      ))}
    </section>
  );
};

export default Card;
