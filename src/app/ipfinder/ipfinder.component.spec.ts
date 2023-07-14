import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpfinderComponent } from './ipfinder.component';

describe('IpfinderComponent', () => {
  let component: IpfinderComponent;
  let fixture: ComponentFixture<IpfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpfinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
