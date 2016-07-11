'use babel';

// view factory function: takes an instance of PdfModel and returns an
// HTMLElement to represent the model to the user
export default function (model) {
  const ele = document.createElement('div');
  ele.classList.add('pdf-view');

  const wv = document.createElement('webview');
  wv.src = `file://${__dirname}/pdfjs/web/viewer.html?file=${model.getPath()}`;
  ele.appendChild(wv);

  return ele;
}
