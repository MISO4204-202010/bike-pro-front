import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MuroPublicacionesComponent } from './muroPublicaciones.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MuroPublicacionesComponent', () => {
  let component: MuroPublicacionesComponent;
  let fixture: ComponentFixture<MuroPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MuroPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
