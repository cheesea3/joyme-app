import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RandomAvatarComponent } from './random-avatar/random-avatar.component';
import { ProfileImageSlidesComponent } from './profile-image-slides/profile-image-slides.component';
import { PlusIntroComponent } from './plus-intro/plus-intro.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LazyLoadImageModule
  ],
  declarations: [
    RandomAvatarComponent,
    ProfileImageSlidesComponent,
    PlusIntroComponent,
    PersonCardComponent
  ],
  providers: [],
  exports: [
    RandomAvatarComponent,
    ProfileImageSlidesComponent,
    PlusIntroComponent,
    PersonCardComponent
  ]
})

export class SharedModule {}
