/**
 * Samples the four corners of an image to get the average background color.
 * Corners are the most reliable place to find the background in logos/screenshots.
 */
export function extractCornerColor(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 100;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve('#000');
        ctx.drawImage(img, 0, 0, size, size);

        const sample = (x: number, y: number) =>
          ctx.getImageData(x, y, 1, 1).data;
        const pts = [
          sample(0, 0),
          sample(size - 1, 0),
          sample(0, size - 1),
          sample(size - 1, size - 1),
        ];

        const r = Math.round(pts.reduce((a, c) => a + c[0], 0) / 4);
        const g = Math.round(pts.reduce((a, c) => a + c[1], 0) / 4);
        const b = Math.round(pts.reduce((a, c) => a + c[2], 0) / 4);

        resolve(`rgb(${r},${g},${b})`);
      } catch {
        resolve('#000');
      }
    };
    img.onerror = () => resolve('#000');
    img.src = src;
  });
}
