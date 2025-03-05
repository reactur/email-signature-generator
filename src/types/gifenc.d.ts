declare module 'gifenc' {
  interface FrameData {
    delay: number;
    data: Uint8Array;
  }

  interface EncodeOptions {
    width: number;
    height: number;
    frames: FrameData[];
  }

  export function encode(options: EncodeOptions): Uint8Array;
} 