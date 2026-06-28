import { id } from '@bltx/db';
import { relations } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

export const VideoDB = pgTable('video', {
  id: id('id'),
});

export const VideoRelations = relations(VideoDB, ({}) => ({
  // TODO: implement me
}));
