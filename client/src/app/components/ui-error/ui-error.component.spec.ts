import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiErrorComponent } from './ui-error.component';

describe('UiErrorComponent', () => {
  let component: UiErrorComponent;
  let fixture: ComponentFixture<UiErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
