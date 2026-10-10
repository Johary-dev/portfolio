import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../portfolio.data';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();

  protected readonly number = computed(() => String(this.index() + 1).padStart(2, '0'));
  protected readonly host = computed(() => {
    const url = this.project().url;
    return url ? new URL(url).host : null;
  });
}
