import {tool} from "@opencode-ai/plugin"
import {getAllComponents, getComponentByTagName} from '@wc-toolkit/cem-utilities';

const CDN_URL = 'https://cdn.jsdelivr.net/npm/@pod-os/elements/dist/custom-elements.json';
let cachedManifest = null;

async function getManifest() {
  if (cachedManifest) {
    return cachedManifest;
  }

  try {
    const response = await fetch(CDN_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.status} ${response.statusText}`);
    }
    cachedManifest = await response.json();
    return cachedManifest;
  } catch (error) {
    throw new Error(`Unable to load PodOS manifest from CDN: ${error.message}`);
  }
}

export const listAllElements = tool({
  description: "List all PodOS elements",

  async execute(args) {
    const manifest = await getManifest();
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
    const manifest = await getManifest();
    const component = getComponentByTagName(manifest, args.tagName);
    return JSON.stringify(component, null, 2);
  },
})