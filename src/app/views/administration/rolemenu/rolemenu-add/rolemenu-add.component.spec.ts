import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemenuAddComponent } from './rolemenu-add.component';

describe('RolemenuAddComponent', () => {
  let component: RolemenuAddComponent;
  let fixture: ComponentFixture<RolemenuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolemenuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolemenuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
