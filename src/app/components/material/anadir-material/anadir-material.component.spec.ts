import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMaterialComponent } from './anadir-material.component';

describe('AnadirMaterialComponent', () => {
  let component: AnadirMaterialComponent;
  let fixture: ComponentFixture<AnadirMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
