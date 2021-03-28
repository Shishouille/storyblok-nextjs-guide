import { Link } from "heroicons-react";
import { Richtext, StoryblokComponent } from "storyblok-js-client";

import InfraLink from "../Atoms/InfraLink";
import RichTextField from "../Atoms/RichTextField";

interface TFooter extends StoryblokComponent<"footer"> {
  title: string;
  content: Richtext;
  github: BUrl;
}
interface IProps {
  blok: TFooter;
}

const Footer = ({ blok }: IProps) => {
  const { title, github, content } = blok;
  return (
    <footer className="flex items-start p-3 bg-gray-100 text-gray-800  justify-end flex-col mt-10">
      <InfraLink
        href={github.url}
        className="ml-2 rounded-full bg-white p-3 mb-3 hover:opacity-80"
      >
        <Link />
      </InfraLink>
      <h6 className="text-xl font-bold">{title}</h6>
      <RichTextField data={content} />
    </footer>
  );
};

export default Footer;
