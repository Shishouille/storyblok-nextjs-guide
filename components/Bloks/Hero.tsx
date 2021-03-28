import { StoryblokComponent } from "storyblok-js-client";

interface TFeature extends StoryblokComponent<"feature"> {
  title: string;
  icon: string;
  description: string;
  subtitle: string;
  picture: { filename: string };
}
interface IProps {
  blok: TFeature;
}

const Hero = ({ blok }: IProps) => {
  const { title, description, picture, subtitle } = blok;
  return (
    <header className="md:flex md:items-center md:py-4 md:mb-10 py-3 mb-5">
      <div className="flex-1 md:p-6 p-3 text-gray-800 md:text-left text-center">
        <h1 className="font-black md:text-6xl text-4xl mt-30 ">{title}</h1>
        <h2 className="mt-8 font-bold text-2xl ">{subtitle}</h2>
        <p className="mt-3 md:w-3/5 text-xl">{description}</p>
      </div>
      <img
        className="md:w-1/3 md:h-1/3 w-1/3 h-1/2 m-auto "
        src={picture.filename}
        alt=""
      />
    </header>
  );
};

export default Hero;
