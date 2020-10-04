# Build Pustaka

Pustaka mempunyai beberapa versi build yaitu

## umd

`kalenderjawa.min.js`

versi ini bisa dipakai di lingkungkan browser maupun node.j terutaman yng tidak mendukung ES Module & cara me-*build* *libray* jenis ini masih manual yaitu 

- hapus dulu `type:module` pada package.json 

kemudian jalankan

```
npx webpack
```

## ES Module

`kalenderjawa.min.mjs`

versi ini hanya untuk browser modern dan node.js yang mendukung penuh ES Module dan untuk mem-*build* *library* jenis ini yang perlu anda lakukan adalah

- Tambahkan `type:module` pada `package.json`.
- *Comment* line code berikut pada `src\silpin.js` 

```javascript
// $FlowFixMe[cannot-resolve-module]
import 'core-js/stable'
// $FlowFixMe[cannot-resolve-module]
import 'regenerator-runtime/runtime'
```

menjadi

```javascript
// $FlowFixMe[cannot-resolve-module]
// import 'core-js/stable'
// $FlowFixMe[cannot-resolve-module]
// import 'regenerator-runtime/runtime'
```

kemudian jalankan

```
npx rollup --config
```
