import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIconsComponent } from './display-icons.component';

describe('DisplayIconsComponent', () => {
  let component: DisplayIconsComponent;
  let fixture: ComponentFixture<DisplayIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
