import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Material2Component } from './material2.component';

describe('Material2Component', () => {
  let component: Material2Component;
  let fixture: ComponentFixture<Material2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Material2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Material2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
