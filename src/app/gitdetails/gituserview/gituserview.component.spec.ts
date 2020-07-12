import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserViewComponent } from './gituserview.component';

describe('GitUserViewComponent', () => {
  let component: GitUserViewComponent;
  let fixture: ComponentFixture<GitUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
