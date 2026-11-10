function feather(ctx, x, y, angle, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 210);
  ctx.bezierCurveTo(-92, 110, -100, -76, 0, -210);
  ctx.bezierCurveTo(100, -76, 92, 110, 0, 210);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 210);
  ctx.bezierCurveTo(-8, 70, 6, -100, 0, -210);
  for (let i = 0; i < 7; i++) {
    const y = -135 + i * 45;
    ctx.moveTo(0, y + 36);
    ctx.quadraticCurveTo(-42, y + 20, -62, y - 8);
    ctx.moveTo(0, y + 36);
    ctx.quadraticCurveTo(42, y + 20, 62, y - 8);
  }
  ctx.stroke();
  ctx.restore();
}

function lotus(ctx, x, y, width) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(width / 400, width / 400);
  for (let i = -4; i <= 4; i++) {
    ctx.save();
    ctx.rotate(i * .25);
    ctx.beginPath();
    ctx.moveTo(0, 72);
    ctx.bezierCurveTo(-60, 8, -48, -64, 0, -112);
    ctx.bezierCurveTo(48, -64, 60, 8, 0, 72);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function phoenix(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.globalAlpha = .3;
  ctx.lineWidth = 3;
  feather(ctx, 152, 686, -.26, 1.2);
  feather(ctx, 900, 696, .28, 1.25);
  feather(ctx, 1012, 690, .45, 1.05);
  ctx.globalAlpha = .25;
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(-30, 925 + i * 15);
    ctx.bezierCurveTo(200, 840 + i * 14, 288, 1040 + i * 12, 530, 953 + i * 13);
    ctx.bezierCurveTo(760, 860 + i * 12, 910, 1030 + i * 12, 1120, 925 + i * 15);
    ctx.stroke();
  }
}

function bronze(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.fillStyle = theme.accent;
  ctx.lineWidth = 3;
  for (let i = 0; i < 3; i++) {
    const inset = i * 36;
    ctx.beginPath();
    ctx.moveTo(540, 385 + inset);
    ctx.lineTo(958 - inset, 555 + inset / 3);
    ctx.lineTo(958 - inset, 907 - inset / 3);
    ctx.lineTo(540, 1045 - inset);
    ctx.lineTo(122 + inset, 907 - inset / 3);
    ctx.lineTo(122 + inset, 555 + inset / 3);
    ctx.closePath();
    ctx.globalAlpha = i === 0 ? .07 : .03;
    ctx.fill();
    ctx.globalAlpha = .32 - i * .06;
    ctx.stroke();
  }
  ctx.globalAlpha = .34;
  for (let i = 0; i < 22; i++) {
    const angle = i * Math.PI * 2 / 22;
    ctx.beginPath();
    ctx.moveTo(540 + Math.cos(angle) * 305, 713 + Math.sin(angle) * 305);
    ctx.lineTo(540 + Math.cos(angle) * 330, 713 + Math.sin(angle) * 330);
    ctx.stroke();
  }
  for (const x of [78, 1002]) {
    for (let y = 440; y < 1020; y += 88) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 28, y);
      ctx.lineTo(x + 28, y + 50);
      ctx.lineTo(x + 10, y + 50);
      ctx.lineTo(x + 10, y + 22);
      ctx.stroke();
    }
  }
}

