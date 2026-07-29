/**
 * Prefixes public/ asset paths with the configured basePath.
 * next/image does not apply basePath to plain src strings, so every
 * <Image src="/images/..."> goes through this helper. When basePath is ""
 * (the custom-domain production build), this is a no-op.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
