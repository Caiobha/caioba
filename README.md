# Caioba First Project

Automation-first starter project focused on GitHub Copilot agents and repository automations.

## Project

- Runtime: Node.js 22
- Entry point: `/home/runner/work/caioba/caioba/src/index.js`
- Tests: Node built-in test runner

## Scripts

- `npm run lint`
- `npm test`
- `npm run build`
- `npm start -- <name>`

## Agent and Automation Setup

- Copilot setup workflow: `/home/runner/work/caioba/caioba/.github/workflows/copilot-setup-steps.yml`
- CI workflow: `/home/runner/work/caioba/caioba/.github/workflows/ci.yml`
- Security workflow (CodeQL): `/home/runner/work/caioba/caioba/.github/workflows/codeql.yml`
- Dependency automation: `/home/runner/work/caioba/caioba/.github/dependabot.yml`

## Quick Start

```bash
npm ci
npm test
npm start -- Caiobha
```
