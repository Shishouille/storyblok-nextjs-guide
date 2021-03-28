import StoryPage from '../components/Stories/StoryPage';
import getStaticPageProps from '../lib/getStaticPageProps';
import Storyblok from '../lib/storyblok';

const Page = ({ story, preview }) => <StoryPage preview={preview} story={story} />;

export const getStaticPaths = async () => {
  const { data } = await Storyblok.get('cdn/links/', {});

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (!data.links[linkKey].is_folder) {
      if (data.links[linkKey].slug !== 'home') {
        paths.push({ params: { slug: data.links[linkKey].slug }, locale: 'fr' });
        paths.push({ params: { slug: data.links[linkKey].slug }, locale: 'en' });
      }
    }
  });

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = getStaticPageProps;

export default Page;
