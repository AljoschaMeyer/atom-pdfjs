'use babel';

import path from 'path';
import {CompositeDisposable} from 'atom';
import PdfModel from './pdf-model';

const disposables = new CompositeDisposable();

const openURI = uriToOpen => {
  if (path.extname(uriToOpen).toLowerCase() === '.pdf') {
    return new PdfModel(uriToOpen);
  }
};

export function activate() {
  disposables.add(atom.workspace.addOpener(openURI));
}

export function deactivate() {
  disposables.dispose();
}
