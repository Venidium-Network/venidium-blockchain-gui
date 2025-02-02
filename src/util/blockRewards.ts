import Big from 'big.js';

const RAY_PER_VENIDIUM = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return Big(0);
  }
  if (height < 1 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(640).times(7 / 8);
  }
  if (height < 2 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(320).times(7 / 8);
  }
  if (height < 3 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(160).times(7 / 8);
  }
  if (height < 4 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(80).times(7 / 8);
  }

  return RAY_PER_VENIDIUM.times(0.01).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return Big(0);
  }
  if (height < 1 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(640).times(1 / 8);
  }
  if (height < 2 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(320).times(1 / 8);
  }
  if (height < 3 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(160).times(1 / 8);
  }
  if (height < 4 * (BLOCKS_PER_YEAR/4)) {
    return RAY_PER_VENIDIUM.times(80).times(1 / 8);
  }

  return RAY_PER_VENIDIUM.times(0.01).times(1 / 8);
}
