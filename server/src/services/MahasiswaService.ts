import dataMahasiswa from '../../mockData.json';

import type { IMahasiswa } from '../interfaces/imahasiswa';

export const findAll = async (): Promise<IMahasiswa[]> => dataMahasiswa;
