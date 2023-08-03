import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDinamicoComponent } from './path-dinamico.component';

describe('PathDinamicoComponent', () => {
  let component: PathDinamicoComponent;
  let fixture: ComponentFixture<PathDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathDinamicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
