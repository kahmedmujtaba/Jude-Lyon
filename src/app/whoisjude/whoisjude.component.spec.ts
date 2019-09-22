import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoisjudeComponent } from './whoisjude.component';

describe('WhoisjudeComponent', () => {
  let component: WhoisjudeComponent;
  let fixture: ComponentFixture<WhoisjudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhoisjudeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoisjudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
