import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthentificationComponent } from './anthentification.component';

describe('AnthentificationComponent', () => {
  let component: AnthentificationComponent;
  let fixture: ComponentFixture<AnthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnthentificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
