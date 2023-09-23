import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestComponent } from './oldest.component';

describe('OldestComponent', () => {
  let component: OldestComponent;
  let fixture: ComponentFixture<OldestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldestComponent]
    });
    fixture = TestBed.createComponent(OldestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
