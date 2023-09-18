import * as z from 'zod';

const Player = z.object({
  id: z.string(),
  blank_id: z.string(),
  rank: z.string(),
  ordinal: z.number(),
  position: z.string(),
  name: z.string(),
  bye: z.number(),
  notes: z.string(),
});

type Player = z.infer<typeof Player>;

export default Player;
