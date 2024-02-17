import { Component } from '@angular/core';

import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  details! :string;
  products: Product[] = [
    {

      nome:'feijao',
      preco: 12.5
    },
    {
      nome:'arroz',
      preco: 5.5

    }

  ]

  showDetails(product : Product):void{
    this.details = `Details: ${product.nome} sell for ${product.preco} R$`
  }

}
