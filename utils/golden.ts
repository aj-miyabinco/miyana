export const PHI = 1.618;
export const spacingScale = [4, 6, 10, 16, 26, 42, 68, 110];

export const goldenTextSizes = {
  h1: 48,
  h2: Math.round(48 / PHI),
  h3: Math.round(48 / (PHI * PHI)),
  body: 16,
  detail: Math.round(16 / PHI)
};

export const goldenAspect = (width = 1) => ({ width, height: width * PHI });
