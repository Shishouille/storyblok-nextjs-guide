import { StoryblokComponent } from "storyblok-js-client";

import Icon from "../Atoms/Icon";

interface TFeature extends StoryblokComponent<"feature"> {
  title: string;
  icon: string;
  description: string;
}
interface IProps {
  blok: TFeature;
}

const Feature = ({ blok }: IProps) => {
  const { description, icon, title } = blok;
  return (
    <section className="flex justify-center items-center flex-col m-5 p-2">
      <Icon
        glyph={icon}
        className="rounded-full text-blue-600 mb-2"
        size={36}
      />
      <h3 className="font-bold pt-2 pb-1 mb-3 px-2 border-b-2 border-blue-600 font-serif text-gray-800">
        {title}
      </h3>
      <p className="mt-2">{description}</p>
    </section>
  );
};

export default Feature;
