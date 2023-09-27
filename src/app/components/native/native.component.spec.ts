import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeComponent } from './native.component';

describe('NativeComponent', () => {
  let component: NativeComponent;
  let fixture: ComponentFixture<NativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NativeComponent],
    });
    fixture = TestBed.createComponent(NativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
