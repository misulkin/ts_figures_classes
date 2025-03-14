export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100; // округляем до сотых
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    if (radius < 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  private height: number;

  private width: number;

  constructor(color: string, height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
