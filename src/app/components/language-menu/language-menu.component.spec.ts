import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from 'src/app/transloco-testing.module';
import { LanguageMenuComponent } from './language-menu.component';

describe('LanguageMenuComponent', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoModule(), LanguageMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
