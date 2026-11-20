import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {
  // Reçu du parent (null tant qu'aucune conférence n'est cliquée)
  conference = input<Conference | null>(null);

  // Événement envoyé au parent
  inscription = output<Conference>();

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  onInscrire(c: Conference): void {
    this.inscription.emit(c);
  }
}