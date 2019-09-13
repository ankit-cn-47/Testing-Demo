import { add } from "./level1";

describe('Sample test', () => {
    it('should return sum of the number', () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });
});
