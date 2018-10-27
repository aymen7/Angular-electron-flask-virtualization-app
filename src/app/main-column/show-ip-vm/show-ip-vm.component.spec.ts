import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIpVmComponent } from './show-ip-vm.component';

describe('ShowIpVmComponent', () => {
  let component: ShowIpVmComponent;
  let fixture: ComponentFixture<ShowIpVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIpVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIpVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
