import NextHead from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StoryblokComponent } from "storyblok-js-client";

export interface TSEO extends StoryblokComponent<"seo"> {
  title: string;
  description?: string;
  og_description?: string;
  og_image?: string;
  og_title?: string;
  plugin: "seo_metatags";
  twitter_description?: string;
  twitter_image?: string;
  twitter_title?: string;
}
interface IProps {
  seo: TSEO;
}

const Head = ({ seo }: IProps) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(location.pathname);
  }, []);

  const { pathname } = useRouter();
  const currentUrl = `${url}/${pathname}`;
  const title = seo.title;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={currentUrl} />
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.og_title && <meta property="og:title" content={seo.og_title} />}
      {seo.og_description && (
        <meta property="og:description" content={seo.og_description} />
      )}
      {seo.og_image && <meta property="og:image" content={seo.og_image} />}
      {seo.twitter_description && (
        <meta name="twitter:title" content={seo.twitter_title} />
      )}
      {seo.twitter_description && (
        <meta name="twitter:description" content={seo.twitter_description} />
      )}
      {seo.twitter_image && (
        <meta name="twitter:image" content={seo.twitter_image} />
      )}
      <meta name="apple-mobile-web-app-title" content={title} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600&family=Work+Sans:wght@800&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
