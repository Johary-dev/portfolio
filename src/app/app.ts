import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ACADEMIC_PROJECTS, PROFILE, PROJECTS, SKILLS } from './portfolio.data';
import { ProjectCard } from './project-card/project-card';

type Theme = 'light' | 'dark';

const THEME_KEY = 'portfolio-theme';

@Component({
  selector: 'app-root',
  imports: [ProjectCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly document = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly projects = PROJECTS;
  protected readonly academicProjects = ACADEMIC_PROJECTS;
  protected readonly skills = SKILLS;
  protected readonly year = new Date().getFullYear();

  protected readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    effect(() => {
      this.document.documentElement.dataset['theme'] = this.theme();
    });
  }

  protected toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Stockage indisponible (navigation privée) : le thème reste valable pour la session.
    }
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Stockage indisponible : on retombe sur la préférence système.
    }
    const prefersDark = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');
    return prefersDark?.matches ? 'dark' : 'light';
  }
}
