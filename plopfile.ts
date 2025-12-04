import fs from 'node:fs/promises';
import { usePlugins } from '@bltx/plop';
import type { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  usePlugins(plop);
}
