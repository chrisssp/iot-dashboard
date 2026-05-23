<h1 align="center">IoT Dashboard — Centralized Monitoring and Control for IoT Devices</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-GPL_v3-0298c3?logo=gnu&logoColor=white" alt="GPL v3">
  <img src="https://img.shields.io/badge/Status-Active-2ea44f" alt="Active">
</p>

<p align="center">
  <em>Unified web dashboard for monitoring sensors and controlling actuators in real time.</em>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## About IoT Dashboard

A comprehensive web dashboard that brings together all IoT components into a single interface. Monitor sensor readings from ultrasonic, PIR, DHT11, photoresistor, and potentiometer inputs, while controlling LEDs, RGB LED, servo motor, and buzzer outputs.

## Features

- Individual LED control (Red, Green, Blue, Yellow)
- RGB LED color mixing with per-channel sliders
- Servo motor position control (0–180°)
- Real-time ultrasonic distance measurement
- PIR motion detection indicator
- DHT11 temperature and humidity display
- Photoresistor light level monitoring
- Buzzer and potentiometer controls

## Quick Start

### Prerequisites

- Node.js 18+
- Angular CLI 17+
- Arduino-compatible microcontroller with connected components

### Setup

```bash
git clone https://github.com/chrisssp/iot-dashboard.git
cd iot-dashboard
npm install
ng serve
```

The application runs on `http://localhost:4200`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, commit conventions, and PR workflow.

## License

This project is licensed under the GPL v3 — see the [LICENSE](LICENSE) file for details.