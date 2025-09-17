const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: '15亿美元Offer遭拒，小扎用2.5亿改挖00后辍学生，马斯克嘲讽：我不开天价也能挖你的人',
      summary: '人才争夺战正在上演',
      date: '2025-08-04',
      tag: '咨讯'
    },
    {
      id: 2,
      title: '社区投资基金突破200万元',
      summary: '天使投资人为X极客项目累计投资突破200万元里程碑',
      date: '2025-08-04',
      tag: '投资'
    },
    {
      id: 3,
      title: '新增2位精英成员加入',
      summary: '本月新增2位来自各行业的精英成员，社区规模持续扩大',
      date: '2025-09-18',
      tag: '成长'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">创新灯塔快讯</h2>
          <p className="text-muted-foreground font-light">持续关注社区最新动态</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div 
              key={item.id}
              className="module-card p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                    {item.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="font-medium text-lg leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
                
                <div className="flex items-center text-accent text-sm font-light">
                  阅读更多
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
