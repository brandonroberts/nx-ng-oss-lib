import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgPluginBuilderSchema } from './schema';

export function runBuilder(
  options: NgPluginBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return of({ success: true }).pipe(
    tap(() => {
      context.logger.info('Builder ran for ng-plugin');
    })
  );
}

export default createBuilder(runBuilder);
