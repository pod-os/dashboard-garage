# PodOS Dashboard Garage

This repository contains an [OpenCode](https://opencode.ai) skill for crafting **PodOS dashboards** with AI-assisted
coding.

## What is a PodOS Dashboard?

A PodOS dashboard is an HTML page that uses [PodOS elements](https://pod-os.org) — a set of web components — to fetch,
visualize, and interact with RDF data stored in [Solid Pods](https://solidproject.org).

## What is OpenCode?

[OpenCode](https://opencode.ai) is an AI-powered coding agent that runs in your terminal. It supports **skills**:
domain-specific instruction sets that guide the AI when working on particular types of tasks.

## Using this Skill

When you open this repository in OpenCode and ask it to build a PodOS dashboard, it will automatically load the skill
from `.opencode/skills/create-dashboard/SKILL.md` and guide you through the process.

### Getting Started

1. Install [OpenCode](https://opencode.ai)
2. Clone this repository
3. Install dependencies:
   ```sh
   npm install
   ```
4. Open it in OpenCode:
   ```sh
   opencode
   ```
5. Ask OpenCode to create a PodOS dashboard — the skill will guide the process

## Skill Location

The skill definitions live at:

```
.opencode/skills
```

## Local Pod with test data

Run `npm start` to spin up a local Solid Pod with test data that you can use while building and experimenting
with your dashboards.

## Examples dashboards

Some dashboard examples can be found in [examples](examples). Feel free to use them as inspiration or the basis for your
own work. Mix and mash!