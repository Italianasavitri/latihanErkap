import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisiAddComponent } from './misi-add.component';

describe('MisiAddComponent', () => {
  let component: MisiAddComponent;
  let fixture: ComponentFixture<MisiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
