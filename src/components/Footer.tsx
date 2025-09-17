import React, { useState } from 'react';
import logo from '../assets/资源 1.png';
import qrWechat from '@/assets/qr-wechat.jpg';
import qrVideo from '@/assets/qr-video.jpg';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', alt: '' });

  const handleQrClick = (type: 'wechat' | 'video') => {
    if (type === 'wechat') {
      setModalContent({ image: qrWechat, alt: '微信公众号 QR Code' });
    } else {
      setModalContent({ image: qrVideo, alt: '视频号 QR Code' });
    }
    setShowModal(true);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'helloxgeek@hotmail.com';
    
    // 复制到剪切板，兼容性处理
    const copyToClipboard = (text: string) => {
      if (navigator.clipboard && window.isSecureContext) {
        // 现代浏览器支持的clipboard API
        return navigator.clipboard.writeText(text);
      } else {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          return Promise.resolve();
        } catch (err) {
          return Promise.reject(err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    };
    
    // 复制邮箱地址
    copyToClipboard(email).then(() => {
      // 显示复制成功的提示
      alert('邮箱地址已复制到剪贴板！');
    }).catch(err => {
      console.error('复制失败:', err);
      // 即使复制失败也尝试打开邮箱
      alert('无法复制到剪贴板，但将尝试打开邮箱客户端');
    });
    
    // 让浏览器直接处理mailto链接，不再使用window.open
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 500);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-contain" loading="lazy" decoding="async" />
              <div className="text-xl font-light tracking-wider">X极客网</div>
            </div>
            <p className="text-sm font-light leading-relaxed opacity-80">
              聚北漂精英，颠覆传统格局<br />
              用创新改变世界，用价值观引领未来
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">组织支持</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li><span className="hover:text-accent transition-colors block w-full">创意熔炉</span></li>
              <li><span className="hover:text-accent transition-colors block w-full">资源好兄弟</span></li>
              <li><span className="hover:text-accent transition-colors block w-full">跨界创新汇</span></li>
              <li><span className="hover:text-accent transition-colors block w-full">X极客成员</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium">联系我们</h4>
            <div className="space-y-3 text-sm font-light opacity-80">
              <div className="relative group">
                <p className="tracking-wide flex items-center">
                  邮箱: <a href="mailto:helloxgeek@hotmail.com" className="hover:text-accent transition-colors cursor-pointer" onClick={handleEmailClick}>helloxgeek@hotmail.com</a>
                </p>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none whitespace-nowrap">
                  点击即复制 打开邮箱
                </span>
              </div>
              <div className="hidden">
                <p>地址: 河北省廊坊市香河县</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <span className="hover:text-accent transition-colors cursor-pointer" onClick={() => handleQrClick('wechat')}>
                  微信公众号
                </span>
                <span className="hover:text-accent transition-colors cursor-pointer" onClick={() => handleQrClick('video')}>
                  视频号
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm font-light opacity-60">
            © 2025 X极客网. 保留所有权利
          </p>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <img 
                src={modalContent.image} 
                alt={modalContent.alt}
                loading="lazy"
                decoding="async"
                className="w-[11.215rem] h-[11.215rem] border border-gray-200 rounded-lg mx-auto"
              />
              <p className="text-center mt-4 text-gray-700">扫码关注回复信息</p>
              <button 
                className="btn-primary mt-4 w-full"
                onClick={() => setShowModal(false)}
              >
                关闭
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
