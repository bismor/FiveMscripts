import { Native } from './components/native';

export const NATIVELISTLUA: Native[] = [
  {
    hash: 0x6228f159,
    apiset: 'server',
    name: 'AddBlipForArea',
    arguments: [
      {
        namearg: 'x',
        type: 'number',
        description: 'The X coordinate of the center of the blip.',
      },
      {
        namearg: 'y',
        type: 'number',
        description: 'The Y coordinate of the center of the blip.',
      },
      {
        namearg: 'z',
        type: 'number',
        description: 'The Z coordinate of the center of the blip.',
      },
      {
        namearg: 'width',
        type: 'number',
        description: 'The width of the blip.',
      },
      {
        namearg: 'height',
        type: 'number',
        description: 'The height of the blip.',
      },
    ],
    comment: 'A handle to the blip.',
  },
  {
    hash: 0xac6e290d,
    apiset: 'client',
    name: 'AddAudioSubmixOutput',
    arguments: [
      { namearg: 'submixId', type: 'integer', description: 'The input submix' },
      {
        namearg: 'outputSubmixId',
        type: 'integer',
        description: 'The output submix. Use 0 for the master game submix.',
      },
    ],
    comment: 'Adds an output for the specified audio submix.',
  },
  {
    hash: 0xc6f43d0e,
    apiset: 'server',
    name: 'AddBlipForCoord',
    arguments: [
      {
        namearg: 'x',
        type: 'number',
        description: 'The X coordinate to create the blip on.',
      },
      {
        namearg: 'y',
        type: 'number',
        description: 'The Y coordinate.',
      },
      {
        namearg: 'z',
        type: 'number',
        description: 'The Z coordinate.',
      },
    ],
    comment:
      'Creates a blip for the specified coordinates. You can use SET_BLIP_ natives to change the blip.',
  },
  {
    hash: 0x4afd2499,
    apiset: 'client',
    name: 'AddMinimapOverlay',
    arguments: [
      {
        namearg: 'name',
        type: 'string',
        description:
          'The path to a .gfx file in the current resource. It has to be specified as a file.',
      },
    ],
    comment: 'Loads a minimap overlay from a GFx file in the current resource.',
  },
];
