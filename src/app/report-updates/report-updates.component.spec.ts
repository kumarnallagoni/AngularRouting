/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportUpdatesComponent } from './report-updates.component';

describe('ReportUpdatesComponent', () => {
  let component: ReportUpdatesComponent;
  let fixture: ComponentFixture<ReportUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
