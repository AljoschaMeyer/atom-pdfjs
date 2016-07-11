'use babel';

import PdfModel from './pdf-model';

export default class Deserializer {
  serialize(pdfModel) {
    console.log(pdfModel);
    return {
      deserializer: 'Deserializer',
      data: {
        uri: pdfModel.uri
      }
    };
  }

  deserialize(state) {
    console.log('deserializing:');
    console.log(state);
    return new PdfModel(state);
  }
}
