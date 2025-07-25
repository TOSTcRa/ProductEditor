import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal/modal.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductHtml implements OnInit {
  constructor(
    private modalService: ModalService,
    public productService: ProductService
  ) {
    console.log('✅ ProductHtml created');
  }

  ngOnInit() {
    this.productService.loadProduct();
  }

  closeModal() {
    this.modalService.close();
  }
}
