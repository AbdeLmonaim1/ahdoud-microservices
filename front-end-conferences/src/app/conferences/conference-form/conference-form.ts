import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conference } from '../../models/conference.model';
import { ConferenceService } from '../../services/conference';

@Component({
    selector: 'app-conference-form',
    standalone: false,
    templateUrl: './conference-form.html',
    styleUrl: './conference-form.css'
})
export class ConferenceFormComponent implements OnInit {
    conferenceForm: FormGroup;
    isEditMode = false;
    conferenceId: number | null = null;
    isLoading = false;
    error: string | null = null;

    constructor(
        private fb: FormBuilder,
        private conferenceService: ConferenceService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.conferenceForm = this.fb.group({
            titre: ['', [Validators.required, Validators.minLength(3)]],
            type: ['ACADEMIC', Validators.required],
            date: ['', Validators.required],
            duree: [0, [Validators.required, Validators.min(1)]],
            inscrit: [0, [Validators.required, Validators.min(0)]],
            score: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.isEditMode = true;
                this.conferenceId = +params['id'];
                this.loadConference(this.conferenceId);
            }
        });
    }

    loadConference(id: number): void {
        this.isLoading = true;
        this.conferenceService.getConferenceById(id).subscribe({
            next: (conference) => {
                this.conferenceForm.patchValue(conference);
                this.isLoading = false;
            },
            error: (err) => {
                this.error = 'Failed to load conference. Please try again.';
                this.isLoading = false;
                console.error('Error loading conference:', err);
            }
        });
    }

    onSubmit(): void {
        if (this.conferenceForm.invalid) {
            this.conferenceForm.markAllAsTouched();
            return;
        }

        this.isLoading = true;
        const conferenceData: Conference = this.conferenceForm.value;

        const request = this.isEditMode && this.conferenceId
            ? this.conferenceService.updateConference(this.conferenceId, conferenceData)
            : this.conferenceService.saveConference(conferenceData);

        request.subscribe({
            next: () => {
                this.router.navigate(['/conferences']);
            },
            error: (err) => {
                this.error = 'Failed to save conference. Please try again.';
                this.isLoading = false;
                console.error('Error saving conference:', err);
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/conferences']);
    }
}
