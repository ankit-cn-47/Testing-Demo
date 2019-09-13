import { getCurrencies } from "./getCurrencies";

describe('Get Currency Types', () => {
    it('should contain 3 currencies', () => {
        const result = getCurrencies();

        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
