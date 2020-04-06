import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.service'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
