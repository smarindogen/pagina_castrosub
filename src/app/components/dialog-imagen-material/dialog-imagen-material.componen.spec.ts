import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImagenMaterialComponent } from './dialog-imagen-material.component';

describe('DialogImagenComponent', () => {
  let component: DialogImagenMaterialComponent;
  let fixture: ComponentFixture<DialogImagenMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImagenMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImagenMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
