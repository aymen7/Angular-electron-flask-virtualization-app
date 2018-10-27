import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsListComponent } from './vms-list.component';

describe('VmsListComponent', () => {
  let component: VmsListComponent;
  let fixture: ComponentFixture<VmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
