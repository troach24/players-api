import { Router, Response, Request } from 'express';
import Player from './players.model';

const router = Router();

router.get<{}, Player[]>('/', (req: Request, res: Response<Player[]>) => {
  res.json([{
    id: 'row-7',
    blank_id: '',
    rank: '',
    ordinal: 7,
    position: 'QB',
    name:	'Trevor Lawrence (JAX)',
    bye: 9,
    notes: 'Overall QB1 upside in ascending offense',
  }]);
});

export default router;
