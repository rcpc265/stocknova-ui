# Software Design Document (SDD) - StockNova UI

> [!NOTE]
> **Respuesta a tus dudas existenciales:**
> Me detuve a explicarte los conceptos que marcaste porque, sinceramente, si no entiendes esto, Angular te va a comer vivo. Vamos a aclarar la brujería moderna de Angular antes de tocar el diseño del POS.

## 0. Conceptos Core (Para que estemos en la misma página)

### ¿Por qué descartar Angular Modules (`NgModule`)?
Porque son una reliquia del pasado (antes de Angular 14). `NgModule` era una forma verbosa e innecesaria de agrupar componentes. Ahora, con **Standalone Components**, cada componente es independiente y solo importa lo que necesita. Es menos código espagueti, menos burocracia y es tu propia regla global: *"Always use standalone components over NgModules"*.

### ¿Qué demonios es `ChangeDetectionStrategy.OnPush`?
Por defecto, Angular revisa *toda* la aplicación cada vez que haces clic en cualquier botón. Eso destroza el rendimiento. `OnPush` le dice a Angular: *"Oye, no revises este componente a menos que sus datos de entrada (`Inputs`) cambien explícitamente o yo te avise"*. Es la única forma de que una app no se arrastre cuando tienes 500 productos en pantalla.

### ¿Qué son los Angular Signals (`signal`, `computed`)?
Es la nueva forma de manejar datos reactivos (Angular 16+). Antes usábamos RxJS (`BehaviorSubject`), que era un infierno de suscripciones que causaba fugas de memoria si olvidabas destruirlas.
Una `signal` es simplemente una variable que "avisa" a Angular cuando cambia su valor. Un `computed` es una variable que se recalcula sola cuando cambia otra señal.
*Nota de mutabilidad:* Si tienes un array en una signal, no puedes simplemente hacer un `push` por debajo de la mesa (`mutate` ya fue deprecado por el equipo de Angular). Tienes que usar `update` para crear una nueva copia del array, manteniendo la inmutabilidad.

---

## 1. Arquitectura Base
- **Framework:** Angular 20+
- **Patrón Principal:** Standalone Components.
- **Detección de Cambios:** `ChangeDetectionStrategy.OnPush` estricto en todos los componentes.
- **Gestión de Estado:** Angular Signals nativos. Se evita la mutabilidad impura.
- **Estilos:** Tailwind CSS v4 nativo. Preferencia por clases nativas sobre directivas heredadas (evitar `ngClass`/`ngStyle`).

## 2. Metodología SDD: Fase 1 (Módulo Layout)
Como acordamos, aplicaremos el diseño de manera iterativa. Esta es la especificación técnica para la primera pieza del puzzle: el Layout Principal.

### 2.1. `PosLayoutComponent` (Smart)
Este es el contenedor maestro del Punto de Venta. No contiene lógica de negocio sobre precios o carritos, su única responsabilidad es **orquestar el espacio visual**.

**Estructura Visual (CSS Grid/Flexbox con Tailwind):**
- **Pantalla Completa:** `h-screen w-screen bg-gray-50 flex overflow-hidden`
- **Área Izquierda (Catálogo):** Ocupa la mayor parte del espacio (`flex-1`). Contendrá una cabecera con buscador y la grilla de productos.
- **Área Derecha (Sidebar):** Ancho fijo (`w-96` o `w-[400px]`), fondo blanco, con sombra para separarlo visualmente. Aquí vivirá el carrito.

**Componentes Hijos que alojará (Mocked por ahora):**
Hasta que no definamos la fase 2 (Catálogo) y la fase 3 (Carrito), el `PosLayoutComponent` solo tendrá contenedores vacíos (placeholders) simulando la estructura.

**Detección de Cambios:** `changeDetection: ChangeDetectionStrategy.OnPush`
**Estado:** Ninguno.

### Siguientes pasos (Ejecución de la Fase 1):
1. Generar el componente `pos-layout`.
2. Enrutarlo como la vista principal en `app.routes.ts`.
3. Aplicar las clases base de Tailwind.
