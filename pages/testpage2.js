import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Test from "../components/test";
import matter from "gray-matter";

const components = { Test };

export default function TestPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, components);
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  );
}

export async function getStaticProps() {
  // mdx text - can be from a local file, database, anywhere
  const source = `
---
title: Test
---

Some **mdx** text, with a component <Test name={title}/>
`;
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, components, data);
  return { props: { mdxSource, frontMatter: data } };
}
