import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuiBadgeComponent } from './pui-badge.component';

describe('PuiBadgeComponent', () => {
  let component: PuiBadgeComponent;
  let fixture: ComponentFixture<PuiBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuiBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
