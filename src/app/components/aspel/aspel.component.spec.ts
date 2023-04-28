import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspelComponent } from './aspel.component';

describe('AspelComponent', () => {
  let component: AspelComponent;
  let fixture: ComponentFixture<AspelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
