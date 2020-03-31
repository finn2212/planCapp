import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatedPostsPage } from './related-posts.page';

describe('RelatedPostsPage', () => {
  let component: RelatedPostsPage;
  let fixture: ComponentFixture<RelatedPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
