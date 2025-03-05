interface GIFFrame {
    data: Uint8Array
    delay: number
  }
  
  interface GIFOptions {
    width: number
    height: number
    frames: GIFFrame[]
    quality?: number
    repeat?: number
  }
  
  export function encodeGIF({ width, height, frames, quality = 10, repeat = 0 }: GIFOptions): Uint8Array {
    // Header
    const parts: number[] = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61] // GIF89a
  
    // Logical Screen Descriptor
    const lsd = new Uint8Array(7)
    lsd[0] = width & 0xff
    lsd[1] = (width >> 8) & 0xff
    lsd[2] = height & 0xff
    lsd[3] = (height >> 8) & 0xff
    lsd[4] = 0xf7 // Global Color Table Flag
    lsd[5] = 0 // Background Color Index
    lsd[6] = 0 // Pixel Aspect Ratio
    parts.push(...Array.from(lsd))
  
    // Application Extension
    parts.push(
      0x21, // Extension Introducer
      0xff, // Application Extension Label
      0x0b, // Block Size
      ...Array.from(new TextEncoder().encode("NETSCAPE2.0")), // Application Identifier
      0x03, // Block Size
      0x01, // Sub-block Index
      repeat & 0xff, // Loop Count (0 = infinite)
      (repeat >> 8) & 0xff,
      0x00, // Block Terminator
    )
  
    // Add frames
    frames.forEach(({ data, delay }) => {
      // Graphic Control Extension
      parts.push(
        0x21, // Extension Introducer
        0xf9, // Graphic Control Label
        0x04, // Block Size
        0x00, // Packed Field
        delay & 0xff, // Delay Time (LSB)
        (delay >> 8) & 0xff, // Delay Time (MSB)
        0x00, // Transparent Color Index
        0x00, // Block Terminator
      )
  
      // Image Descriptor
      parts.push(
        0x2c, // Image Separator
        0x00,
        0x00,
        0x00,
        0x00, // Image Left, Top
        width & 0xff,
        (width >> 8) & 0xff, // Image Width
        height & 0xff,
        (height >> 8) & 0xff, // Image Height
        0x00, // Packed Field
      )
  
      // Image Data
      parts.push(...Array.from(data))
    })
  
    // Trailer
    parts.push(0x3b)
  
    return new Uint8Array(parts)
  }
  
  