const classifyTriangle = require('../src');

describe('classifyTriangle', () => {
    test('identifies invalid triangles', () => {
        expect(classifyTriangle(0, 1, 1)).toBe('Invalid');
        expect(classifyTriangle(-1, 1, 1)).toBe('Invalid');
    });

    test('identifies non-triangles', () => {
        expect(classifyTriangle(1, 1, 3)).toBe('Not a triangle');
        expect(classifyTriangle(1, 3, 2)).toBe('Not a triangle');
        expect(classifyTriangle(3, 1, 1)).toBe('Not a triangle');
    });

    test('identifies equilateral triangles', () => {
        expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
    });

    test('identifies isosceles triangles', () => {
        expect(classifyTriangle(2, 2, 3)).toBe('Isosceles');
        expect(classifyTriangle(2, 3, 2)).toBe('Isosceles');
        expect(classifyTriangle(3, 2, 2)).toBe('Isosceles');
    });

    test('identifies scalene triangles', () => {
        expect(classifyTriangle(2, 3, 4)).toBe('Scalene');
        expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
    });
});