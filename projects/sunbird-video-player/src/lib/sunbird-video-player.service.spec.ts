import { TestBed } from '@angular/core/testing';

import { SunbirdVideoPlayerService } from './sunbird-video-player.service';

describe('SunbirdVideoPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunbirdVideoPlayerService = TestBed.inject(SunbirdVideoPlayerService);
    expect(service).toBeTruthy();
  });
});
