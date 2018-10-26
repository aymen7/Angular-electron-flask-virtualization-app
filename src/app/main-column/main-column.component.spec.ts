import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColumnComponent } from './main-column.component';

describe('MainColumnComponent', () => {
  let component: MainColumnComponent;
  let fixture: ComponentFixture<MainColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
