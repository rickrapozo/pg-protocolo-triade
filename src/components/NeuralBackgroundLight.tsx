import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

// Light-mode variant: amber/bronze tones visible on white/light backgrounds
export default function NeuralBackgroundLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;

    let animId: number;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const NODE_COUNT = 24;
    const MAX_DIST = 160;
    const NODE_RGBA = '184, 134, 11';
    const PULSE_CORE = 'rgba(146, 112, 10, 0.95)';

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas!.width = width;
      canvas!.height = height;
      init();
    }

    function init() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
      pulses = [];
    }

    function spawnPulse() {
      const a = Math.floor(Math.random() * nodes.length);
      const b = Math.floor(Math.random() * nodes.length);
      if (a === b) return;
      const dx = nodes[b].x - nodes[a].x;
      const dy = nodes[b].y - nodes[a].y;
      if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
        pulses.push({ fromNode: a, toNode: b, progress: 0, speed: 0.005 + Math.random() * 0.005 });
      }
    }

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      frame++;
      if (frame % 40 === 0) spawnPulse();

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.pulsePhase += 0.02;
      });

      // Axon connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${NODE_RGBA}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Node soma
      nodes.forEach(n => {
        const glow = 0.35 + Math.sin(n.pulsePhase) * 0.15;
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 5);
        gradient.addColorStop(0, `rgba(${NODE_RGBA}, ${glow * 0.4})`);
        gradient.addColorStop(1, `rgba(${NODE_RGBA}, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${NODE_RGBA}, ${glow + 0.2})`;
        ctx.fill();
      });

      // Synaptic pulses
      pulses = pulses.filter(p => {
        p.progress += p.speed;
        if (p.progress > 1) return false;
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 7);
        pg.addColorStop(0, `rgba(${NODE_RGBA}, 0.85)`);
        pg.addColorStop(1, `rgba(${NODE_RGBA}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = PULSE_CORE;
        ctx.fill();
        return true;
      });

      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    const parent = canvas.parentElement;
    if (parent) ro.observe(parent);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.55 }}
    />
  );
}
