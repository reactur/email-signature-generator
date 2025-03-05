import { useState, useRef } from "react"
import GIF from "gif.js"

export default function AnimationGifConverter() {
  const [htmlInput, setHtmlInput] = useState(`
<div style="width: 100px; height: 100px; background: linear-gradient(45deg, #ff0000, #00ff00); animation: spin 2s linear infinite;">
  <style>
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  </style>
</div>
  `)
  const [duration, setDuration] = useState(2)
  const [isGenerating, setIsGenerating] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const captureFrame = (element: HTMLElement): Promise<HTMLCanvasElement> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      canvas.width = element.offsetWidth * 2 // Increase resolution
      canvas.height = element.offsetHeight * 2 // Increase resolution
      const ctx = canvas.getContext("2d")!

      // Convert the element to an SVG string
      const data = `<svg xmlns="http://www.w3.org/2000/svg" width="${element.offsetWidth * 2}" height="${element.offsetHeight * 2}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${element.outerHTML}
          </div>
        </foreignObject>
      </svg>`

      // Create a Blob from the SVG string
      const blob = new Blob([data], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)

      // Draw the SVG to canvas
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        URL.revokeObjectURL(url)
        resolve(canvas)
      }
      img.src = url
    })
  }

  const generateGif = async () => {
    if (!previewRef.current) return
    setIsGenerating(true)

    try {
      const element = previewRef.current
      const fps = 30
      const totalFrames = Math.floor(duration * fps)
      const frameDelay = 1000 / fps

      // Initialize GIF encoder
      const gif = new GIF({
        workers: 2,
        quality: 10,
        width: element.offsetWidth * 2,
        height: element.offsetHeight * 2,
        workerScript: "/gif.worker.js",
      })

      // Function to capture frames using requestAnimationFrame
      const frames: HTMLCanvasElement[] = []
      let frameCount = 0

      const captureFrames = async () => {
        if (frameCount >= totalFrames) {
          // Add all frames to GIF
          frames.forEach((canvas) => {
            gif.addFrame(canvas, { delay: frameDelay, copy: true })
          })

          // Generate and download GIF
          gif.on("finished", (blob: Blob) => {
            const url = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = "animation.gif"
            link.click()
            URL.revokeObjectURL(url)
            setIsGenerating(false)
          })

          gif.render()
          return
        }

        const canvas = await captureFrame(element)
        frames.push(canvas)
        frameCount++

        // Wait for next frame
        await new Promise((resolve) => setTimeout(resolve, frameDelay))
        requestAnimationFrame(captureFrames)
      }

      requestAnimationFrame(captureFrames)
    } catch (error) {
      console.error("Error generating GIF:", error)
      setIsGenerating(false)
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Code Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">HTML/CSS Animation Code</label>
        <textarea
          value={htmlInput}
          onChange={(e) => setHtmlInput(e.target.value)}
          className="w-full h-48 p-3 text-sm font-mono border rounded-lg shadow-sm
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your HTML/CSS animation code here..."
        />
      </div>

      {/* Duration Control */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Duration:</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Math.max(0.1, Number(e.target.value)))}
          min="0.1"
          max="10"
          step="0.1"
          className="w-20 px-2 py-1 text-sm border rounded shadow-sm
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="text-sm text-gray-500">seconds</span>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateGif}
        disabled={isGenerating}
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 
                 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generating GIF...
          </span>
        ) : (
          "Create GIF"
        )}
      </button>

      {/* Preview */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Preview</label>
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <div ref={previewRef} className="inline-block" dangerouslySetInnerHTML={{ __html: htmlInput }} />
        </div>
      </div>
    </div>
  )
}

