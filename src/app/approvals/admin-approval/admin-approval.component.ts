import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css'],
})
export class AdminApprovalComponent implements OnInit {
  response: any[] = [];
  error: any;
  role: any;
  approver: any;
  loggedInUser: any;
  errorfecth: any;
  responsefetch: any;
  responseadd!: String;

  constructor(private approve: ProductsService, private add: ProductsService) {}

  ngOnInit(): void {
    let user: any = localStorage.getItem('currentLoggedinUser');
    this.role = JSON.parse(user).user.role.toString();
    this.loggedInUser = JSON.parse(user).user.email;
    if (this.role === 'Admin') {
      this.approver = JSON.parse(user).user.email;
    }

    if (this.role === 'User') {
      this.approver = null;
    }

    // console.log(this.role)
    // console.log(this.approver);
    this.approve.getApprovedProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.response = res;

        console.log(this.response);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
  }

  handleApprove(row: any) {
    console.log(row);

    //console.log(this.role);

    let reqProduct = {
      id: row._id,
      name: row.name,
      imageUrls: row.imageUrls,
      desc: row.desc,
      price: row.price,
      flavors: row.flavors,
      sizes: row.sizes,
      added_by: row.added_by,
      approvStatus: true,
      approved_by: this.approver,
      role: this.role,
    };

    if (this.role === 'Admin') {

      console.log(this.loggedInUser)
      console.log(row.added_by)
      if (this.loggedInUser !== row.added_by) {
        
        row.approvStatus = true;
        if (row.deleteStatus === true) {
          if (this.loggedInUser !== row.added_by) {
            this.add.deleteProductdb(row.name, row.approvStatus).subscribe(
              (res: any) => {
                console.log(res);
                this.responseadd = res.message;
                // this.approve.getApprovedProducts()
                // window.location.reload()
              },
              (errorMessage: any) => {
                console.log(errorMessage);
                this.error = errorMessage;
                //this.isLoading = false;
              }
            );
          } else {
            //console.log('hkhk');
            this.errorfecth = 'You Yourself cant approve reject';
            //console.log(this.errorfecth);
          }
        } else {
          this.add.addProduct(reqProduct).subscribe(
            (res: any) => {
              console.log(res);
              this.responseadd = res.message;
              // this.approve.getApprovedProducts()
              // window.location.reload()
            },
            (errorMessage: any) => {
              console.log(errorMessage);
              this.error = errorMessage;
              //this.isLoading = false;
            }
          );
        }
      } else {
        //console.log('hkhk');
        this.errorfecth = 'You Yourself cant approve';
        //console.log(this.errorfecth);
      }
    }
  }

  handleReject(row: any) {
    //this.responseadd = 'Its been Rejected';
    //console.log(row);
    if (this.role === 'Admin') {
      // console.log(this.loggedInUser);
      // console.log(row.added_by);
      if (this.loggedInUser !== row.added_by) {
        row.approvStatus = false;
        if (row.deleteStatus === true) {
          if (this.loggedInUser !== row.added_by) {
            this.add.deleteProductdb(row.name, row.approvStatus).subscribe(
              (res: any) => {
                console.log(res);
                this.responseadd = res.message;
                // this.approve.getApprovedProducts()
                // window.location.reload()
              },
              (errorMessage: any) => {
                console.log(errorMessage);
                this.error = errorMessage;
                //this.isLoading = false;
              }
            );
          } else {
            //console.log('hkhk');
            this.errorfecth = 'You Yourself cant reject';
            //console.log(this.errorfecth);
          }
        } else {
          this.add.rejectedProduct(row).subscribe(
            (res: any) => {
              console.log(res);
              this.responseadd = res.message;
              console.log(this.responseadd);
            },
            (errorMessage: any) => {
              console.log(errorMessage);
              this.errorfecth = errorMessage;
              //this.isLoading = false;
            }
          );
        }
      } else {
        //console.log('hkhk');
        this.errorfecth = 'You Yourself cant reject';
        console.log(this.errorfecth);
      }
    }
  }

  closeNow() {
    this.errorfecth = '';
    window.location.reload();
  }

  closeNowRes() {
    this.responseadd = '';
    window.location.reload();
  }
}
