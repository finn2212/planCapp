import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatedPostsPageRoutingModule } from './related-posts-routing.module';

import { RelatedPostsPage } from './related-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatedPostsPageRoutingModule
  ],
  declarations: [RelatedPostsPage]
})
export class RelatedPostsPageModule {}
