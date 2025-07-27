/**
 * Lihat minimal Node.js engine pada package.json untuk menge-test an mem-build Pustaka ini
 */
import fs from 'fs-extra';
import path from 'path';

let js_browser_non_esm = path.join(
  path.dirname('.'),
  'dist/kalenderjawa.browser.min.js'
);
let js_browser_esm = path.join(path.dirname('.'), 'dist/kalenderjawa.min.js');

try {
  fs.copySync(
    js_browser_non_esm,
    path.join('.', 'examples/kalenderjawa.browser.min.js')
  );
  console.log(`copy file ${path.basename(js_browser_non_esm)} success!`);
} catch (err) {
  console.error(err);
}

try {
  fs.copySync(js_browser_esm, path.join('.', 'examples/kalenderjawa.min.js'));
  console.log(`copy file ${path.basename(js_browser_esm)} success!`);
} catch (err) {
  console.error(err);
}
