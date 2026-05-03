import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoriaReciclaje {
  nombre: string;
  emoji: string;
  color: string;
  puede: string[];
  noPuede: string[];
  tips: string[];
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  categoriaActiva: number = 0;

  categorias: CategoriaReciclaje[] = [
    {
      nombre: 'Papel y Cartón',
      emoji: '📦',
      color: '#60a5fa',
      puede: [
        'Diarios, revistas, folletos',
        'Papel de impresora y cuadernos',
        'Cajas de cartón dobladas',
        'Bolsas de papel',
        'Libros y papel kraft',
        'Cajas de cereal y similares'
      ],
      noPuede: [
        'Papel húmedo o sucio',
        'Papel de aluminio',
        'Papel carbónico o fax',
        'Pañales ni toallas femeninas',
        'Papel encerado o plastificado'
      ],
      tips: [
        'Aplastá las cajas de cartón antes de depositarlas',
        'Retirá ganchos, clips y espirales metálicas',
        'El papel puede estar arrugado, está bien'
      ]
    },
    {
      nombre: 'Plásticos',
      emoji: '🧴',
      color: '#f59e0b',
      puede: [
        'Botellas de bebidas (PET)',
        'Envases de productos de limpieza',
        'Botellas de shampoo y cosméticos',
        'Envases de yogurt y lácteos',
        'Bolsas de polietileno limpias',
        'Tapas y corchos plásticos'
      ],
      noPuede: [
        'Envases con residuos de comida sin limpiar',
        'Film stretch o nylon muy sucio',
        'Plásticos quemados o pintados',
        'Juguetes o ropa de plástico',
        'Sorbetes ni cubiertos de un solo uso sucios'
      ],
      tips: [
        'Enjuagá los envases antes de depositar',
        'Aplastá las botellas para ahorrar espacio',
        'Las tapas pueden ir juntas con los envases'
      ]
    },
    {
      nombre: 'Vidrio',
      emoji: '🫙',
      color: '#34d399',
      puede: [
        'Botellas de vidrio de bebidas',
        'Frascos de conservas y alimentos',
        'Frascos de cosméticos y perfumes',
        'Botellas de aceite y vinagre',
        'Tarros de vidrio de cualquier tipo'
      ],
      noPuede: [
        'Vidrios de ventana o espejo',
        'Vidrio templado o pyrex',
        'Lámparas o tubos fluorescentes',
        'Cristalería fina (copas, cerámica)',
        'Vidrio con plomo'
      ],
      tips: [
        'Enjuagá los frascos y botellas',
        'No rompas el vidrio antes de depositar',
        'Retirá las tapas metálicas si es posible'
      ]
    },
    {
      nombre: 'Metales',
      emoji: '🔩',
      color: '#a78bfa',
      puede: [
        'Latas de aluminio (gaseosas, cervezas)',
        'Latas de conservas de alimentos',
        'Aerosoles vacíos y sin presión',
        'Papel aluminio limpio',
        'Tapas metálicas de frascos',
        'Herramientas pequeñas de metal'
      ],
      noPuede: [
        'Aerosoles con contenido',
        'Latas con pintura o solventes',
        'Metales con residuos peligrosos',
        'Pilas y baterías (van a punto especial)',
        'Materiales de construcción'
      ],
      tips: [
        'Aplastá las latas de aluminio para reducir volumen',
        'Asegurate de que los aerosoles estén completamente vacíos',
        'Limpiá las latas de conservas por dentro'
      ]
    },
    {
      nombre: 'Electrónicos',
      emoji: '📱',
      color: '#f97316',
      puede: [
        'Celulares y tablets',
        'Computadoras y notebooks',
        'Televisores',
        'Electrodomésticos pequeños',
        'Cables y cargadores',
        'Periféricos (mouse, teclado)'
      ],
      noPuede: [
        'Electrónicos que aún funcionan bien (donalos)',
        'Aparatos con materiales peligrosos sin declarar'
      ],
      tips: [
        'Eliminá tus datos personales antes de entregar',
        'Solo LUSA y el Centro de Transferencia aceptan electrónicos',
        'Los electrónicos contienen materiales valiosos: ¡no los tires!'
      ]
    },
    {
      nombre: 'Ropa y Textiles',
      emoji: '👕',
      color: '#ec4899',
      puede: [
        'Ropa en buen estado para donar',
        'Telas y textiles limpios',
        'Calzado en condiciones',
        'Bolsos y accesorios de tela',
        'Ropa de cama y toallas'
      ],
      noPuede: [
        'Ropa extremadamente deteriorada o mojada',
        'Ropa interior muy usada',
        'Tejidos con moho o en mal estado sanitario'
      ],
      tips: [
        'La ropa limpia y doblada ayuda a los recuperadores',
        'Solo LUSA acepta ropa y textiles en Corrientes',
        'Si está en buen estado, considerá donarla directamente'
      ]
    }
  ];

  seleccionarCategoria(index: number) {
    this.categoriaActiva = index;
  }
}
