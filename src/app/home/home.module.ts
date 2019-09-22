import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WaysToWorkTogetherComponent } from '@app/ways-to-work-together/ways-to-work-together.component';
import { WhoisjudeComponent } from '@app/whoisjude/whoisjude.component';
import { ConnecttodayComponent } from '@app/connecttoday/connecttoday.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, WaysToWorkTogetherComponent, WhoisjudeComponent, ConnecttodayComponent]
})
export class HomeModule {}
