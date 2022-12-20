describe('Tests for best buddy app', function () {

    describe('getRandomNumber function', function () {
        it('Happy path: min and max are integers, min is a negative number', function () {
            expect(getRandomNumber(-1, 0)).toEqual(-1);
        });

        it('Happy path: min and max are both equals 0', function () {
            expect(getRandomNumber(0, 0)).toEqual(0);
        });

        it('Happy path: min and max are integers', function () {
            expect(getRandomNumber(0, 1)).toEqual(0);
        });

        it('Edge case: min and max are string - returns NaN', function () {
            expect(getRandomNumber('ttt', 'pp')).toEqual(NaN);
        });

        it('Edge case: one of the arguments is a string, another 0 - returns NaN', function () {
            expect(getRandomNumber('ttt', 0)).toEqual(NaN);
        });
    });
});
