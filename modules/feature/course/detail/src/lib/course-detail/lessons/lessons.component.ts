import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'treinamento-ergon-lessons',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
  ],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss',
})
export class LessonsComponent {
  panelOpenState = false;
  lessonSelected?: Lesson;

  typeItens = [
    {
      name: 'Introdução',
      id: '1',
      type: 'task',
      aulas: [
        {
          name: 'Bem-vindo',
          id: '1',
          min: '2:00',
        },
        {
          name: 'Introdução',
          id: '2',
          min: '1:30',
        },
      ],
    },
    {
      name: 'Frequência',
      id: '2',
      type: 'task',
      aulas: [
        {
          name: 'Bem-vindo',
          id: '1',
          min: '2:00',
        },
        {
          name: 'Introdução',
          id: '2',
          min: '1:30',
        },
      ],
    },
    {
      name: 'Conteúdo',
      id: '3',
      type: 'task',
      aulas: [
        {
          name: 'Bem-vindo',
          id: '1',
          min: '3:25',
        },
        {
          name: 'Introdução',
          id: '2',
          min: '1:30',
        },
      ],
    },
  ];

  openVideo(aula: Lesson) {
    this.lessonSelected = aula;
  }
}

export interface Root {
  name: string;
  id: string;
  type: string;
  aulas: Lesson[];
}

export interface Lesson {
  name: string;
  id: string;
  min: string;
}
