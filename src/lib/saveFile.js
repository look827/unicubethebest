import fs from 'fs';
import path from 'path';

export function getDataDir() {
  // Use /tmp on serverless (Vercel, Lambda), local path otherwise
  if (process.env.VERCEL) {
    return '/tmp/data';
  } else {
    return path.join(process.cwd(), 'src/lib/data');
  }
}

export function ensureDataDirExists() {
  const dataDir = getDataDir();
  fs.mkdirSync(dataDir, { recursive: true });
  return dataDir;
}

export function saveFile(filename, content) {
  const dataDir = ensureDataDirExists();
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, content);
  return filePath;
}
