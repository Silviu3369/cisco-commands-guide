#  Cisco CCNA Command Guide (Ghid Comenzi Cisco CCNA)

O aplicație web modernă ce servește ca ghid interactiv și referință pentru comenzile Cisco IOS, IOS-XE și ASA relevante pentru certificarea CCNA.

##  Tehnologii Utilizate

* **Framework:** Next.js 15 (React) cu App Router (Static Export)
* **Limbaj:** TypeScript 5
* **Stilizare:** Tailwind CSS 4 + shadcn/ui
* **Componente UI:** Lucide React, Radix UI
* **Deployment:** GitHub Pages (via GitHub Actions)

##  Quick Start (Local Development)

1.  **Clonează Repository:**
    ```bash
    git clone [https://github.com/numele-tau/cisco-commands-guide.git](https://github.com/numele-tau/cisco-commands-guide.git)
    cd cisco-commands-guide
    ```
2.  **Instalează Dependințele:**
    ```bash
    npm install
    # sau yarn install / pnpm install
    ```
3.  **Rulează Serverul de Dezvoltare:**
    ```bash
    npm run dev
    # sau yarn dev / pnpm dev
    ```
4.  Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Build Static

Pentru a genera versiunea statică (cea publicată pe GitHub Pages):
```bash
npm run build
