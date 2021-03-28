import { useStoryblok } from "../../hooks/useStoryBlok";
import DynamicComponent from "../DynamicComponent";
import Layout from "../Layout";

const StoryPage = ({ story, preview }) => {
  let storyBlok = story;
  if (preview) {
    storyBlok = useStoryblok(story);
  }

  const layout = storyBlok.content.layout.length && storyBlok.content.layout[0];

  return (
    <Layout layout={layout}>
      <main>
        {storyBlok
          ? storyBlok.content.body.map((blok, index) => {
              return (
                <DynamicComponent blok={blok} key={blok._uid} index={index} />
              );
            })
          : null}
      </main>
    </Layout>
  );
};

export default StoryPage;
