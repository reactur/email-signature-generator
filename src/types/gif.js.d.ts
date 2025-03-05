declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
  }

  interface GIFFrameOptions {
    delay?: number;
  }

  class GIF {
    constructor(options: GIFOptions);
    addFrame(imageElement: HTMLImageElement | HTMLCanvasElement, options?: GIFFrameOptions): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }

  export default GIF;
} 