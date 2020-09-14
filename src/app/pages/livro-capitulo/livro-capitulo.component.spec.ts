/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivroCapituloComponent } from './livro-capitulo.component';

describe('LivroCapituloComponent', () => {
  let component: LivroCapituloComponent;
  let fixture: ComponentFixture<LivroCapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroCapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroCapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
