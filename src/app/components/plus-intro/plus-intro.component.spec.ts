import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlusIntroComponent } from './plus-intro.component';

describe('PlusIntroComponent', () => {
  let component: PlusIntroComponent;
  let fixture: ComponentFixture<PlusIntroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
