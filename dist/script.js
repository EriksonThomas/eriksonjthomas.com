// A topographic illustration: each contour is a closed, gently irregular loop.
const contours = document.querySelector('#contour-lines');
if (contours) {
  for (let ring = 0; ring < 27; ring++) {
    const radius = 20 + ring * 9.5;
    const points = [];
    for (let step = 0; step <= 180; step++) {
      const theta = step / 180 * Math.PI * 2;
      const shape = 1 + .13 * Math.sin(3 * theta + ring * .025) + .065 * Math.cos(5 * theta - .7) + .035 * Math.sin(7 * theta);
      const x = 301 + Math.cos(theta) * radius * shape * .91 + ring * 1.15;
      const y = 274 + Math.sin(theta) * radius * shape * .81;
      const rotatedX = 301 + (x - 301) * .82 - (y - 274) * .57;
      const rotatedY = 274 + (x - 301) * .57 + (y - 274) * .82;
      points.push(`${step === 0 ? 'M' : 'L'}${rotatedX.toFixed(2)} ${rotatedY.toFixed(2)}`);
    }
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `${points.join(' ')}Z`);
    contours.append(path);
  }
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
let copyTimer;
copyButton.addEventListener('click', async () => {
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText('eriksonjthomas@gmail.com');
    copyButton.textContent = 'Email copied ✓';
    copyStatus.textContent = 'Email address copied to clipboard.';
  } catch {
    copyButton.textContent = 'Select the email to copy';
    copyStatus.textContent = 'Could not access clipboard. Select and copy the email address, or use the email link.';
  }
  copyTimer = setTimeout(() => { copyButton.textContent = 'Copy email ⧉'; }, 4000);
});
