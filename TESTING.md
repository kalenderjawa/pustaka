# Pengetestan

Beberapa pengetestan yang dilakukan selama pengembangan _library_ Pustaka.

> Catatan: Script test akan mengkopi *library* hasil build pada direktori lib.
## Testing Browser

### Build dan Setup

Bangun library dan salin ke folder examples:

```bash
npm run build:examples
```

### Manual Testing

Jalankan server contoh untuk testing manual di browser:

```bash
npm run serve:examples
```

Server akan otomatis membuka browser pada alamat http://localhost:3113

### Browser mendukung ES Module

Buka halaman utama:

```
http://localhost:3113
```

### Browser tidak mendukung ES Module (IIFE)

Buka halaman tanpa ES Module:

```
http://localhost:3113/index-no-esm.html
```

### Catatan

- Server examples menggunakan Vite dev server yang modern
- File built akan otomatis tersedia di folder examples setelah menjalankan `npm run build:examples`
- Untuk development, jalankan `npm run build:examples` setiap kali ada perubahan kode


