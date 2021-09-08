const venidium = require('../../util/venidium');

describe('venidium', () => {
  it('converts number ray to venidium', () => {
    const result = venidium.ray_to_venidium(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string ray to venidium', () => {
    const result = venidium.ray_to_venidium('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number ray to venidium string', () => {
    const result = venidium.ray_to_venidium_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string ray to venidium string', () => {
    const result = venidium.ray_to_venidium_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number venidium to ray', () => {
    const result = venidium.venidium_to_ray(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string venidium to ray', () => {
    const result = venidium.venidium_to_ray('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number ray to colouredcoin', () => {
    const result = venidium.ray_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string ray to colouredcoin', () => {
    const result = venidium.ray_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number ray to colouredcoin string', () => {
    const result = venidium.ray_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string ray to colouredcoin string', () => {
    const result = venidium.ray_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to ray', () => {
    const result = venidium.colouredcoin_to_ray(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to ray', () => {
    const result = venidium.colouredcoin_to_ray('1000');

    expect(result).toBe(1000000);
  });
});
