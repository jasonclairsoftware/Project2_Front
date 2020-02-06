import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuresListComponent } from './treasures-list.component';

describe('TreasuresListComponent', () => {
  let component: TreasuresListComponent;
  let fixture: ComponentFixture<TreasuresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
