import { DataService } from '@api/global/data.service';
import { insertOne, updateOne } from '@bltx/db';
import { eq } from 'drizzle-orm';
import { VideoDB } from './data/video.db';
import type { CreateVideo } from './data/create-video.req';
import type { PatchVideo } from './data/patch-video.req';

export class VideoService extends DataService {
  async create(data: CreateVideo) {
    return insertOne(this.db, VideoDB, data);
  }

  async patch(videoID: string, data: PatchVideo) {
    return updateOne(this.db, VideoDB, eq(VideoDB.id, videoID), data);
  }

  async delete(videoID: string) {
    await this.db.delete(VideoDB).where(eq(VideoDB.id, videoID));
  }
}
