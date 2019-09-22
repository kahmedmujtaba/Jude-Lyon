import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToWorkTogetherComponent } from './ways-to-work-together.component';

describe('WaysToWorkTogetherComponent', () => {
  let component: WaysToWorkTogetherComponent;
  let fixture: ComponentFixture<WaysToWorkTogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaysToWorkTogetherComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysToWorkTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
