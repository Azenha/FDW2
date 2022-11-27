import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetailsComponent } from './livro-details.component';

describe('LivroDetailsComponent', () => {
  let component: LivroDetailsComponent;
  let fixture: ComponentFixture<LivroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
