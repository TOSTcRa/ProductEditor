import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productDataSubject = new BehaviorSubject<any | null>(null);
  productData$ = this.productDataSubject.asObservable();

  loading = new BehaviorSubject<boolean>(false);
  error = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  loadProduct() {
    this.loading.next(true);
    this.error.next(null);

    this.http
      .get<any>('/products.json')
      .pipe(
        tap((data) => {
          this.productDataSubject.next(data);
          this.loading.next(false);
        }),
        catchError((err) => {
          this.error.next('Failed to load product');
          this.loading.next(false);
          return of(null);
        })
      )
      .subscribe();
  }
}
