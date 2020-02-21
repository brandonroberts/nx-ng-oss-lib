import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NgPluginSchematicSchema } from './schema';

describe('ng-plugin schematic', () => {
  let appTree: Tree;
  const options: NgPluginSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@ossorg/ng-plugin',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('ngPlugin', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
