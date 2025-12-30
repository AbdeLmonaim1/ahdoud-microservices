import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from '../../models/conference.model';
import { ConferenceService } from '../../services/conference';

@Component({
  selector: 'app-conference-list',
  standalone: false,
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceListComponent implements OnInit {
  conferences: Conference[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private conferenceService: ConferenceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadConferences();
  }

  loadConferences(): void {
    this.isLoading = true;
    this.conferenceService.getConferences().subscribe({
      next: (data) => {
        this.conferences = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load conferences. Please try again later.';
        this.isLoading = false;
        console.error('Error fetching conferences:', err);
      }
    });
  }

  onAdd(): void {
    this.router.navigate(['/conferences/new']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/conferences/edit', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this conference?')) {
      this.conferenceService.deleteConference(id).subscribe({
        next: () => {
          this.loadConferences();
        },
        error: (err) => {
          this.error = 'Failed to delete conference. Please try again.';
          console.error('Error deleting conference:', err);
        }
      });
    }
  }
}
