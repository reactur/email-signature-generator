import { useState, useRef } from "react"

export default function HtmlToPngConverter() {
  const [htmlInput, setHtmlInput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleConvertAndDownload = async () => {
    try {
      setError(null)

      if (!previewRef.current) {
        throw new Error("Preview element not found")
      }

      // Dynamically import html2canvas to reduce bundle size
      const html2canvas = (await import("html2canvas")).default

      // Convert the HTML to PNG with specific settings
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null, // Transparent background
        scale: 2, // Higher scale for better quality
        logging: false,
        useCORS: true,
        width: previewRef.current.scrollWidth,
        height: previewRef.current.scrollHeight,
      })

      // Create download link
      const pngDataUrl = canvas.toDataURL("image/png")
      const downloadLink = document.createElement("a")
      downloadLink.href = pngDataUrl
      downloadLink.download = "code-snippet.png"
      downloadLink.click()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to convert HTML to PNG")
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">HTML to PNG Converter</h2>
            <p className="text-sm text-gray-500">Paste your HTML code below to convert it to a PNG image</p>
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

          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={handleConvertAndDownload}
              disabled={!htmlInput}
              className="inline-flex items-center px-4 py-2 border border-transparent 
                       text-sm font-medium rounded-md text-white bg-blue-600 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 
                       disabled:cursor-not-allowed disabled:hover:bg-blue-600
                       transition-colors duration-200"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PNG
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">Error: {error}</div>}

          {/* Preview */}
          {htmlInput && (
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="text-sm text-gray-500 mb-2 flex items-center">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

