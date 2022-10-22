import express, { Request, Response } from 'express';
import * as MahasiswaService from '../services/MahasiswaService';

import type { IMahasiswa } from '../interfaces/imahasiswa';

export const mahasiswaRouter = express.Router();

mahasiswaRouter.get('/', async (req: Request, res: Response) => {
  try {
    const mahasiswa: IMahasiswa[] = await MahasiswaService.findAll();

    res.status(200).send(mahasiswa);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
