import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Product } from 'src/app/core/product';
import { PRODUCTS } from '../../mock-products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  uri = 'http://localhost:5000';
  getProducts() {
    return this.httpClient.get(`${this.uri}/api/v1/getproducts`).pipe(
      catchError((error) => {
        console.log(error);
        let errorMess = '';
        errorMess = error.error.message;
        return throwError(() => errorMess);
      })
    );
  }

  addProduct(request: any) {
    console.log(request);
    return this.httpClient.post(`${this.uri}/api/v1/add-product`, request).pipe(
      catchError((error) => {
        console.log(error);
        let errorMess = '';
        errorMess = error.error.message;
        return throwError(() => errorMess);
      })
    );
  }

  sendForApproval(request: any) {
    console.log(request);
    return this.httpClient
      .post(`${this.uri}/api/v1/sendApproval`, request)
      .pipe(
        catchError((error) => {
          console.log(error);
          let errorMess = '';
          errorMess = error.error.message;
          return throwError(() => errorMess);
        })
      );
  }

  getApprovedProducts() {
    return this.httpClient.get(`${this.uri}/api/v1/getpendingproducts`).pipe(
      catchError((error) => {
        console.log(error);
        let errorMess = '';
        errorMess = error.error.message;
        return throwError(() => errorMess);
      })
    );
  }

  getProduct(id: any): Observable<Product | undefined> {
    const product = PRODUCTS.find((product) => product.id === Number(id));
    return of(product);
  }
}