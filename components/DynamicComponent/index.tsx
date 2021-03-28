import SbEditable from "storyblok-react";

import Card from "../Bloks/Card";
import CTA from "../Bloks/CTA";
import Feature from "../Bloks/Feature";
import Hero from "../Bloks/Hero";
import Layout from "../Layout";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Placeholder from "./Placeholder";

/*
 * Our bloks dictionnary.
 * It must reflects our Storyblok nestables components.
 * Keys are the same than their name in Storyblok.
 */
const Components = {
  card: Card,
  cta: CTA,
  feature: Feature,
  hero: Hero,
  header: Header,
  footer: Footer,
  layout: Layout,
};

const DynamicComponent = ({ blok, ...props }) => {
  // Check if the blok can be rendered
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // Add Storyblok layout
    return (
      <SbEditable content={blok}>
        <Component blok={blok} {...props} />
      </SbEditable>
    );
  }

  // If not, render an error message.
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
