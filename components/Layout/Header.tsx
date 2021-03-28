import Link from "next/link";
import { useRouter } from "next/router";
import { StoryblokComponent } from "storyblok-js-client";

import InfraLink from "../Atoms/InfraLink";
import Head, { TSEO } from "./Head";

interface THeader extends StoryblokComponent<"header"> {
  home: BUrl;
  product: BUrl;
  homeName: string;
  productName: string;
  seo: TSEO;
}
interface IProps {
  blok: THeader;
}

const Header = ({ blok }: IProps) => {
  const { pathname, query, locale } = useRouter();
  const { home, product, homeName, productName, seo } = blok;

  return (
    <>
      <Head seo={seo} />
      <nav className="flex items-center justify-between mx-4">
        <InfraLink href="/" className="font-serif text-xl">
          TomToes
        </InfraLink>
        <menu className="text-gray-700 px-3 hover:text-gray-800">
          <InfraLink href="/" className="mx-2">
            {homeName}
          </InfraLink>
          <InfraLink href={product.cached_url} className="mx-2">
            {productName}
          </InfraLink>
          <Link
            href={{ pathname, query }}
            locale={locale === "en" ? "fr" : "en"}
          >
            <a
              title={locale === "en" ? "Français" : "English"}
              className="text-xl px-2 py-1 ml-3 border-2 border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-700"
            >
              {locale === "en" ? "FR" : "EN"}
            </a>
          </Link>
        </menu>
      </nav>
    </>
  );
};

export default Header;
