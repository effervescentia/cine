import { DatabasePlugin } from '@api/db/db.plugin';
import Elysia, { t } from 'elysia';
import { VideoService } from './video.service';
import { eq } from 'drizzle-orm';
import { VideoDB } from './data/video.db';
import { VideoDTO } from './data/video.dto';
import { CreateVideoRequest } from './data/create-video.req';
import { PatchVideoRequest } from './data/patch-video.req';

const VideoParams = t.Object({ videoID: t.String({ format: 'uuid' }) });

export const VideoController = new Elysia({ prefix: '/video' })
  .use(DatabasePlugin)
  .derive({ as: 'scoped' }, ({ db }) => ({ service: new VideoService(db()) }))
  
  .get(
    '/',
    async ({ db }) => {
      return db().query.VideoDB.findMany();
    },
    {
      response: t.Array(VideoDTO),
    },
  )

  .post(
    '/',
    async ({ service, body }) => {
      return service.create(body);
    },
    {
      body: CreateVideoRequest,
      response: VideoDTO,
    },
  )

  .get(
    '/:videoID',
    async ({ db, params, status }) => {
      const video = await db().query.VideoDB.findFirst({ where: eq(VideoDB.id, params.videoID) });
      if (!video) return status(404, `No Video exists with ID '${params.videoID}'`);

      return video;
    },
    {
      params: VideoParams,
      response: {
        200: VideoDTO,
        404: t.String(),
      },
    },
  )

  .patch(
    '/:videoID',
    async ({ service, params, body }) => {
      return service.patch(params.videoID, body);
    },
    {
      params: VideoParams,
      body: PatchVideoRequest,
      response: VideoDTO,
    },
  )

  .delete(
    '/:videoID',
    async ({ service, params }) => {
      await service.delete(params.videoID);
    },
    {
      params: VideoParams,
    },
  )
  ;
