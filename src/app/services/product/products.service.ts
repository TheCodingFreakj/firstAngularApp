import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Product } from 'src/app/core/product';
import { PRODUCTS } from '../../mock-products';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  uri: any;
  constructor(private httpClient: HttpClient) {
    environment.production === false && (this.uri = environment.baseUrl);
    environment.production === true && (this.uri = environment.baseUrl);
  }

  getProducts() {
    return this.httpClient.get(`${this.uri}/api/v1/getproducts`).pipe(
      catchError((error) => {
        console.log(error);
        let errorMess = '';
        errorMess = error.error.message;
        return throwError(() => errorMess);
      }),
      tap((data) => console.log(data))
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

  rejectedProduct(row: any) {
    console.warn(row);
    return this.httpClient.post(`${this.uri}/api/v1/rejectChanges`, row).pipe(
      catchError((error) => {
        console.log(error);
        let errorMess = '';
        errorMess = error.error.message;
        return throwError(() => errorMess);
      })
    );
  }

  deleteProduct(reqData: any) {
    console.warn(reqData);
    return this.httpClient
      .post(`${this.uri}/api/v1/senddeleteApproval`, reqData)
      .pipe(
        catchError((error) => {
          console.log(error);
          let errorMess = '';
          errorMess = error.error.message;
          return throwError(() => errorMess);
        })
      );
  }

  deleteProductdb(reqData: any, approveStatus: any) {
    console.warn(reqData);
    return this.httpClient
      .delete(
        `${this.uri}/api/v1/deleteproducts/${reqData}?approveStatus=${approveStatus}`
      )
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
function configurations(configurations: any) {
  throw new Error('Function not implemented.');
}
