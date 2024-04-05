// from https://github.com/diegomura/react-pdf/tree/master/packages/render#pdf-example
const fs = require('fs');
const render = require('@react-pdf/render');
const pdfkit = require('@react-pdf/pdfkit');

const PDFDocument = pdfkit.default;

const ctx = new PDFDocument({ autoFirstPage: false });

const primitives = require('@react-pdf/primitives');

const view = {
  type: primitives.View,
  style: {
    backgroundColor: 'red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    borderTopColor: 'yellow',
    borderLeftColor: 'green',
    borderBottomColor: 'black',
    borderRightColor: 'purple',
  },
  box: {
    left: 20,
    top: 20,
    width: 100,
    height: 80,
    borderTopWidth: 3,
    borderLeftWidth: 2,
    borderBottomWidth: 1,
    borderRightWidth: 4,
  },
};

const doc = {
  type: primitives.Document,
  children: [
    {
      type: primitives.Page,
      box: { width: 400, height: 600, left: 10, top: 10 },
      children: [view],
    },
  ],
};

render.default(ctx, doc);

const stream = fs.createWriteStream('./test.pdf');

ctx.pipe(stream);
