import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesPlanningComponent } from './gestion-des-planning.component';

describe('GestionDesPlanningComponent', () => {
  let component: GestionDesPlanningComponent;
  let fixture: ComponentFixture<GestionDesPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionDesPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDesPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
