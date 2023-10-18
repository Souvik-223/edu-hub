# EduHub Contribution Guidelines

Welcome to EduHub! We appreciate your interest in contributing to our project. Before you get started, please take a moment to read through these guidelines to ensure a smooth and productive contribution process.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

### Prerequisites
Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation
1. Fork this repository.
2. Clone your forked repository locally:

```bash
   git clone https://github.com/your-username/edu-hub.git
   cd edu-hub
   npm install
```
3. Set Up .env file make sure its .env nothing else like .env.local
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_CLERK_WEBHOOK_SECRET=
DATABASE_URL=
MONGODB_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```
4. Start the project
  ```
    npm run dev
  ```

### How to Contribute
#### Pull Requests
1.Create a new branch for your contribution:
   ```
    git checkout -b feature/your-feature-name
   ```
2.Make your changes and commit them:

```bash
git commit -m "Add your commit message here"
```
3.Push your changes to your forked repository:

```bash
git push origin feature/your-feature-name
```
4.Create a Pull Request (PR) to the main branch of this repository. Ensure your PR includes a clear title and description of the changes.

5.Your PR will be reviewed by project maintainers. Make sure to respond to any feedback and keep your PR up to date


### Coding Standards
Follow the project's coding style and conventions.
Write meaningful commit messages and code comments where necessary.
Keep your codebase clean and well-organized.
### Testing
Ensure that your changes do not break existing tests.
Write tests for new features or bug fixes if applicable.

### License
By contributing to EduHub, you agree that your contributions will be licensed under the MIT License.