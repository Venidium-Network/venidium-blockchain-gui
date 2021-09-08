const units = require('../../util/units');

describe('units', () => {
  describe('#getUnit', () => {
    it('gets unit of venidium', () => {
      const result = units.getUnit('venidium');

      expect(result).toBe(1);
    });
    it('gets unit of ray', () => {
      const result = units.getUnit('ray');

      expect(result).toBe(1e-12);
    });
    it('gets unit of coloured coin', () => {
      const result = units.getUnit('colouredcoin');

      expect(result).toBe(1e-9);
    });
    it('supports uppercase characters', () => {
      const result = units.getUnit('VENIDIUM');

      expect(result).toBe(1);
    });
    it('gets unit of venidium using alias', () => {
      const result = units.getUnit('xvm');

      expect(result).toBe(1);
    });
    it('gets unit of ray using alias', () => {
      const result = units.getUnit('r');

      expect(result).toBe(1e-12);
    });
    it('gets unit of coloured coin using alias', () => {
      const result = units.getUnit('cc');

      expect(result).toBe(1e-9);
    });
    it('throws an error if unit is not supported', () => {
      try {
        units.getUnit('bitcoin');
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe('#getDisplay', () => {
    it('gets display of venidium', () => {
      const result = units.getDisplay('venidium');

      expect(result).toEqual({
        format: '{amount} XVM',
        fractionDigits: 12,
      });
    });
    it('gets display of ray', () => {
      const result = units.getDisplay('ray');

      expect(result).toEqual({
        format: '{amount} R',
        fractionDigits: 0,
      });
    });
    it('gets display of coloured coin', () => {
      const result = units.getDisplay('colouredcoin');

      expect(result).toEqual({
        format: '{amount} CC',
        fractionDigits: 3,
      });
    });
    it('throws an error if unit is not supported', () => {
      try {
        units.getDisplay('bitcoin');
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe('#setUnit', () => {
    it('adds a new unit', () => {
      units.setUnit('bitcoin', 1);

      const result = units.getUnit('bitcoin');

      expect(result).toEqual(1);
    });
    it('modifies an existing unit', () => {
      units.setUnit('venidium', 9);

      const result = units.getUnit('venidium');

      expect(result).toEqual(9);

      units.setUnit('venidium', 1);
    });
  });
  describe('#setDisplay', () => {
    it('sets a new display', () => {
      units.setDisplay('bitcoin', {
        format: '{amount} BTC',
        fractionDigits: 0,
      });

      const result = units.getDisplay('bitcoin');

      expect(result).toEqual({
        format: '{amount} BTC',
        fractionDigits: 0,
      });
    });
    it('updates an existing display', () => {
      units.setDisplay('venidium', {
        format: '{amount} TXVM',
        fractionDigits: 0,
      });

      const result = units.getDisplay('venidium');

      expect(result).toEqual({
        format: '{amount} TXVM',
        fractionDigits: 0,
      });
    });
  });
});
