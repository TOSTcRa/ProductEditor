import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div class="modal">
      <ng-template #content></ng-template>
    </div>
  `,
  styleUrls: ['./modal.scss'],
})
export class Modal implements AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef })
  contentRef!: ViewContainerRef;

  constructor(
    private modalService: ModalService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('Modal Created');
  }

  ngAfterViewInit() {
    console.log('✅ Modal ngAfterViewInit');
    this.modalService.setModalContentRef(this.contentRef);
    this.cdr.detectChanges();
  }

  close() {
    this.modalService.close();
  }
}
