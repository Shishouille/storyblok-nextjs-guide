import { debounce, merge } from "lodash";
import { useEffect, useState } from "react";
import { StoryData, StoryblokComponent } from "storyblok-js-client";

function addBridge(callback: any) {
  const existingScript = document.getElementById("storyblokBridge");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://app.storyblok.com/f/storyblok-latest.js`;
    script.id = "storyblokBridge";
    document.body.appendChild(script);
    script.onload = () => {
      // once the script is loaded, init the event listeners
      callback();
    };
  } else {
    callback();
  }
}

function initEventListeners(story: StoryData, setStory: any) {
  if (window.storyblok) {
    window.storyblok.init({
      accessToken: process.env.API_TOKEN,
    });

    window.storyblok.on(["change", "published"], () => location.reload());

    const inputFunction = (event: any, s: any) => {
      const content = s.content ? s.content : s;

      if (event && event.story.content._uid === content._uid) {
        event.story.content = window.storyblok.addComments(
          event.story.content,
          event.story.id
        );

        if (event.story.content.body) {
          const mergedBody: any[] = event.story.content.body
            ?.map((item: StoryblokComponent<string>) => {
              let oldItem = content.body.find(
                (itemWithData: StoryblokComponent<string>) =>
                  itemWithData._uid === item._uid
              );
              return merge(oldItem, item);
            })
            .filter(Boolean);

          event.story.content.body = mergedBody;
        }
        setStory(event.story);
      }
    };

    // we will debounce the function since we're doing some data processing inside
    window.storyblok.on(
      "input",
      debounce((e) => inputFunction(e, story), 300)
    );
  }
}

export function useStoryblok(originalStory: StoryData) {
  const [story, setStory] = useState(originalStory);

  useEffect(() => {
    // first load the bridge, then initialize the event listeners
    addBridge(() => initEventListeners(story, setStory));
  }, []);

  return story;
}
