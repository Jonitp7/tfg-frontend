import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendasUsuarioComponent } from './viviendas-usuario.component';

describe('ViviendasUsuarioComponent', () => {
  let component: ViviendasUsuarioComponent;
  let fixture: ComponentFixture<ViviendasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViviendasUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViviendasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
