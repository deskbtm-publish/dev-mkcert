import { getDefaultHosts } from './lib/util';
import type { MkcertBaseOptions } from './mkcert/index';
import Mkcert from './mkcert/index';

export { BaseSource, type SourceInfo } from './mkcert/source';

export type MkcertPluginOptions = MkcertBaseOptions & {
  /**
   * The hosts that needs to generate the certificate.
   */
  hosts?: string[];
};

export async function mkcert(options: MkcertPluginOptions = {}) {
  const { hosts = [], ...mkcertOptions } = options;
  const logger = console;
  const mkcert = Mkcert.create({
    logger,
    ...mkcertOptions,
  });

  await mkcert.init();

  const allHosts = [...getDefaultHosts(), ...hosts];
  const uniqueHosts = Array.from(new Set(allHosts)).filter(Boolean);
  const certificate = await mkcert.install(uniqueHosts);
  return {
    key: certificate.key && Buffer.from(certificate.key),
    cert: certificate.cert && Buffer.from(certificate.cert),
  };
}
