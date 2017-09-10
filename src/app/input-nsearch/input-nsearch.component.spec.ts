import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNsearchComponent } from './input-nsearch.component';

describe('InputNsearchComponent', () => {
  let component: InputNsearchComponent;
  let fixture: ComponentFixture<InputNsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
