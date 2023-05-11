import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnBComponent } from './adn-b.component';

describe('AdnBComponent', () => {
  let component: AdnBComponent;
  let fixture: ComponentFixture<AdnBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdnBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
