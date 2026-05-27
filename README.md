# Nakawe — Asistente de Salud Digital

Sistema de salud digital para ExpoCiencias 2026. Los pacientes escanean un código QR, abren la PWA en su celular, e interactúan con **LUZ**, el asistente de salud conversacional.

## Vistas

| Vista | Archivo | Descripción |
|-------|---------|-------------|
| Paciente | `index.html` | PWA principal — portal del paciente con chat LUZ, medicamentos y perfil |
| Médico | `doctor.html` | Dashboard médico con reporte LUZ, signos vitales, recetas |
| Triage | `triage.html` | Dashboar de enfermería — búsqueda de pacientes, signos vitales, clasificación |

## PWA

Escaneá el código QR o abrí `https://phyton06.github.io/Nakawe/` desde tu celular.
El navegador te va a ofrecer instalar la app en tu pantalla de inicio.

## Stack

- HTML + CSS vanilla (sin frameworks)
- **Paleta**: OKLCH, tonos crema y verde profundo
- **Tipografía**: Iowan Old Style (display), SF Pro Text (UI)
- **Iconos**: SVG inline
- **Assets**: PNG / JPEG en `assets/images/`

## Pacientes

| # | Nombre | Edad | Consultorio | Médico |
|---|--------|------|-------------|--------|
| 1 | **María Rodríguez** | 68 | 4 | Dra. Laura Méndez |
| 2 | **Pedro Hernández** | 72 | 2 | Dr. Roberto García |
| 3 | **Carmen López** | 65 | 1 | Dra. Laura Méndez |
| 4 | **José Martínez** | 70 | 3 | Dr. Roberto García |

### Resumen Clínico

- **María**: DM2 + HAS + neuropatía periférica. Suspendió Losartán por mareo. HbA1c 7.2%.
- **Pedro**: Cardiopatía isquémica (stent 2022) + EPOC. Reportó dolor torácico breve. Glucosa 156 mg/dL.
- **Carmen**: RTC cadera derecha (feb 2026) + osteoporosis. Suspendió antibiótico por gastritis. Adherencia 72%.
- **José**: Recién jubilado. Primer check-up en 10 años. LDL 145. SAOS leve + hipocondría digital.

### Data de Pacientes

Los perfiles completos de los pacientes (condiciones crónicas, medicamentos, cirugías, hospitalizaciones, antecedentes familiares, estudios, signos vitales y alertas) se definen en `js/pacientes.js`, que es cargado por `index.html`, `doctor.html` y `triage.html`. Este archivo alimenta el **system prompt de LUZ** y el dashboard médico con contexto clínico detallado.

El documento `Historial_pacientes.md` contiene los resúmenes completos para impresión en lonas/carteles.

## Data

| Archivo | Propósito |
|---------|-----------|
| `js/pacientes.js` | Perfiles completos de los 4 pacientes (compartido) |
| `js/gemini-config.js` | API key de Gemini (gitignored) |
| `js/gemini-config.example.js` | Template de configuración |
| `Historial_pacientes.md` | Resúmenes para impresión en lonas |
