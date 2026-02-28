import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapCacheService {

  private storageKey = 'mapLocation';

  getMapDetails(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  setMapDetails(location: string): void {
    localStorage.setItem(this.storageKey, location);
  }

  clearMapDetails(): void {
    localStorage.removeItem(this.storageKey);
  }
}