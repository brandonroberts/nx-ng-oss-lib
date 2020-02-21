import { async, TestBed } from '@angular/core/testing';
import { NgLibModule } from './ng-lib.module';

describe('NgLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgLibModule).toBeDefined();
  });
});
