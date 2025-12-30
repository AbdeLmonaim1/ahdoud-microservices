import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Keynote } from '../../models/keynote.model';
import { KeynoteService } from '../../services/keynote';

@Component({
    selector: 'app-keynote-form',
    standalone: false,
    templateUrl: './keynote-form.html',
    styleUrl: './keynote-form.css'
})
export class KeynoteFormComponent implements OnInit {
    keynoteForm: FormGroup;
    isEditMode = false;
    keynoteId: number | null = null;
    isLoading = false;
    error: string | null = null;

    constructor(
        private fb: FormBuilder,
        private keynoteService: KeynoteService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.keynoteForm = this.fb.group({
            nom: ['', [Validators.required, Validators.minLength(2)]],
            prenom: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            fonction: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.isEditMode = true;
                this.keynoteId = +params['id'];
                this.loadKeynote(this.keynoteId);
            }
        });
    }

    loadKeynote(id: number): void {
        this.isLoading = true;
        this.keynoteService.getKeynoteById(id).subscribe({
            next: (keynote) => {
                this.keynoteForm.patchValue(keynote);
                this.isLoading = false;
            },
            error: (err) => {
                this.error = 'Failed to load keynote. Please try again.';
                this.isLoading = false;
                console.error('Error loading keynote:', err);
            }
        });
    }

    onSubmit(): void {
        if (this.keynoteForm.invalid) {
            this.keynoteForm.markAllAsTouched();
            return;
        }

        this.isLoading = true;
        const keynoteData: Keynote = this.keynoteForm.value;

        const request = this.isEditMode && this.keynoteId
            ? this.keynoteService.updateKeynote(this.keynoteId, keynoteData)
            : this.keynoteService.saveKeynote(keynoteData);

        request.subscribe({
            next: () => {
                this.router.navigate(['/keynotes']);
            },
            error: (err) => {
                this.error = 'Failed to save keynote. Please try again.';
                this.isLoading = false;
                console.error('Error saving keynote:', err);
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/keynotes']);
    }
}
