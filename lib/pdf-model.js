'use babel';

import path from 'path';
import fs from 'fs-plus';
import {File} from 'atom';

// model class, instances of this are the items in atom panes
export default class PdfModel {

  static deserialize({filePath}) {
    if (fs.isFileSync(filePath)) {
      return new PdfModel(filePath);
    }
    console.warn(`Could not deserialize image editor for path '${filePath}' because that file no longer exists`);
  }

  constructor(filePath) {
    this.file = new File(filePath);
    this.uri = `'file://${encodeURI(filePath.replace(/\\/g, '/')).replace(/#/g, '%23').replace(/\?/g, '%3F')}`;
  }

  serialize() {
    return {
      deserializer: this.constructor.name,
      filePath: this.getPath()
    };
  }

  getTitle() {
    const filePath = this.getPath();
    if (filePath !== null && filePath !== undefined) {
      return path.basename(filePath);
    }
    return 'untitled';
  }

  getURI() {
    return this.uri;
  }

  getPath() {
    return this.file.getPath();
  }
}

atom.views.addViewProvider(PdfModel, require('./pdf-view'));

atom.deserializers.add(PdfModel);
