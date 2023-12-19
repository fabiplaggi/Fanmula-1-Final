import { Component } from '@angular/core';
import { Highlights } from '../shared/models/highlight';
import { HighlightService } from '../services/highlights/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

  highlights: Highlights[] = [];
  constructor(private hs:HighlightService) {

  }

  ngOnInit(): void {
    this.highlights = this.hs.getAll();
  }
}
