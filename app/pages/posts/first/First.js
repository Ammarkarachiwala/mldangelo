import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import part1 from './part1.md';
import part2 from './part2.md';
import Conway from './Conway';

const Post = () => (
  <article className="post" id="post">
    <Helmet title="Welcome | Blog" />
    <header>
      <div className="title">
        <h2><Link to="/blog/first">Welcome</Link></h2>
        <p>Hello and welcome to my very first blog post.</p>
      </div>
    </header>
    <ReactMarkdown
      source={part1}
    />
    <Conway />
    <ReactMarkdown
      source={part2}
    />
  </article>
);

export default Post;
