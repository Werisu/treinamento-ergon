import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    if (quantity === 0) return `não há vagas`;
    if (quantity === 1) return `última vaga disponível`;
    return `${quantity} vagas`;
  }
}
