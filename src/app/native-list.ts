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
];
