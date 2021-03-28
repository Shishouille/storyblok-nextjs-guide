import { Richtext } from "storyblok-js-client";

import Storyblok from "../../lib/storyblok";

function createMarkup(storyblokHTML) {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  };
}

interface IProps {
  data: Richtext;
  className?: string;
}

const RichTextField = ({ data, ...props }: IProps) => {
  return <div dangerouslySetInnerHTML={createMarkup(data)} {...props} />;
};

export default RichTextField;
