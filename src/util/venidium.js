const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Venidium {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const venidium_formatter = (value, unit) => new Venidium(value, unit);

venidium_formatter.convert = convert;
venidium_formatter.setDisplay = units.setDisplay;
venidium_formatter.setUnit = units.setUnit;
venidium_formatter.getUnit = units.getUnit;
venidium_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const ray_to_venidium = (ray) => {
  return venidium_formatter(Number.parseInt(ray), 'ray').to('venidium').value();
};

export const venidium_to_ray = (venidium) => {
  return venidium_formatter(Number.parseFloat(Number(venidium)), 'venidium')
    .to('ray')
    .value();
};

export const ray_to_venidium_string = (ray) => {
  return venidium_formatter(Number(ray), 'ray').to('venidium').toString();
};

export const ray_to_colouredcoin = (ray) => {
  return venidium_formatter(Number.parseInt(ray), 'ray')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_ray = (colouredcoin) => {
  return venidium_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('ray')
    .value();
};

export const ray_to_colouredcoin_string = (ray) => {
  return venidium_formatter(Number(ray), 'ray').to('colouredcoin').toString();
};
