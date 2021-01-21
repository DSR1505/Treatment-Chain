import * as c from 'crypto';
export default function checkCryptoModuleSupport(): any {
  try {
    const crypto = c;
    return crypto;
  } catch (err) {
    // safe using --strictNullChecks now
    return undefined;
  }
} 
