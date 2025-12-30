export interface Conference {
  id: number;
  titre: string;
  type: 'ACADEMIC' | 'COMMERCIAL';
  date: string;
  duree: number;
  inscrit: number;
  score: number;
}
