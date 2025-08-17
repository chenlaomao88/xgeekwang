import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  angle: number;
  text: string;
}

export function DynamicParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸 - 提高清晰度
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;
      
      // 设置实际尺寸
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      
      // 设置显示尺寸
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // 缩放绘图上下文以匹配设备像素比
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子 - X形分布
    const initParticles = () => {
      particlesRef.current = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const texts = [
        '科技', '金融', '医疗', '教育', '设计', '营销', 
        '创业', '投资', '管理', '数据', '人工智能', '区块链',
        '加入精英创新圈', '极客故事会', '跨界合作', '创新孵化'
      ];
      
      // X形的两条线 - 再次增大离散范围100%
      const lineLength = Math.min(canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1)) * 1.2;
      const particlesPerLine = 20;
      
      // 第一条线 (左上到右下)
      for (let i = 0; i < particlesPerLine; i++) {
        const t = i / (particlesPerLine - 1);
        const x = centerX - lineLength/2 + t * lineLength;
        const y = centerY - lineLength/2 + t * lineLength;
        
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 160,
          y: y + (Math.random() - 0.5) * 160,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.6 ? '#C3272B' : '#212121',
          angle: Math.random() * Math.PI * 2,
          text: texts[Math.floor(Math.random() * texts.length)]
        });
      }
      
      // 第二条线 (右上到左下)
      for (let i = 0; i < particlesPerLine; i++) {
        const t = i / (particlesPerLine - 1);
        const x = centerX + lineLength/2 - t * lineLength;
        const y = centerY - lineLength/2 + t * lineLength;
        
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 160,
          y: y + (Math.random() - 0.5) * 160,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.6 ? '#C3272B' : '#212121',
          angle: Math.random() * Math.PI * 2,
          text: texts[Math.floor(Math.random() * texts.length)]
        });
      }
      
      // 添加一些随机粒子增强效果
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
          y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: '#212121',
          angle: Math.random() * Math.PI * 2,
          text: texts[Math.floor(Math.random() * texts.length)]
        });
      }
    };

    initParticles();

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新粒子
      particlesRef.current.forEach((particle, index) => {
        // 更新位置和角度
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += 0.02;

        // 边界反弹
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
        
        if (particle.x <= particle.radius || particle.x >= canvasWidth - particle.radius) {
          particle.vx *= -0.8;
          particle.x = Math.max(particle.radius, Math.min(canvasWidth - particle.radius, particle.x));
        }
        if (particle.y <= particle.radius || particle.y >= canvasHeight - particle.radius) {
          particle.vy *= -0.8;
          particle.y = Math.max(particle.radius, Math.min(canvasHeight - particle.radius, particle.y));
        }

        // 绘制粒子
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 绘制跟随粒子的文字
        if (particle.radius > 2) {
          ctx.save();
          ctx.globalAlpha = particle.opacity * 0.8;
          ctx.fillStyle = particle.color;
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // 文字围绕粒子旋转
          const textRadius = particle.radius + 15;
          const textX = particle.x + Math.cos(particle.angle) * textRadius;
          const textY = particle.y + Math.sin(particle.angle) * textRadius;
          
          ctx.fillText(particle.text, textX, textY);
          ctx.restore();
        }

        // 绘制连接线
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120 && distance > 0) {
              ctx.save();
              ctx.globalAlpha = (120 - distance) / 120 * 0.15;
              ctx.strokeStyle = particle.color === '#C3272B' ? '#C3272B' : '#212121';
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });

        // 添加脉动效果和轻微的引力
        particle.opacity += Math.sin(Date.now() * 0.002 + index) * 0.02;
        particle.opacity = Math.max(0.2, Math.min(0.9, particle.opacity));
        
        // 轻微的中心引力
        const centerX = (canvas.width / (window.devicePixelRatio || 1)) / 2;
        const centerY = (canvas.height / (window.devicePixelRatio || 1)) / 2;
        const distanceToCenter = Math.sqrt((particle.x - centerX) ** 2 + (particle.y - centerY) ** 2);
        if (distanceToCenter > 50) {
          particle.vx += (centerX - particle.x) * 0.0001;
          particle.vy += (centerY - particle.y) * 0.0001;
        }
        
        // 限制速度
        const maxSpeed = 1;
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
  <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
    <canvas
  ref={canvasRef}
  className="w-full h-full max-w-full sm:max-w-3xl mx-auto"
  style={{ background: 'transparent' }}
  draggable="false"
  onContextMenu={(e) => e.preventDefault()}
/>
  </div>
);
}
