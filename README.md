# StockNova UI

Frontend del ecosistema **StockNova** (sistema de control de inventario y facturación), desarrollado con las tecnologías web más modernas y escalables.

## 🛠️ Tecnologías Utilizadas

- **Core:** [Angular 20+](https://angular.dev/) (Standalone Components, Signals, OnPush Change Detection)
- **Gestor de Paquetes:** [Bun](https://bun.sh/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Componentes de UI:** [Angular Material](https://material.angular.io/)
- **Calidad de Código:** ESLint, Prettier
- **Automatización de Git:** Husky & lint-staged
- **CI/CD & Hosting:** GitHub Actions & Cloudflare Pages (despliegue continuo mediante rama `production`)

## 🚀 Servidor de Desarrollo Local

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
bun run start
# o usando ng
ng serve
```

Una vez que el servidor esté corriendo, abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al guardar cambios en los archivos fuente.

## 📦 Construcción y Despliegue

### Compilar para Producción

```bash
bun run build
```

Esto compilará el proyecto y almacenará los artefactos en el directorio `dist/`.

### Despliegue en Cloudflare Pages

El despliegue está configurado de manera automatizada:
1. Realiza los cambios en tu rama de características (`feat/...`).
2. Abre un Pull Request hacia la rama `main` (el CI verificará la compilación y formato del código).
3. Una vez aprobado y fusionado en `main`, abre un Pull Request hacia la rama `production`. Al fusionarse esta última rama, Cloudflare Pages compilará y desplegará los cambios automáticamente.
