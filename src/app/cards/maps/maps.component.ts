import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MapCacheService } from '../../services/map-cache-service.service';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private mapCacheService: MapCacheService
  ) {}

  ngOnInit(): void {
    this.loadMapUrl();
  }

  loadMapUrl(): void {

    // Default location (Green Park, Delhi)
    const defaultLocation = 'Green Park, New Delhi, India';

    // Check if cached
    const cachedLocation = this.mapCacheService.getMapDetails();

    const locationToUse = cachedLocation || defaultLocation;

    // Save if not already cached
    if (!cachedLocation) {
      this.mapCacheService.setMapDetails(defaultLocation);
    }

    const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(locationToUse)}&output=embed`;

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}