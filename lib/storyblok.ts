import StoryblokClient from "storyblok-js-client";

// Access Token is available on your space settings.
const Storyblok = new StoryblokClient({
  accessToken: process.env.API_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
