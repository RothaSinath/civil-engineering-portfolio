import React, { useEffect, useRef } from 'react';

/**
 * EngineeringBackground
 * Renders an interactive, ambient Civil Engineering structural truss and blueprint grid animation.
 * Features:
 * - Structural nodes (truss joints) connected by dynamic stress lines
 * - CAD crosshairs and subtle technical elevation / coordinate tags
 * - Gentle mouse interaction (cursor stress lines)
 * - Automatic pause / static fallback when prefers-reduced-motion is active
 * - High-DPI crisp rendering with optimized requestAnimationFrame
 */
export default function EngineeringBackground({ variant = 'light', className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isDark = variant === 'dark';
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Civil engineering technical labels that gently drift
    const technicalAnnotations = [
      'STATION 0+240',
      'AXIS C-4',
      'ELEV +14.200m',
      'M_max: 38.4 kN·m',
      'GRID 01-A',
      'f\'c: 28 MPa',
      'BEARING: 180 kPa',
      'SLOPE: 2.0%'
    ];

    // Node & truss network configuration
    const NODE_COUNT = Math.min(Math.floor((width * height) / 22000), 45) + 12;
    const MAX_DISTANCE = 130;
    const MOUSE_RADIUS = 160;

    const mouse = {
      x: null,
      y: null,
    };

    // Initialize nodes
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.8,
        label: i < technicalAnnotations.length ? technicalAnnotations[i] : null,
        labelAlpha: Math.random() * 0.18 + 0.12,
        isAnchor: i % 5 === 0, // Visual anchor point (has crosshair)
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Draw grid lines
    const drawGrid = () => {
      const gridSize = 60;
      ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.05)' : 'rgba(16, 42, 67, 0.035)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Subtle CAD intersection crosses
      const crossSize = 4;
      ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
        }
      }
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      // Update and draw structural truss network
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!isReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bounce with slight padding
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Draw node (structural pin)
        ctx.fillStyle = isDark
          ? node.isAnchor
            ? 'rgba(56, 189, 248, 0.6)'
            : 'rgba(147, 197, 253, 0.35)'
          : node.isAnchor
          ? 'rgba(59, 130, 246, 0.65)'
          : 'rgba(16, 42, 67, 0.3)';

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw crosshair around anchor nodes
        if (node.isAnchor) {
          ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(59, 130, 246, 0.25)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.moveTo(node.x - 7, node.y);
          ctx.lineTo(node.x + 7, node.y);
          ctx.moveTo(node.x, node.y - 7);
          ctx.lineTo(node.x, node.y + 7);
          ctx.stroke();
        }

        // Draw technical annotation text if present
        if (node.label) {
          ctx.font = '9px "JetBrains Mono", Consolas, monospace';
          ctx.fillStyle = isDark
            ? `rgba(186, 230, 253, ${node.labelAlpha})`
            : `rgba(98, 125, 152, ${node.labelAlpha + 0.1})`;
          ctx.fillText(node.label, node.x + 8, node.y - 6);
        }

        // Connect with nearby nodes (structural truss members)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * (isDark ? 0.14 : 0.09);
            ctx.strokeStyle = isDark
              ? `rgba(96, 165, 250, ${alpha})`
              : `rgba(16, 42, 67, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse attraction/connection
        if (mouse.x !== null && mouse.y !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            const mouseAlpha = (1 - dist / MOUSE_RADIUS) * (isDark ? 0.35 : 0.25);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${mouseAlpha})`
              : `rgba(59, 130, 246, ${mouseAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
