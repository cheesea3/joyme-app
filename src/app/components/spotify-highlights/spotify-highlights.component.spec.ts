import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotifyHighlightsComponent } from './spotify-highlights.component';

describe('SpotifyHighlightsComponent', () => {
  let component: SpotifyHighlightsComponent;
  let fixture: ComponentFixture<SpotifyHighlightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyHighlightsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotifyHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
