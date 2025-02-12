import html2canvas from "html2canvas"

export async function convertHtmlToPng(element: HTMLElement): Promise<string> {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: "#ffffff",
      scale: 2, // Higher scale for better quality
      logging: false,
      useCORS: true,
    })

    return canvas.toDataURL("image/png")
  } catch (error) {
    console.error("Error converting HTML to PNG:", error)
    throw error
  }
}

