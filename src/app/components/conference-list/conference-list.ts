import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';   // ① import

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe, NgClass, FormsModule, ConferenceDetails],  // ① ajouté ici
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {
  searchText: string = '';

  // ② la conférence cliquée
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Découverte des nouveautés d’Angular 21.',
      date: new Date('2027-11-15'), place: 'Tunis', maxParticipants: 50, nbParticipants: 25 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les Signals Angular.',
      date: new Date('2027-11-30'), place: 'Ariana', maxParticipants: 30, nbParticipants: 24 },
    { id: 3, title: 'Web Conference', description: 'Les tendances du développement web.',
      date: new Date('2027-11-20'), place: 'Sousse', maxParticipants: 40, nbParticipants: 40 }
  ];

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  get filteredConferences(): Conference[] {
    return this.conferences.filter(c =>
      c.title.toLowerCase().includes(this.searchText.toLowerCase().trim())
    );
  }

  // ③ sélection d'une conférence au clic sur la carte
  selectConference(c: Conference): void {
    this.selectedConference = c;
  }

  // appelé par le bouton de la carte ET par l'enfant (output)
  inscrire(c: Conference): void {
    if (this.placesRestantes(c) > 0) {
      c.nbParticipants++;
    }
  }
}