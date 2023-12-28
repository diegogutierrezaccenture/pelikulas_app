import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBddComponent } from './datos-bdd.component';

describe('DatosBddComponent', () => {
  let component: DatosBddComponent;
  let fixture: ComponentFixture<DatosBddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosBddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosBddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
