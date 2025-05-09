import { TestBed } from '@angular/core/testing';
import { ReviewService } from './reviewservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ReviewService', () => {
  let service: ReviewService;
  let httpMock: HttpTestingController;
  const baseUrl = 'https://localhost:7117/api/Review';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewService]
    });
    service = TestBed.inject(ReviewService);
    httpMock = TestBed.inject(HttpTestingController);
  });
});