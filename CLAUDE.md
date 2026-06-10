# CLAUDE.md

Este archivo guía a Claude Code sobre cómo trabajar en este proyecto.

---

## Descripción del proyecto

Landing page para **Miendez Pino (MP)**, empresa de energía solar en Uruguay.
El objetivo de la página es capturar leads: usuarios que quieren saber si su casa puede ahorrar con paneles solares. El flujo principal es:

1. El visitante llega a la landing.
2. Ve la propuesta de valor (ahorro con energía solar, diagnóstico gratuito en 24 horas).
3. Completa el formulario de diagnóstico con nombre, WhatsApp, zona, tipo de vivienda y factura de UTE.
4. La empresa analiza el caso y responde por WhatsApp.

La página también tiene un botón flotante de WhatsApp para contacto directo.

---

## Stack

- **Framework:** React 19 + Vite 8
- **Lenguaje:** JavaScript (JSX) — sin TypeScript por ahora
- **Estilos:** Tailwind CSS v3
- **Iconos:** lucide-react
- **Sin backend:** el formulario actualmente es solo visual (muestra un `alert` al enviar)

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx          # Barra de navegación con menú mobile
│   ├── HeroSection.jsx     # Hero principal con CTA y formulario
│   ├── StatsSection.jsx    # Banda oscura con caso real de ahorro
│   ├── FeaturesSection.jsx # Sección "No todas las casas son iguales"
│   ├── CTASection.jsx      # Llamado a la acción final
│   └── DiagnosticForm.jsx  # Formulario de solicitud de diagnóstico
├── assets/                 # Imágenes estáticas
├── App.jsx                 # Composición de secciones + botón WhatsApp
├── main.jsx                # Entry point
└── index.css               # Estilos globales / fuentes
```

---

## Colores del proyecto

Definidos en `tailwind.config.js`:

| Token           | Hex       | Uso                              |
|-----------------|-----------|----------------------------------|
| `navy`          | `#1B2D5B` | Color principal (fondos, texto)  |
| `navy-dark`     | `#152349` | Hover de navy                    |
| `navy-light`    | `#243a72` | Variante clara                   |
| `orange`        | `#E87D2B` | Acento / CTAs / highlights       |
| `orange-dark`   | `#c96820` | Hover de orange                  |

---

## Convenciones de código

- Componentes en **PascalCase**: `HeroSection.jsx`.
- Una sección = un archivo de componente. No mezclar secciones en el mismo archivo.
- Props tipadas con JSDoc si se vuelven complejas (no obligatorio por ahora).
- Estilos solo con **clases de Tailwind** en el JSX; no usar CSS inline salvo para gradientes o imágenes de fondo que Tailwind no soporte.
- Imágenes externas vía Unsplash (ya usadas en el proyecto) mientras no haya assets propios.

---

## Gestor de paquetes

- Usar **siempre `pnpm`** para instalar dependencias, correr scripts y gestionar el proyecto.
- ❌ **NUNCA usar `npm`** — ni `npm install`, ni `npm run`, ni ningún subcomando de npm.

```bash
# Correcto
pnpm install
pnpm dev
pnpm build
pnpm add <paquete>
pnpm remove <paquete>

# Incorrecto — prohibido
npm install
npm run dev
npm i <paquete>
```

---

## Comandos útiles

```bash
pnpm dev        # Servidor de desarrollo (Vite HMR)
pnpm build      # Build de producción
pnpm preview    # Preview del build
pnpm lint       # ESLint
```

---

## Lo que NO hacer

- ❌ No usar `npm` bajo ninguna circunstancia — solo `pnpm`.
- ❌ No migrar a TypeScript sin pedido explícito.
- ❌ No agregar un backend o lógica de envío real al formulario sin pedido explícito.
- ❌ No modificar los colores base (`navy`, `orange`) sin pedido explícito — son la identidad de marca.
- ❌ No usar CSS custom ni módulos CSS — solo Tailwind.
- ❌ No crear carpetas nuevas sin necesidad real; la estructura es intencionalmente simple.
