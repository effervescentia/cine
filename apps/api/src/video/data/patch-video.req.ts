import { type Static, t } from 'elysia';
import { VideoDTO } from './video.dto';

export type PatchVideo = Static<typeof PatchVideoRequest>;

export const PatchVideoRequest = t.Partial(t.Pick(VideoDTO, [
  // TODO: implement me
]));
