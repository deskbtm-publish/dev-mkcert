import os from 'os';
import path from 'path';

export const PKG_NAME = 'publishjs-mkcert';

export const PLUGIN_NAME = PKG_NAME.replace(/-/g, ':');

export const PLUGIN_DATA_DIR = path.join(os.homedir(), `.${PKG_NAME}`);
