import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.setViewContainerRef(this.vcr);
  }

  openModal() {
    this.modalService
      .open(() =>
        import('./components/modal/modal').then((m) => ({ default: m.Modal }))
      )
      .then(() => {
        setTimeout(() => {
          this.modalService.renderContent(() =>
            import('./components/product/product').then((m) => ({
              default: m.ProductHtml,
            }))
          );
        });
      });
  }
}
