import { greet } from "./greet";

describe('Greet Component', () => {
    it('should greet Akash', () => {
        const result = greet('Akash');
        expect(result).toContain('Akash');
    });
});