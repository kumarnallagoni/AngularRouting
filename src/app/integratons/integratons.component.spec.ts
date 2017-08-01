import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratonsComponent } from './integratons.component';

describe('IntegratonsComponent', () => {
  let component: IntegratonsComponent;
  let fixture: ComponentFixture<IntegratonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
