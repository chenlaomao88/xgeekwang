import { useState, useEffect } from 'react';
import logoDesktop from '@/assets/资源 1.png';
import logoMobile from '@/assets/手机端logo.png';
import ApplyDialog from '@/components/modals/ApplyDialog';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCreativeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 跳转到页面指定部分
    const creativeSection = document.getElementById('creative');
    if (creativeSection) {
      creativeSection.scrollIntoView({ behavior: 'smooth' });
    }
    // 打开弹窗并触发深入探索按钮点击
    setTimeout(() => {
      // 选择第一个模块的深入探索按钮 (创意熔炉)
      const exploreButtons = document.querySelectorAll('.btn-primary.text-sm.py-3');
      if (exploreButtons.length > 0) {
        (exploreButtons[0] as HTMLElement).click();
      }
    }, 500);
  };

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 跳转到页面指定部分
    const resourcesSection = document.getElementById('modules');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
    // 打开弹窗并触发深入探索按钮点击
    setTimeout(() => {
      // 选择第二个模块的深入探索按钮 (资源好兄弟)
      const exploreButtons = document.querySelectorAll('.btn-primary.text-sm.py-3');
      if (exploreButtons.length > 1) {
        (exploreButtons[1] as HTMLElement).click();
      }
    }, 500);
  };

  const handleInnovationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 跳转到页面指定部分
    const innovationSection = document.getElementById('modules');
    if (innovationSection) {
      innovationSection.scrollIntoView({ behavior: 'smooth' });
    }
    // 打开弹窗并触发深入探索按钮点击
    setTimeout(() => {
      // 选择第三个模块的深入探索按钮 (跨界创新汇)
      const exploreButtons = document.querySelectorAll('.btn-primary.text-sm.py-3');
      if (exploreButtons.length > 2) {
        (exploreButtons[2] as HTMLElement).click();
      }
    }, 500);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'h-16 glass-navbar' : 'h-20 glass-navbar'
    }`}>
      <style>
         {`
           @keyframes logoWave {
             0% { transform: scale(1); filter: drop-shadow(0 0 0px red); }
             50% { transform: scale(1.1); filter: drop-shadow(0 0 6px red); }
             100% { transform: scale(1); filter: drop-shadow(0 0 0px red); }
           }
           .logo-hover {
             transition: all 0.3s ease;
           }
           .logo-hover:hover {
             animation: logoWave 1s ease-in-out infinite;
           }
         `}
       </style>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex">
            <img src={logoDesktop} alt="Logo" className="w-12 h-12 logo-hover cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} loading="lazy" decoding="async" />
          </div>
          <div className="hidden lg:block text-xs md:text-xl font-light tracking-wider">X极客网</div>
          <div className="lg:hidden">
            <img src={logoMobile} alt="Logo" className="w-10 h-10 logo-hover cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#creative" className="nav-link-elegant" onClick={handleCreativeClick}>创意熔炉</a></li>
          <li><a href="#resources" className="nav-link-elegant" onClick={handleResourcesClick}>资源好兄弟</a></li>
          <li><button className="nav-link-elegant" onClick={handleInnovationClick}>跨界创新汇</button></li>
          <li><a href="#geeks" className="nav-link-elegant" onClick={(e) => {
            e.preventDefault();
            const targetSection = document.getElementById('geeks');
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>X极客成员</a></li>
          
          <li><a href="#contact" className="nav-link-elegant">联系我们</a></li>
        </ul>

        {/* CTA Button */}
        <ApplyDialog trigger={<button className="btn-outline hidden lg:block">加入社区</button>} />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex space-x-2">
          <ApplyDialog trigger={<button className="btn-outline text-xs">加入我们</button>} />
          <button className="btn-outline text-xs">联系我们</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