function mirror(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 3;
  ctx.globalAlpha = .4;
  for (const radius of [230, 265, 290, 310]) {
    ctx.beginPath();
    ctx.arc(540, 710, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalAlpha = .32;
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4;
    ctx.beginPath();
    ctx.arc(540 + Math.cos(angle) * 208, 710 + Math.sin(angle) * 208, 83, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.lineWidth = 2;
  ctx.globalAlpha = .22;
  for (let i = 0; i < 48; i++) {
    const angle = i * Math.PI / 24;
    ctx.beginPath();
    ctx.moveTo(540 + Math.cos(angle) * 295, 710 + Math.sin(angle) * 295);
    ctx.lineTo(540 + Math.cos(angle) * 305, 710 + Math.sin(angle) * 305);
    ctx.stroke();
  }
}

function bodhisattva(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 3;
  for (let i = 0; i < 4; i++) {
    const radius = 194 + i * 27;
    ctx.globalAlpha = .36 - i * .045;
    ctx.beginPath();
    ctx.moveTo(540 - radius, 1040);
    ctx.lineTo(540 - radius, 690);
    ctx.arc(540, 690, radius, Math.PI, Math.PI * 2);
    ctx.lineTo(540 + radius, 1040);
    ctx.stroke();
  }
  ctx.globalAlpha = .3;
  lotus(ctx, 540, 970, 710);
  ctx.lineWidth = 2;
  ctx.globalAlpha = .16;
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(70 + i * 13, 410);
    ctx.lineTo(70 + i * 13, 985);
    ctx.moveTo(1010 - i * 13, 410);
    ctx.lineTo(1010 - i * 13, 985);
    ctx.stroke();
  }
}

function celadon(ctx, theme) {
  ctx.fillStyle = theme.accent;
  ctx.strokeStyle = theme.accent;
  for (let i = 0; i < 6; i++) {
    const offset = i * 62;
    ctx.beginPath();
    ctx.moveTo(-80, 665 + offset);
    ctx.bezierCurveTo(130, 330 + offset, 235, 940 + offset, 475, 615 + offset);
    ctx.bezierCurveTo(680, 345 + offset, 870, 810 + offset, 1160, 500 + offset);
    ctx.lineTo(1160, 1090);
    ctx.lineTo(-80, 1090);
    ctx.closePath();
    ctx.globalAlpha = .045 + i * .012;
    ctx.fill();
    ctx.globalAlpha = .21;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.strokeStyle = '#b69965';
  ctx.globalAlpha = .42;
  ctx.beginPath();
  ctx.moveTo(998, 395);
  ctx.lineTo(949, 495);
  ctx.lineTo(976, 580);
  ctx.lineTo(906, 650);
  ctx.lineTo(925, 754);
  ctx.lineTo(860, 843);
  ctx.lineTo(883, 953);
  ctx.stroke();
}

function pipa(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.fillStyle = theme.accent;
  ctx.globalAlpha = .1;
  ctx.beginPath();
  ctx.arc(832, 574, 170, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = .44;
  ctx.lineWidth = 2;
  ctx.stroke();
  for (let i = 0; i < 4; i++) {
    const x = 113 + i * 25;
    ctx.beginPath();
    ctx.moveTo(x, 378);
    ctx.bezierCurveTo(x + 250, 560, x - 70, 800, x + 200, 1030);
    ctx.stroke();
  }
  ctx.globalAlpha = .22;
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(805 + i * 18, 700);
    ctx.bezierCurveTo(610 + i * 23, 830, 978 + i * 23, 913, 870 + i * 21, 1040);
    ctx.stroke();
  }
}

function speechless(ctx, theme) {
  ctx.strokeStyle = theme.accent;
  ctx.fillStyle = theme.accent;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(540, 695, 245 + i * 30, 0, Math.PI * 2);
    ctx.globalAlpha = i === 0 ? .085 : .035;
    ctx.fill();
    ctx.globalAlpha = .3 - i * .055;
    ctx.lineWidth = i === 0 ? 3 : 2;
    ctx.stroke();
  }
  ctx.globalAlpha = .46;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(864 + i * 35, 429, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.lineWidth = 5;
  for (const x of [914, 935]) {
    ctx.beginPath();
    ctx.moveTo(x, 856);
    ctx.lineTo(x + 5, 896);
    ctx.stroke();
  }
  ctx.globalAlpha = .24;
  ctx.lineWidth = 2;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(55, 926 + i * 19);
    ctx.bezierCurveTo(110, 894 + i * 19, 175, 961 + i * 19, 246, 924 + i * 19);
    ctx.stroke();
  }
}

const motifs = {waves: phoenix, angles: bronze, arcs: mirror, halo: bodhisattva, contours: celadon, strings: pipa, still: speechless};

export function drawCardBackground(ctx, theme) {
  ctx.save();
  const wash = ctx.createRadialGradient(1010, 545, 20, 540, 690, 1050);
  wash.addColorStop(0, theme.accent + '38');
  wash.addColorStop(.62, theme.accent + '0c');
  wash.addColorStop(1, theme.accent + '00');
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, 1080, 1440);
  ctx.fillStyle = theme.ink;
  ctx.globalAlpha = .027;
  for (let i = 0; i < 1600; i++) {
    ctx.fillRect((i * 73) % 1080, (i * 137) % 1440, 1 + i % 3 * .35, .8);
  }
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.rect(44, 378, 992, 650);
  ctx.clip();
  (motifs[theme.motif] || phoenix)(ctx, theme);
  const focus = ctx.createRadialGradient(540, 710, 80, 540, 710, 345);
  focus.addColorStop(0, theme.paper + 'e6');
  focus.addColorStop(.65, theme.paper + '99');
  focus.addColorStop(1, theme.paper + '00');
  ctx.globalAlpha = 1;
  ctx.fillStyle = focus;
  ctx.fillRect(44, 378, 992, 650);
  ctx.restore();
}
