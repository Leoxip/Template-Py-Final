import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorCompComponent } from './trabajador-comp.component';

describe('TrabajadorCompComponent', () => {
  let component: TrabajadorCompComponent;
  let fixture: ComponentFixture<TrabajadorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
