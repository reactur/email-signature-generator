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
    <div className="p-6 space-y-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center">SVG to PNG Converter</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">Upload SVG File</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/svg+xml"
            onChange={handleSvgUpload}
            className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Paste SVG Code</label>
          <textarea
            rows={6}
            value={svgContent.includes("<svg") ? svgContent : ""}
            onChange={handleSvgPaste}
            placeholder="Paste your SVG content here..."
            className="block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>
        {svgContent && (
          <div>
            <h2 className="text-lg font-semibold">SVG Preview:</h2>
            <div
              dangerouslySetInnerHTML={{ __html: svgContent }}
              className="border rounded-lg p-4 bg-white overflow-auto max-h-64"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            placeholder="Width"
            className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="Height"
            className="w-20 px-2 py-1 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          onClick={convertSvgToPng}
          disabled={!svgContent}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:ring focus:ring-blue-200"
        >
          Convert to PNG
        </button>
      </div>
      <canvas ref={canvasRef} className="hidden" />
      {pngUrl && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Generated PNG:</h2>
          <img
            src={pngUrl}
            alt="Converted PNG"
            className="border rounded-lg max-w-full"
          />
          <a
            href={pngUrl}
            download="converted-image.png"
            className="block text-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-green-700"
          >
            Download PNG
          </a>
        </div>
      )}
    </div>
  );
};

export default SvgToPngConverter;
