import GIF from "gif.js"
import html2canvas from "html2canvas"

export async function createGifFromHtml(element: HTMLElement, frameCount = 10, frameDelay = 100): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const gif = new GIF({
        workers: 2,
        quality: 10,
        width: element.offsetWidth,
        height: element.offsetHeight,
        workerScript: "/gif.worker.js", 
      })

      // Create frames
      for (let i = 0; i < frameCount; i++) {
        const canvas = await html2canvas(element, {
          backgroundColor: null,
          scale: 2,
          logging: false,
          useCORS: true,
          width: element.scrollWidth,
          height: element.scrollHeight,
        })

        gif.addFrame(canvas, { delay: frameDelay })
      }

      gif.on("finished", (blob: Blob) => {
        resolve(URL.createObjectURL(blob))
      })

      gif.render()
    } catch (error) {
      reject(error)
    }
  })
}

