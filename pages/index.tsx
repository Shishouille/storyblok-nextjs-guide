import StoryPage from '../components/Stories/StoryPage';
import getStaticPageProps from '../lib/getStaticPageProps';

const Home = ({ story, preview }) => <StoryPage preview={preview} story={story} />;
export const getStaticProps = getStaticPageProps;

export default Home;
