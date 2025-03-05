declare module 'dom-to-image' {
  interface Options {
    quality?: number;
    scale?: number;
    style?: {
      transform?: string;
      [key: string]: string | undefined;
    };
  }

  export function toPng(node: HTMLElement, options?: Options): Promise<string>;
  export function toJpeg(node: HTMLElement, options?: Options): Promise<string>;
  export function toBlob(node: HTMLElement, options?: Options): Promise<Blob>;
  export function toPixelData(node: HTMLElement, options?: Options): Promise<Uint8Array>;
} 