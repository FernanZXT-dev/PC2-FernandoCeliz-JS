import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta2 } from './pregunta2';

describe('Pregunta2', () => {
  let component: Pregunta2;
  let fixture: ComponentFixture<Pregunta2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta2],
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
