import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecttodayComponent } from './connecttoday.component';

describe('ConnecttodayComponent', () => {
  let component: ConnecttodayComponent;
  let fixture: ComponentFixture<ConnecttodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnecttodayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecttodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
