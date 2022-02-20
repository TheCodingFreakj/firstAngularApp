import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  flavors: any;
  mydata: any[] = [];
  error: any;
  response: any;
  role: any;
  userAdded: any;
  approvedBy: any;
  constructor(private add: ProductsService) {
    this.flavors = [
      { name: 'prune', color: '#5A188E' },
      { name: 'squash', color: '#F88532' },
      { name: 'cherry', color: '#E91E63' },
    ];
    let user: any = localStorage.getItem('currentLoggedinUser');
    this.role = JSON.parse(user).user.role.toString();
    this.userAdded = JSON.parse(user).user.email;

    // if (this.role === 'Admin') {
    //   this.approvedBy = this.userAdded = JSON.parse(user).user.email;
    // }

    // if (this.role === 'User') {
    //   this.approvedBy = null;
    // }
    console.log(this.role);
  }
  urls: any[] = [];
  size: string | undefined;
  ngOnInit(): void {}

  onSubmit(contactForm: any) {
  

    let request = {
      productValue: contactForm.value,
      urlsSelected: this.mydata,
      size: this.size,
      approvStatus: false,
      added_by: this.userAdded, //logged in user with role admin or user
      approved_by: null,
    };


      this.add.sendForApproval(request).subscribe(
        (res: any) => {
          console.log(res);
          this.response = res?.message;
        },
        (errorMessage: any) => {
          console.log(errorMessage);
          this.error = errorMessage;

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
}
