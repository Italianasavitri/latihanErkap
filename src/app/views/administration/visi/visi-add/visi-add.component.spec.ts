import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiAddComponent } from './visi-add.component';

describe('VisiAddComponent', () => {
  let component: VisiAddComponent;
  let fixture: ComponentFixture<VisiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
