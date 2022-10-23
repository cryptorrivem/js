import {
  Metaplex as MetaplexBase,
  MetaplexOptions,
} from '@metaplex-foundation/js-core';
import { Connection } from '@solana/web3.js';
import { auctionHouseModule } from '@metaplex-foundation/js-plugin-auction-house-module';
import { candyMachineModule } from '@metaplex-foundation/js-plugin-candy-machine-module';

export class MetaplexJS {
  static make(connection: Connection, options: MetaplexOptions = {}) {
    const mx = new MetaplexBase(connection, options);
    mx.use(auctionHouseModule());
    mx.use(candyMachineModule());

    return mx;
  }
}
