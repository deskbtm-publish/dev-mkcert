/// <reference types="node" />
import type { MkcertBaseOptions } from './mkcert/index';
export { BaseSource, type SourceInfo } from './mkcert/source';
export type MkcertPluginOptions = MkcertBaseOptions & {
    /**
     * The hosts that needs to generate the certificate.
     */
    hosts?: string[];
};
export declare function mkcert(options?: MkcertPluginOptions): Promise<{
    key: Buffer;
    cert: Buffer;
}>;
