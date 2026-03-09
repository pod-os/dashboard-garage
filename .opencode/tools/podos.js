import {tool} from "@opencode-ai/plugin"
import {getAllComponents, getComponentByTagName} from '@wc-toolkit/cem-utilities';
import manifest from '../../custom-elements.json' with {type: 'json'};

export const listAllElements = tool({
  description: "List all PodOS elements",

  async execute(args) {
    const components = getAllComponents(manifest);
    const list = components.map(it => `${it.tagName}: ${it.description}`);
    return list.join('\n');
  },
})

export const getElementDocs = tool({
  description: "Get documentation for a specific PodOS element",

  args: {
    tagName: tool.schema.string().describe("The tag name of the element to get documentation for"),
  },

  async execute(args) {
    const component = getComponentByTagName(manifest, args.tagName);
    return JSON.stringify(component, null, 2);
  },
})