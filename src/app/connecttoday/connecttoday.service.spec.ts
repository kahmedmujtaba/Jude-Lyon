import { TestBed } from '@angular/core/testing';

import { ConnecttodayService } from './connecttoday.service';

describe('ConnecttodayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnecttodayService = TestBed.get(ConnecttodayService);
    expect(service).toBeTruthy();
  });
});
