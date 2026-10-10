import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ACADEMIC_PROJECTS, PROFILE, PROJECTS } from './portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name and one card per project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(PROFILE.name);
    expect(compiled.querySelectorAll('app-project-card').length).toBe(
      PROJECTS.length + ACADEMIC_PROJECTS.length,
    );
  });
});
