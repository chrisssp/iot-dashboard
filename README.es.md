<h1 align="center">Dashboard IoT — Monitoreo y Control Centralizado de Dispositivos IoT</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Licencia-GPL_v3-0298c3?logo=gnu&logoColor=white" alt="GPL v3">
  <img src="https://img.shields.io/badge/Estado-Active-2ea44f" alt="Active">
</p>

<p align="center">
  <em>Dashboard web unificado para monitorear sensores y controlar actuadores en tiempo real.</em>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## Acerca del Dashboard IoT

Un dashboard web integral que reúne todos los componentes IoT en una sola interfaz. Monitorea lecturas de sensores ultrasónicos, PIR, DHT11, fotoresistencia y potenciómetro, mientras controla LEDs, LED RGB, servomotor y buzzer.

## Funcionalidades

- Control individual de LEDs (Rojo, Verde, Azul, Amarillo)
- Mezcla de colores LED RGB con sliders por canal
- Control de posición del servomotor (0–180°)
- Medición de distancia ultrasónica en tiempo real
- Indicador de detección de movimiento PIR
- Visualización de temperatura y humedad DHT11
- Monitoreo de nivel de luz con fotoresistencia
- Control de buzzer y potenciómetro

## Inicio rápido

### Requisitos previos

- Node.js 18+
- Angular CLI 17+
- Microcontrolador compatible con Arduino con componentes conectados

### Instalación

```bash
git clone https://github.com/chrisssp/iot-dashboard.git
cd iot-dashboard
npm install
ng serve
```

La aplicación corre en `http://localhost:4200`.

## Contribuciones

Lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las convenciones de ramas, commits y PRs.

## Licencia

Este proyecto está bajo la licencia GPL v3 — ver [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  <sub>Hecho con ❤️ · 2026</sub>
</p>
