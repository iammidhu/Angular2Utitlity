import { PercentageRoundOfPipe } from './percentage-round-of.pipe';

describe('Pipe: percent', () => {
    let pipe: PercentageRoundOfPipe;

    beforeEach(() => {
        pipe = new PercentageRoundOfPipe();
    });

    it('providing no value returns fallback', () => {
        expect(pipe.transform(null)).toBe(0);
    });

    it('providing a value returns value', () => {
        expect(pipe.transform(6)).toBe(6);
    });

    it('providing a correct value returns expected output', () => {
        expect(pipe.transform(6.67777)).toBe(6.7);
    });

    // it('providing a string value returns false', () => {
    //     expect(pipe.transform("6.67777")).toBe(0);
    // });
});
