import { Produit } from './../Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  details! :string;
  products: Produit[] = [
    {
      nom:'feijao',
      prix: 12.5,
      description: '' ,
      quantite_en_stock:100
    },
    {
      nom:'arroz',
      prix: 5.5,
      description: '' ,
      quantite_en_stock:100

    }

  ]

  showDetails(product : Produit):void{
    this.details = `Details: ${product.nom} sell for ${product.prix} R$`
  }

}
