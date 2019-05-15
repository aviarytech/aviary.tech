import { Injectable } from '@angular/core';
import { Document } from './document';
import { DOCUMENTS } from './mock-documents';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor() {}
  getDocuments(): Observable<Document[]> {
    return of(DOCUMENTS);
  }
}
