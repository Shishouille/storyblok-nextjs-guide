import { GetStaticProps } from "next";

import Storyblok from "./storyblok";

const getStaticPageProps: GetStaticProps = async (context) => {
  // Will be useful for dynamic pages.
  const apiSlug = context.params?.slug ?? "home";
  const locale = context.locale;
  const params = {
    version: "published",
    cv: null,
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  // when locale is default, there is no subdomains in path.
  const insertLanguage = locale === context.defaultLocale ? "" : `/${locale}`;

  const { data } = await Storyblok.get(
    `cdn/stories${insertLanguage}/${apiSlug}`,
    params
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview ?? false,
    },
  };
};

export default getStaticPageProps;
