import { type Static, t } from 'elysia';

export type Video = Static<typeof VideoDTO>;

export const VideoDTO = t.Object({
  id: t.String({ format: 'uuid' }),
});
