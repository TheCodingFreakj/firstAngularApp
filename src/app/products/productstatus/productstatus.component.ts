import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-productstatus',
  templateUrl: './productstatus.component.html',
  styleUrls: ['./productstatus.component.css'],
})
export class ProductstatusComponent implements OnInit {
  response: any;
  isAscendingSort: Boolean = false;
  error: any;
  p: any = 1;
  count: any = 5;
  toBeUpdated: any;
  flavors: any;
  mydata: any[] = [];
  erroredit: any;
  responseedit: any;
  role: any;
  userAdded: any;
  approvedBy: any;
  urls: any[] = [];
  size: string | undefined;
  flavorsselect: any;
  toBeRejected: any;
  rejectStatus: boolean | undefined;
  constructor(
    private fetch: ProductsService,
    private approve: ProductsService,
    private add: ProductsService
  ) {
    this.flavors = [
      { name: 'prune', color: '#5A188E' },
      { name: 'squash', color: '#F88532' },
      { name: 'cherry', color: '#E91E63' },
    ];
    let user: any = localStorage.getItem('currentLoggedinUser');
    this.role = JSON.parse(user).user.role.toString();
    this.userAdded = JSON.parse(user).user.email;
    
  }

  ngOnInit(): void {
    this.fetch.getProducts().subscribe(
      (res: any) => {
        console.log(res.products);
        this.response = res.products;
        console.log(this.response);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
  }

  sortingPrice() {
    this.isAscendingSort = !this.isAscendingSort;
    if (this.isAscendingSort === true) {
      let lowestToHighest = this.response.sort(
        (a: any, b: any) => a.price - b.price
      );
    }
    if (this.isAscendingSort === false) {
      let highestToLowest = this.response.sort(
        (a: any, b: any) => b.price - a.price
      );
    }
  }

  updateTow(row: any) {
    this.toBeUpdated = row;
    this.flavorsselect = this.toBeUpdated.flavors.toString();
    console.log(this.toBeUpdated);
  }
  deleteTow(row: any) {
    this.toBeUpdated = null;
    this.toBeRejected = row;
    this.rejectStatus = true

    let reqData = {
      statusReject:this.rejectStatus,
      idDelete:row
    }
    this.add.deleteProduct(reqData).subscribe(
      (res: any) => {
        console.log(res);
        this.responseedit = res.message;
        console.log(this.responseedit)
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.erroredit = errorMessage;

        //this.isLoading = false;
      }
    );
  }

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    // console.log(this.toBeUpdated.imageUrls);
    console.log(this.mydata);
    let request: any = {
      id: '',
      urlsSelected: '',
      productValue: '',
      size: '',
      approvStatus: '',
      rejectStatus:'',
      added_by: '',
      approved_by: '',
    };
    if (this.mydata.length === 0 && request['urlsSelected'].length === 0) {
      console.log('kjhkjh');
      request['id'] = this.toBeUpdated.id;
      request['urlsSelected'] = this.toBeUpdated.imageUrls;
      request['productValue'] = contactForm.value;
      request['size'] = this.size ? this.size : this.toBeUpdated.sizes;
      request['approvStatus'] = false;
      request["rejectStatus"] =request["rejectStatus"] === true ? false : null
      request['added_by'] = this.userAdded;
      request['approved_by'] = null;
    } else {

      console.log('kjhkjh');
      request['id'] = this.toBeUpdated.id;
      request['urlsSelected'] = this.mydata;
      request['productValue'] = contactForm.value;
      request['size'] = this.size ? this.size : this.toBeUpdated.sizes;
      request['approvStatus'] = false;
      request['added_by'] = this.userAdded;
      request["rejectStatus"] =request["rejectStatus"] === true ? false : null
      request['approved_by'] = null;
    }

    console.log(request);

    this.add.sendForApproval(request).subscribe(
      (res: any) => {
        console.log(res);
        this.responseedit = res?.message;
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.erroredit = errorMessage;

        //this.isLoading = false;
      }
    );
  }

  selectSize(event: any) {
    this.size = event.target.value;
  }

  selectFiles(event: any) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf('image') > -1) {
            this.mydata.push({
              url: e.target.result,
              type: 'img',
            });
          } else if (file.type.indexOf('video') > -1) {
            this.mydata.push({
              url: e.target.result,
              type: 'video',
            });
          }
          console.log(this.mydata);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onclose() {
    this.toBeUpdated = '';
    this.mydata = [];
    this.fetch.getProducts().subscribe(
      (res: any) => {
        console.log(res.products);

        // const transformed = res.products.map((data: any) => {
        //   if (data.name === this.toBeUpdated.name) {
        //     data.approved_by = data.approved_by ? null: null
        //     data.approvStatus = data.approvStatus === true ? false : true;
        //     return data;
        //   }
        // });
        //  console.log(transformed);

        this.response = res.products;
        console.log(this.response);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
    //window.location.reload();
  }

  closeNowRes() {
    this.responseedit = '';
    this.erroredit = '';
    this.fetch.getProducts().subscribe(
      (res: any) => {
        console.log(res.products);

        // const transformed = res.products.map((data: any) => {
        //   if (data.name === this.toBeUpdated.name) {
        //     data.approved_by = data.approved_by ? null: null
        //     data.approvStatus = data.approvStatus === true ? false : true;
        //     return data;
        //   }
        // });
        //  console.log(transformed);

        this.response = res.products;
        console.log(this.response);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
    // window.location.reload();
  }
}
