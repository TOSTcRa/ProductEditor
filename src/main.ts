import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductEditor } from './app/components/product-editor/product-editor';
import { App } from './app/app';

bootstrapApplication(ProductEditor, appConfig).catch((err) =>
  console.error(err)
);
