import { useState, useRef } from "react"
import { createGifFromHtml } from "../utils/gif-converter"

export default function HtmlToGifConverter() {
  const [htmlInput, setHtmlInput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [frameCount, setFrameCount] = useState(10)
  const [frameDelay, setFrameDelay] = useState(100)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleCreateGif = async () => {
    try {
      setError(null)
      setIsGenerating(true)

      if (!previewRef.current) {
        throw new Error("Preview element not found")
      }

      const gifUrl = await createGifFromHtml(previewRef.current, frameCount, frameDelay)

      // Create download link
      const downloadLink = document.createElement("a")
      downloadLink.href = gifUrl
      downloadLink.download = "animation.gif"
      downloadLink.click()

      // Clean up the object URL
      URL.revokeObjectURL(gifUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to convert HTML to GIF")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">HTML to GIF Converter</h2>
            <p className="text-sm text-gray-500">Paste your HTML code below to convert it to an animated GIF</p>
          </div>

          {/* Textarea */}
          <textarea
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Enter your HTML code here..."
            className="w-full min-h-[150px] p-3 text-sm font-mono border 
                     border-gray-300 rounded-md focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     placeholder-gray-400 resize-y"
          />

          {/* Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Frame Count</label>
              <input
                type="number"
                value={frameCount}
                onChange={(e) => setFrameCount(Number(e.target.value))}
                min="1"
                max="50"
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Frame Delay (ms)</label>
              <input
                type="number"
                value={frameDelay}
                onChange={(e) => setFrameDelay(Number(e.target.value))}
                min="50"
                max="1000"
                step="50"
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={handleCreateGif}
              disabled={!htmlInput || isGenerating}
              className="inline-flex items-center px-4 py-2 border border-transparent 
                       text-sm font-medium rounded-md text-white bg-blue-600 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 
                       disabled:cursor-not-allowed disabled:hover:bg-blue-600
                       transition-colors duration-200"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Create GIF
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">Error: {error}</div>}

          {/* Preview */}
          {htmlInput && (
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-gray-500 mb-2 flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Preview
              </div>
              <div ref={previewRef} className="inline-block" dangerouslySetInnerHTML={{ __html: htmlInput }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

