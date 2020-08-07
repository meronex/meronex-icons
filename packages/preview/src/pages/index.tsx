import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import ReactMarkdown from "react-markdown";

import LgGithubOctocat from "@meronex/icons/lg/LgGithubOctocat";
import LgNpm from "@meronex/icons/lg/LgNpm";
import { BRAND_TITLE, HOME_USAGE_DEFAULT, HOME_USAGE_NAMED } from "@utils/constants";

import React from "react";

const ROADMAP = require("../../../../Roadmap.md").default;
const CHANGELOG = require("@meronex/icons/CHANGELOG.md").default;

export default function HomePage() {
  const styleIcon = {
    top: "10px",
    fontSize: "35px",
    position: "relative",
  };
  return (
    <Container title={BRAND_TITLE}>
      <div style={{
        lineHeight: '28px'
      }}>
        <Badges />
        <p>
          Choose from thousands of popular open source SVG icon packs and add
          them easily to your React projects with meronex icons.
        </p>
        <h1>Installation</h1>
        <CodeBlock code={`npm install @meronex/icons --save`} />
        <h1>Usage</h1>

        <h3>Default Import</h3>
        <CodeBlock code={HOME_USAGE_DEFAULT} />
        <h3>Named Import </h3>
        Use named imports only when you build supports tree shaking your generated your bundle size.
        <CodeBlock code={HOME_USAGE_NAMED} />
        <ReactMarkdown source={ROADMAP} />
        <ReactMarkdown source={CHANGELOG} />
        <h2>More info</h2>
        <p>
          <a
            href="https://github.com/aliogaili/meronex-icons"
            target={"_blank"}
          >
            <LgGithubOctocat style={styleIcon} /> &nbsp; Github Repo &#8599;
          </a>
        </p>
        <p>
          <a
            href="https://www.npmjs.com/package/@meronex/icons"
            target={"_blank"}
          >
            <LgNpm style={styleIcon} /> &nbsp; NPM Package &#8599;
          </a>
        </p>
      </div>
    </Container>
  );
}
