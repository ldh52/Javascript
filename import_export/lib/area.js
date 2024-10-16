import { PI } from './calculator.mjs'; // calculator.mjs에서 PI를 임포트

export function circle(radius) {
  return PI * radius * radius; // 원의 면적 계산
}

export function square(side) {
  return side * side; // 정사각형의 면적 계산
}
