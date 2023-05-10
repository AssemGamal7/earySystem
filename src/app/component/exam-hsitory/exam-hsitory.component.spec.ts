import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHsitoryComponent } from './exam-hsitory.component';

describe('ExamHsitoryComponent', () => {
  let component: ExamHsitoryComponent;
  let fixture: ComponentFixture<ExamHsitoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamHsitoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamHsitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
