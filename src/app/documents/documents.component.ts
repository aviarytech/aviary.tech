import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentService.getDocuments().subscribe(documents => (this.documents = documents));
  }
}
