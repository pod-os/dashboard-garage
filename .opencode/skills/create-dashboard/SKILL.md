---
name: pod-os-dashboard
description: Create or maintain a PodOS dashboard, i.e. an HTML page facilitating PodOS elements to use and visualize RDF data from Solid Pods .
license: MIT
compatibility: opencode
---

A PodOS dashboard is a regular HTML page. Therefore, all existing rules regarding HTML and CSS apply.

Additionally, a dashboard page includes PodOS elements, a set of HTML custom elements (web components) that can fetch,
visualize and interact with RDF data in Solid Pods.

## Quick start

Check out https://raw.githubusercontent.com/pod-os/PodOS/refs/heads/main/homepage/docs/getting-started/quick-start.md to
learn the basics.

## Element reference

Never assume / invent elements or their attributes. Consult the existing documentation or ask the user if unsure.

Documentation for each element can be found on an URL following this pattern:

`https://raw.githubusercontent.com/pod-os/PodOS/refs/heads/main/docs/elements/components/<component name>/readme.md`

Here is the list of the most important elements. Fetch their documentation as soon as you need to use them:

| Component name  | When to use                                                                                                            |
|-----------------|------------------------------------------------------------------------------------------------------------------------|
| pos-app         | Always, this is the root node for everything                                                                           |
| pos-resource    | Fetching resources and setting a context                                                                               |
| pos-label       | show name / label of a thing                                                                                           |
| pos-value       | Display a value of a certain property / predicate                                                                      |
| pos-description | describe a thing                                                                                                       |
| pos-picture     | Visualize a thing by showing it's picture                                                                              |
| pos-list        | List serveral things (kind of a loop). Tip: Can also be used to follow a relation even if only one element is present! |
| pos-switch      | Conditional rendering                                                                                                  |
| pos-case        | Conditional rendering (together with pos-switch)                                                                       |
| pos-rich-link   | Link a resource                                                                                                        |

The readmes mention related other resources. Explore them as needed if they sound like they might help the use case.

Important: Make sure to fetch the raw Markdown from `raw.githubusercontent.com`, you do not need the HTML version.

## Workflow

1. Ask the user what they want to build
   - interview them using the questions tool
   - go through their needs step by step, be explicit about what to build
   - don't make assumptions
   - don't build more than asked for, but propose if you think more could be usefull
2. Clarify how the relevant data is stored in a Pod
   - What conventions exist to rely on?
   - Can the user provide example data or data shapes?
   - Make sure that you have the correct assumptions about the data before proceeding
3. Choose appropriate elements and check out their docs
4. Build the HTML
5. Get feedback from user and finish the work in an interactive iterative way

## Styling

PodOS styles are based on CSS variables. Find available options in https://raw.githubusercontent.com/pod-os/PodOS/refs/heads/main/elements/src/global.css

The styles are built on top of Pollen CSS. Find the list of their variables here: https://unpkg.com/pollen-css/dist/pollen.css.

Use both the PodOS and Pollen variables instead of hardcoded values as long as this does not contradict the user's preferences given to you.

### Dark / Light mode

PodOS has an automatic dark mode. Keep this in mind when styling pages that default to a light or dark theme. You may need to explicitly override PodOS CSS vars to enforce either light or dark colours. Preferably style the dashboard both for light and dark themes, unless the user explicitly instructs you too use only one of them.

## Potential issues

PodOS elements are still in an early stage. You may run into issues fulfilling all user requests with the given elements.

If you find something important is missing:

 1. inform the user
 2. ask them whether to document the issue
 3. if confirmed, write an issue-<topic>.md file to describe what would be needed (Important: make it transparent that it is an LLM generated issue)
 4. ask the user to review it carefully and submit it to https://github.com/pod-os/PodOS/issues manually if they want 