import React, { useRef, useState } from "react";
import { P, H1 } from "../components/mdx";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Test from "../components/test";

const components = { Test };

// const components = {
//   h1: H1,
//   p: P,
// };

export async function getStaticProps() {
  // mdx text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await renderToString(source, components);
  return { props: { mdxSource } };
}

const MyTest = ({ mdxSource }) => {
  const content = hydrate(mdxSource, components);
  return (
    <div>
      <h1>Blog</h1>
      {content}
    </div>
  );
};

export default MyTest;
