# Application

## Config

Build with :
1. React JS v.18 (Vite JS)
2. Typescript
3. TailwindCss
4. CLSX and Tailwind Merge
5. Daisy UI (Tailwind UI Library
6. Lucide React (Icons)

## Installation

Use PNPM or YARN or NPM

```sh
pnpm i
pnpm dev
```

## Arcitecture

1. Custom folder structure for best practice development
2. Using TailwindCss for faster development
3. Responsive for Desktop and Mobile
4. Typescript type safety and Reduce bug purposes
5. Daisy UI simple component library


## Explanation

1. TailwindCss - Kenapa menggunakan tailwindCss alasan nya karena mempercepat proses pembuatan atau development dan sudah banyak menjadi standart penggunaan untuk styling pada aplikasi web. Tailwind yang akan datang atau versi terbaru akan lebih cepat dari css native biasa karena menggunakan engine yang lebih baik.
2. Daisy UI - Mengunakan ui libary component ini untuk memudahkan proses development, karena menggunakan base styling dari Tailwind, tentu ini hanya berlaku untuk range kebutuhan seperti apa, seperti contoh hanya company profile sudah lebih dari cukup namun apabila membuat dashboard atau backoffice lebih baik menggunakan library2 yang memang di peruntukan untuk hal tersebut seperti (Prime React , ANTD Design, dll..)
3. Untuk beberapa stack lain yang memang belum di pakai di project, seperti React Query ,untuk integrasi, React Table untuk table component, untuk form bisa menggunakan React Hook Form dan ZOD/YUP untuk memvalidasi end user input.