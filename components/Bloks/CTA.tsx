import { StoryblokComponent } from "storyblok-js-client";

import InfraLink from "../Atoms/InfraLink";

export interface TCTA extends StoryblokComponent<"cta"> {
  name: string;
  link: BUrl;
}

interface IProps {
  blok: TCTA;
}

const CTA = ({ blok }: IProps) => {
  const { name, link } = blok;
  return (
    <InfraLink
      href={link.url}
      className="text-white bg-blue-600 font-bold p-2 px-3 rounded-md  mx-2 my-3 transition-colors hover:text-blue-600 hover:bg-white"
    >
      {name}
    </InfraLink>
  );
};

export default CTA;
