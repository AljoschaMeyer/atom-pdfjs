'use babel';

const PdfView = require('./pdf-view.js');

export default class {
  constructor(uri) {
    this.uri = uri;
  }

  getTitle() {
    return this.uri;
  }

  getViewClass() {
    console.log(PdfView);
    return PdfView;
  }
}
