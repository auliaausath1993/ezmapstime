import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginActPage } from './login-act.page';

describe('LoginActPage', () => {
  let component: LoginActPage;
  let fixture: ComponentFixture<LoginActPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginActPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
