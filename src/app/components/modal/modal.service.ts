import {
  Injectable,
  signal,
  ViewContainerRef,
  ComponentRef,
  Type,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private viewContainerRef?: ViewContainerRef;
  private modalRef?: ComponentRef<unknown>;
  private contentRef?: ViewContainerRef;
  isOpen = signal(false);

  setViewContainerRef(vcr: ViewContainerRef) {
    this.viewContainerRef = vcr;
  }

  setModalContentRef(ref: ViewContainerRef) {
    this.contentRef = ref;
  }

  async open(modalLoader: () => Promise<{ default: any }>) {
    if (!this.viewContainerRef) return;

    const { default: ModalComponent } = await modalLoader();
    this.viewContainerRef.clear();
    this.modalRef = this.viewContainerRef.createComponent(ModalComponent);
    this.isOpen.set(true);
  }

  async renderContent<T>(componentLoader: () => Promise<{ default: Type<T> }>) {
    console.log('contentRef?', this.contentRef);
    if (!this.contentRef) return;
    this.contentRef.clear();

    const { default: ContentComponent } = await componentLoader();
    this.contentRef.createComponent(ContentComponent);
  }

  close() {
    this.modalRef?.destroy();
    this.modalRef = undefined;
    this.contentRef = undefined;
    this.isOpen.set(false);
  }
}
