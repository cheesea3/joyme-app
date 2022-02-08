import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {CounterService} from '../services/counter/counter.service';
import { PopupComponent } from '../components/popup/popup.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  // providers: [CounterService],
  declarations: [TabsPage, PopupComponent]
})
export class TabsPageModule {}
