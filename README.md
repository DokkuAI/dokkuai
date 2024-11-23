<p align="center">
  <a href="https://www.twenty.com">
    <img src="./packages/twenty-website/public/images/core/logo.svg" width="100px" alt="Twenty logo" />
  </a>
</p>

<h2 align="center" >DokkuAI </h3>
<p align="center">An open-source document knowledge-base workspace tool</p>

<p align="center"><a href="https://dokkuai.com">🌐 Website</a> · <a href="https://docs.dokkuai.com">📚 Documentation</a> ·  <a href="https://slack.com"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" width="12" height="12"/> Slack</a><p>



[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=github)](http://makeapullrequest.com)
![GitHub contributors](https://img.shields.io/github/contributors/dokkuai/dokkuai?logo=github)




## Why DokkuAI?

- **Versatile Document Knowledge-Base Tool**: Designed to enhance collaboration, organize knowledge, and streamline workflows for researchers, engineers, managers, and any other individuals.

- **Addressing Key Challenges**: DokkuAI addresses critical pain points such as information overload, disorganized references and documents, navigating and interacting with lengthy documents for deep understanding, time-consuming annotation and review process, and fragmented workflows by integrating advanced AI capabilities with intuitive organizational tools.

- **AI-Driven Capabilities**:  It offers features like conversational interaction with documents (links, pdfs, books, and other docs) with multiple LLMs models, comprehensive document management database, advanced annotation tools, seamless integrations, and concept map generations, all within an unified environment.

- **All-in-One Workspace**: A unified environment that boosts productivity, fosters innovation, and supports efficient collaboration.

## Quickstart

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Code of Conduct

Please ensure that you always follow our [Code of Conduct](https://dokkuai.gitbook.io/dokkuai-docs/about/code-of-conduct). We aim to maintain a respectful and inclusive community.

## Contributing

All code contributions, including those of people having commit access, must go through a pull request and be approved by a core developer before being merged. This is to ensure a proper review of all the code. 

We truly ❤️ pull requests! If you wish to help, you can learn more about how you can contribute to this project in the [contribution guide](https://dokkuai.gitbook.io/dokkuai-docs/about/contributing).



## License

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version. Please see the [LICENSE](./LICENSE.md) file in our repository for
the full text.

Like many open source projects, we require that contributors provide us with a
Contributor License Agreement (CLA). By submitting code to the Forem project,
you are granting us a right to use that code under the terms of the CLA.

Our version of the CLA was adapted from the Microsoft Contributor License
Agreement, which they generously made available to the public domain under
Creative Commons CC0 1.0 Universal.

Any questions, please email to support@dokkuai.com.

<br>

<p align="center">
  <img alt="Sloan, the sloth mascot" width="250px" src="https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/31047/af153cd6-9994-4a68-83f4-8ddf3e13f0bf.jpg">
  <br>
  <strong>Happy Coding</strong> ❤️
</p>
