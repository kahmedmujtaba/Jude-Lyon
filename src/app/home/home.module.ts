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
import { ClientsComponent } from '@app/clients/clients.component';
import { VideosectionComponent } from '@app/videosection/videosection.component';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
// import {SingleMediaPlayer} from './single-media-player';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    HomeComponent,
    VideosectionComponent,
    WaysToWorkTogetherComponent,
    WhoisjudeComponent,
    ConnecttodayComponent,
    ClientsComponent
  ]
  // bootstrap: [SingleMediaPlayer]
})
export class HomeModule {}
