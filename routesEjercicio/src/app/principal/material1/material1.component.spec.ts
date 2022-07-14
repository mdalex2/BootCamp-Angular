import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Material1Component } from './material1.component';

describe('Material1Component', () => {
  let component: Material1Component;
  let fixture: ComponentFixture<Material1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Material1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Material1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
