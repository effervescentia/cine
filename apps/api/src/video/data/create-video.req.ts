import { type Static, t } from 'elysia';
import { VideoDTO } from './video.dto';

export type CreateVideo = Static<typeof CreateVideoRequest>;

export const CreateVideoRequest = t.Pick(VideoDTO, [
  // TODO: implement me
]);
