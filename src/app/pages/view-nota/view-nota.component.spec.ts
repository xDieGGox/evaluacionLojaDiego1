import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotaComponent } from './view-nota.component';

describe('ViewNotaComponent', () => {
  let component: ViewNotaComponent;
  let fixture: ComponentFixture<ViewNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNotaComponent]
    });
    fixture = TestBed.createComponent(ViewNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
