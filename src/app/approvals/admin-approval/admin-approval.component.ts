import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css'],
})
export class AdminApprovalComponent implements OnInit {
  response: any;
  error: any;
  role: any;
  approver: any;

  constructor(private approve: ProductsService, private add: ProductsService) {}

  ngOnInit(): void {
    let user: any = localStorage.getItem('currentLoggedinUser');
    this.role = JSON.parse(user).user.role.toString();

    if (this.role === 'Admin') {
      this.approver = JSON.parse(user).user.email;
    }

    if (this.role === 'User') {
      this.approver = null;
    }
    console.log(this.approver)
    this.approve.getApprovedProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.response = res;
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

    console.log(row);

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

    this.add.addProduct(reqProduct).subscribe(
      (res: any) => {
        console.log(res);
        this.response = res.message;
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.isLoading = false;
      }
    );
  }

  handleReject(row: any) {}
}
