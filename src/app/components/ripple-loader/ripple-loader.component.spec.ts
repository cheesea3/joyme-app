import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RippleLoaderComponent } from './ripple-loader.component';

describe('RippleLoaderComponent', () => {
  let component: RippleLoaderComponent;
  let fixture: ComponentFixture<RippleLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
