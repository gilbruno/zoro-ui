import { PolygonChainId } from 'types';

export const BLOCK_TIME_MS = 3000;
// 20 blocks a minute, 60 minutes an hour, 24 hours a day
export const BLOCKS_PER_DAY = (60 / (BLOCK_TIME_MS / 1000)) * 60 * 24;
export const SECONDS_PER_DAY = 86400;

export const POLYGON_SCAN_URLS = {
  [PolygonChainId.MAINNET]: 'https://polygonscan.com/',
  [PolygonChainId.TESTNET]: 'https://amoy.polygonscan.com/',
};
