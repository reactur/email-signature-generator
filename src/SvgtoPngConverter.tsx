import React, { useRef, useState } from "react";

const SvgToPngConverter: React.FC = () => {
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);
  const [pngUrl, setPngUrl] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleSvgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgContent(e.target?.result as string);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid SVG file.");
    }
    setSvgContent("");
  };

  const handleSvgPaste = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const pastedContent = event.target.value;
    if (pastedContent.includes("<svg")) {
      setSvgContent(pastedContent);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } else {
      alert("Please paste valid SVG content.");
    }
  };

  const convertSvgToPng = () => {
    if (!svgContent) {
      alert("Please provide SVG content.");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const scale = 2; 
    canvas.width = width * scale;
    canvas.height = height * scale;

    const img = new Image();
    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgContent)}`;
    img.src = svgBase64;

    img.onload = () => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      const png = canvas.toDataURL("image/png", 1.0);
      setPngUrl(png);
    };

    img.onerror = () => alert("Failed to load SVG content.");
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-gray-800">SVG to PNG Converter</h1>
      
      <div className="space-y-6 mt-6">
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Upload SVG File</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/svg+xml"
            onChange={handleSvgUpload}
            className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-violet-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Paste SVG Code</label>
          <textarea
            rows={5}
            value={svgContent.includes("<svg") ? svgContent : ""}
            onChange={handleSvgPaste}
            placeholder="Paste your SVG content here..."
            className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-violet-200"
          />
        </div>

        {svgContent && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">SVG Preview:</h2>
            <div
              dangerouslySetInnerHTML={{ __html: svgContent }}
              className="border rounded-lg p-4 bg-gray-50 overflow-auto max-h-64"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              placeholder="Width"
              className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-violet-200"
            />
            <span className="text-gray-700">x</span>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              placeholder="Height"
              className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-violet-200"
            />
          </div>
          <button
            onClick={convertSvgToPng}
            disabled={!svgContent}
            className="px-5 py-2 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:bg-gray-300"
          >
            Convert to PNG
          </button>
        </div>
      </div>

   
      <canvas ref={canvasRef} className="hidden" />

      {pngUrl && (
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Generated PNG:</h2>
          <img
            src={pngUrl}
            alt="Converted PNG"
            className="border rounded-lg max-w-full"
          />
          <a
            href={pngUrl}
            download="converted-image.png"
            className="block text-center px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
          >
            Download PNG
          </a>
        </div>
      )}
    </div>
  );
};

export default SvgToPngConverter;
