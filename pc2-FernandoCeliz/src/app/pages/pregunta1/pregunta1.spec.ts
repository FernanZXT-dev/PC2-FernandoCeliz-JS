import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta1 } from './pregunta1';

describe('Pregunta1', () => {
  let component: Pregunta1;
  let fixture: ComponentFixture<Pregunta1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta1],
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
