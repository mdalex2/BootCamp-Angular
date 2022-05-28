import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAutosComponent } from './listado-autos.component';

describe('ListadoAutosComponent', () => {
  let component: ListadoAutosComponent;
  let fixture: ComponentFixture<ListadoAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
