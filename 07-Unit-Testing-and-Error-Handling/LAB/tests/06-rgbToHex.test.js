const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHex')

describe('Converts RGB to Hex Color', () => {

    describe('Happy path', () => {
        it('converts while to hex', () => {
            expect(rgbToHexColor(0, 0, 0, 0)).to.equal('#000000');
        });

        it('converts black to hex', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('converts SoftUni darkblue to hex', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('Invalid parameters', () => {
        it('converts while to invalid hex color', () => {
            expect(rgbToHexColor(12, 52, 36)).to.equal('#0C3424');
        });

        it('returns undefined with missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined
        });

        it('returns undefined for values out of range < 0', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });

        it('returns undefined for values out of range > 255', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });

        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        });

        it('returns undefined with wrong blue parameter type', () => {
            expect(rgbToHexColor(12, 52, 'a')).to.be.undefined;
        });

        it('returns undefined with wrong green parameter type', () => {
            expect(rgbToHexColor(12, 'a', 6)).to.be.undefined;
        });

        it('returns undefined with wrong red parameter type', () => {
            expect(rgbToHexColor('a', 52, 6)).to.be.undefined;
        });

        it('returns undefined with negative blue parameter', () => {
            expect(rgbToHexColor(12, 52, -1)).to.be.undefined;
        });

        it('returns undefined with negative green parameter', () => {
            expect(rgbToHexColor(12, -1, 0)).to.be.undefined;
        });

        it('returns undefined with negative red parameter', () => {
            expect(rgbToHexColor(-1, 52, 9)).to.be.undefined;
        });

        it('returns undefined with red parameter > 255', () => {
            expect(rgbToHexColor(256, 52, 9)).to.be.undefined;
        });

        it('returns undefined with green parameter > 255', () => {
            expect(rgbToHexColor(255, 256, 9)).to.be.undefined;
        });

        it('returns undefined with blue parameter > 255', () => {
            expect(rgbToHexColor(250, 52, 256)).to.be.undefined;
        });
    });
})
