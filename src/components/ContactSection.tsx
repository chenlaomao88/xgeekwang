import qrWechat from '@/assets/qr-wechat.jpg';
import qrVideo from '@/assets/qr-video.jpg';
import ManifestDialog from '@/components/modals/ManifestDialog';
import ApplyDialog from '@/components/modals/ApplyDialog';
import ResearchDialog from '@/components/modals/ResearchDialog';
const ContactSection = () => {
  const contactChannels = [
    {
      title: '即时连接',
      items: [
        {
          name: '公众号咨询',
          description: '扫码即时咨询',
          qrCode: qrWechat,
          action: '扫码关注'
        },
        {
          name: '视频号实况',
          description: '观看项目实况',
          qrCode: qrVideo,
          action: '观看直播'
        }
      ]
    },
    {
      title: '深度了解',
      items: [
        {
          name: '创新者指南',
          description: '下载完整白皮书',
          action: '立即下载',
          link: '#'
        },
        {
          name: '开放日活动',
          description: '下次开放日：2025年10月20日',
          action: '预约参加',
          link: '#'
        }
      ]
    }
  ];


  

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        {/* Contact Channels */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-balance">
            加入极客圈
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            目前仅开放公众号加入渠道，其他渠道敬请期待。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {contactChannels.map((channel, channelIndex) => (
            <div key={channel.title} className="space-y-6">
              <h3 className="text-2xl font-light text-center mb-8">
                {channel.title}
              </h3>
              
              <div className={channel.title === '即时连接' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                {channel.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className="module-card p-6 text-center "
                    style={{ animationDelay: `${(channelIndex * 2 + itemIndex) * 100}ms` }}
                  >
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      
                      {item.qrCode ? (
                        <div className="flex flex-col items-center space-y-3">
                          <img 
                            src={item.qrCode} 
                            alt={`${item.name} QR Code`}
                            loading="lazy"
                            decoding="async"
                            className="w-[11.215rem] h-[11.215rem] border border-border/20 rounded-lg qr-code"
                          />
                          <button className="btn-outline text-sm">
                            {item.action}
                          </button>
                        </div>
                      ) : (
                        item.name === '创新者指南' ? (
                          <ResearchDialog trigger={<button className="btn-primary text-sm px-8">{item.action}</button>} />
                        ) : item.name === '开放日活动' ? (
                          <ApplyDialog trigger={<button className="btn-primary text-sm px-8">{item.action}</button>} mode="openday" />
                        ) : (
                          <button className="btn-primary text-sm px-8">{item.action}</button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {[
            { number: '7', label: '精英成员' },
            { number: '2', label: '活跃项目' },
            { number: '10', label: '成功对接' },
            { number: '200万', label: '投资金额' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="space-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-light text-accent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
// ... existing code ...
