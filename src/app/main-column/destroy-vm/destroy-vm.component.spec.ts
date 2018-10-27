import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyVmComponent } from './destroy-vm.component';

describe('DestroyVmComponent', () => {
  let component: DestroyVmComponent;
  let fixture: ComponentFixture<DestroyVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestroyVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
