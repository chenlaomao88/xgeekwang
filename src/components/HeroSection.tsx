import { DynamicParticleAnimation } from './DynamicParticleAnimation';
import ManifestDialog from '@/components/modals/ManifestDialog';
import VideoDialog from '@/components/modals/VideoDialog';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--muted)) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, hsl(var(--muted)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-balance">
              聚北漂精英
              <span className="block text-accent">颠覆传统格局</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
              用我们共有的价值观、认知体系和专业技能，在香河打造创新项目，
              重新定义竞争格局，为新青年树立正确的价值灯塔。
            </p>
          </div>

          {/* Design Principles */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { char: '留', title: '留白美学', desc: '负空间创造信息呼吸感' },
              { char: '纯', title: '纯之灵魂', desc: '伟大的创新源自纯洁的心灵' },
              { char: '空', title: '空之哲学', desc: '减法设计展现本质' }
            ].map((principle, index) => (
              <div 
                key={principle.char} 
                className="text-center group animation-delay-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-border flex items-center justify-center text-2xl font-light transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:transform group-hover:scale-110">
                  {principle.char}
                </div>
                <h3 className="font-normal text-sm mb-1 tracking-wide">{principle.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-4">
            <ManifestDialog trigger={<button className="btn-primary">了解更多</button>} />
            <VideoDialog trigger={<button className="btn-outline">观看介绍</button>} />
          </div>
        </div>

        {/* Right Content - Dynamic Particle Animation */}
        <div className="relative h-[700px] w-full flex items-center justify-center">
          <DynamicParticleAnimation />
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
