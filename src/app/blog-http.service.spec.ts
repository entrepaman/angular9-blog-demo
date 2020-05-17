import { TestBed } from '@angular/core/testing';

import { BlogHttpService } from './blog-http.service';

describe('BlogHttpService', () => {
  let service: BlogHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
