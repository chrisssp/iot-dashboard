import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponenteService } from '../services/componente/componente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: any | null;

  constructor(public componenteService: ComponenteService) {
   }
  // Incremento del slider del ultrasónico
  ngOnInit(): void {
    const slider = document.getElementById("ultrasonic-slider") as HTMLInputElement;
    const sliderValue = document.getElementById("ultrasonic-value") as HTMLParagraphElement;
    const potentiometerSlider = document.getElementById("potentiometer-slider") as HTMLInputElement;
    const potentiometerValue = document.getElementById("potentiometer-value") as HTMLParagraphElement;
    const servomotorSlider = document.getElementById("servomotor-slider") as HTMLInputElement;
    const servomotorValue = document.getElementById("servomotor-value") as HTMLParagraphElement;
    const temperatureSlider = document.getElementById("temperature-slider") as HTMLInputElement;
    const temperatureValue = document.getElementById("temperature-value") as HTMLParagraphElement;
    const humiditySlider = document.getElementById("humidity-slider") as HTMLInputElement;
    const humidityValue = document.getElementById("humidity-value") as HTMLParagraphElement;

    slider.addEventListener("input", () => {
      sliderValue.innerText = slider.value;
    });

    potentiometerSlider.addEventListener("input", () => {
      potentiometerValue.innerText = potentiometerSlider.value;
    });

    servomotorSlider.addEventListener("input", () => {
      servomotorValue.innerText = servomotorSlider.value;
    });

    temperatureSlider.addEventListener("input", () => {
      temperatureValue.innerText = temperatureSlider.value;
    });

    humiditySlider.addEventListener("input", () => {
      humidityValue.innerText = humiditySlider.value;
    });
  }
}
