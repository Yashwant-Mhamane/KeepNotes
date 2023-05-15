import { TestBed } from '@angular/core/testing';

import { KeepNoteService } from './keepnote.service';

describe('KeepnoteService', () => {
  let service: KeepNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeepNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
