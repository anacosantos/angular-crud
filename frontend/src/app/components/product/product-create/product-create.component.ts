import { Observable } from 'rxjs';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //inicializa os valores
  produtao:Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router :Router) {

      }

  ngOnInit(): void {
  

  }

  createProduct(): void{

   this.productService.create(this.produtao).subscribe((produtoRetorno) => {
    this.productService.showMessage('Produto criado ' + produtoRetorno.id)
    this.produtao.name = ''
    this.produtao.price = null
    this.router.navigate(['/products'])
   })
   
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
  
}