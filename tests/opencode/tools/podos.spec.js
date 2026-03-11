import {listAllElements, getElementDocs} from '../../../.opencode/tools/podos.js';

describe('PodOS tool', () => {
  describe('list all elements', () => {
    it('contains tag name and description ', async () => {
      const result = await listAllElements.execute({}, null)
      expect(result).toContain("pos-label: Displays a human-readable label")

    });
    it('contains all the elements', async () => {
      const result = await listAllElements.execute({}, null)
      expect(result.split('\n').length).toBeGreaterThan(50)
    })
  });

  describe('get element doc', () => {
    it('returns details infos about the element, including attributes and events', async () => {
      const result = await getElementDocs.execute({tagName: 'pos-list'}, null)
      const data = JSON.parse(result)
      expect(data.customElement).toBe(true)
      expect(data.tagName).toBe('pos-list')
      expect(data.description).toContain('Renders a template for each resource')
      expect(data.kind).toBe('class')
      expect(data.name).toBe('PosList')
      expect(data.attributes).toHaveLength(3)
      expect(data.attributes).toContainEqual({
        default: "false",
        description: "Whether listed resources should be fetched before being displayed",
        name: 'fetch',
        fieldName: 'fetch',
        type: {text: 'boolean'}
      })
      expect(data.events).toHaveLength(2)
      expect(data.events).toContainEqual({
        name: 'pod-os:resource',
        type: {
          text: "CustomEvent<any>"
        }
      })
    });
  });
});