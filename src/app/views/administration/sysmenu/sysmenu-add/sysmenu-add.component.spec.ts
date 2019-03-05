import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysmenuAddComponent } from './sysmenu-add.component';

describe('SysmenuAddComponent', () => {
  let component: SysmenuAddComponent;
  let fixture: ComponentFixture<SysmenuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysmenuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysmenuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
