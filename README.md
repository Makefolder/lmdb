![banner](https://github.com/user-attachments/assets/927a43d1-f9ae-48e1-8fa7-57640a3b0101)

# 💻 Portfolio website

<div align="center">
  <img src="https://img.shields.io/badge/golang-424242?logo=go&style=for-the-badge&logoColor=00ADD8"/>
  <img src="https://img.shields.io/badge/tailwind-424242?logo=tailwindcss&logoColor=06B6D4&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/svelte-424242?logo=svelte&style=for-the-badge&logoColor=ff3e00"/>
  <img src="https://img.shields.io/badge/skeleton-424242?style=for-the-badge&logoColor=ff3e00"/>
  <img src="https://img.shields.io/badge/©%20MIT-424242?style=for-the-badge"/>
</div>

## ✨ Frontend

### Developing ✒️

Once you've installed dependencies with `npm install` (or `pnpm install` / `yarn`) in `/web` directory, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building 🏗️

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## ⚙️ Backend

### Database

Create `dev.db` (sqlite3) database in `/database`.

### Build 🧱

To build from source run
```bash
make build
```

It will build executable which can be found in `/bin`. <br />
Run `make clean` to delete the executable.

### Start Go server 🔌

To start `air` run the following command. If you don't have `air`, it will suggest its installing.

``` bash
make watch
```

### Testing 🤓

To run tests use this command

``` bash
make test
```

## 📄 License
<div align="center">
  <a href="https://choosealicense.com/licenses/mit/"><strong>MIT</strong></a>
</div>
