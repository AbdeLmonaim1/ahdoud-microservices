import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keynote } from '../../models/keynote.model';
import { KeynoteService } from '../../services/keynote';

@Component({
  selector: 'app-keynote-list',
  standalone: false,
  templateUrl: './keynote-list.html',
  styleUrl: './keynote-list.css'
})
export class KeynoteListComponent implements OnInit {
  keynotes: Keynote[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private keynoteService: KeynoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadKeynotes();
  }

  loadKeynotes(): void {
    this.isLoading = true;
    this.keynoteService.getKeynotes().subscribe({
      next: (data) => {
        this.keynotes = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load keynotes. Please try again later.';
        this.isLoading = false;
        console.error('Error fetching keynotes:', err);
      }
    });
  }

  onAdd(): void {
    this.router.navigate(['/keynotes/new']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/keynotes/edit', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this keynote?')) {
      this.keynoteService.deleteKeynote(id).subscribe({
        next: () => {
          this.loadKeynotes();
        },
        error: (err) => {
          this.error = 'Failed to delete keynote. Please try again.';
          console.error('Error deleting keynote:', err);
        }
      });
    }
  }
}
