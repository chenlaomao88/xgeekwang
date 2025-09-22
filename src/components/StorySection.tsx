import memberZhang from '@/assets/member-zhang.jpg';
import memberLi from '@/assets/member-li.jpg';
import memberWang from '@/assets/member-wang.jpg';
import memberDeng from '@/assets/member-deng.jpg';
import memberFeng from '@/assets/member-feng.jpg';
import memberXue from '@/assets/member-xuebaohua.jpg';
import memberMahongchao from '@/assets/member-mahongchao.jpg';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import ApplyDialog from '@/components/modals/ApplyDialog';

const StorySection = () => {
  const stories = [
    {
      id: 1,
      name: '王小鸽',
      title: 'AI架构师',
      avatar: memberZhang,
      story: '从百度离职后，我带着AI算法优化的梦想来到香河。但现实很快给了我当头一棒 - 本地企业不理解技术价值，只看重关系和人情。在X极客网，我找到了真正懂技术、重创新的伙伴们。',
      achievement: '3个月内完成量子传感器原型，获得200万天使投资',
      quote: '在这里，技术不再是被误解的异类，而是被尊重的创新力量。'
    },
    {
      id: 2,
      name: '李亚琪',
      title: '运营专家',
      avatar: memberLi,
      story: '在传统企业做运营多年，深感新创新和新技术在传统公司被阻扰的困难。加入X极客网后，我终于找到了技术与市场的最佳结合点，用数据算法推导出来的发展趋势，洞察运营策略，真正实现产品价值最大化。',
      achievement: '帮助3个初创项目用户增长300%，建立完整的运营体系',
      quote: '好的运营不仅是推广，更是对产品和用户的深度理解。'
    },
    {
      id: 3,
      name: '刘投资人',
      title: '连续创业者',
      avatar: memberWang,
      story: '三次创业经历让我深知，最大的障碍不是技术或资金，而是价值观的鸿沟。香河的商业环境更偏向保守和短视，而X极客网聚集的都是有长远视野的创新者。',
      achievement: '孵化5个项目，总估值突破1亿元',
      quote: '真正的创新者不是独行侠，而是能够聚合极客精神的组织者。'
    },
    {
      id: 4,
      name: '薛宝华',
      title: 'AI+移动端技术专家',
      avatar: memberXue,
      story: '在北京打拼的这些年，我见证了移动互联网的黄金时代，主导过多个千万级用户的应用开发。但随着行业内卷加剧，我开始思考技术的本质意义。在中国信息通信研究院进行技术沉淀那些日子，我深刻体会到人工智能产业标准化篇章已经开启，当我的老朋友依托他的创新论体系打造1D3S+AI愿景时，AI将有自我情感和创造力使我深深震撼。虽然身在北京，但心已经和X极客网紧紧相连。',
      achievement: '成功打造10款移动应用，累计用户超5000万，中国信息通信研究院，AI研究员经历',
      quote: '距离不是问题，认同才是力量。真正的极客精神能够跨越一切物理界限。'
    },
    {
      id: 5,
      name: '马洪超',
      title: '编程教育专家',
      avatar: memberMahongchao,
      story: '从北京回到香河，10年的编程教育生涯让我明白，技术的传承比个人的成功更有意义。在香河这片土地上，我要用自己的方式播种技术的火种，让更多人感受到编程的未来是什么。X极客网给了我最好的平台，让我能将复杂的技术转化为温暖的力量。',
      achievement: '培养超过3000名程序员，就业率达95%',
      quote: '教育是最温柔的革命，技术是最有力的翅膀。在这里，我找到了归宿。'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-balance">
            极客故事
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            每一个故事都是我们认知的觉醒，每一次突破都是生态圈的力量
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="space-y-4 flex-none">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage 
                      src={story.avatar}
                      alt={story.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.title}</p>
                  </div>
                </div>
                
                <blockquote className="text-base font-light leading-relaxed text-accent italic min-h-[4rem] flex items-start">
                  "{story.quote}"
                </blockquote>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/10 flex-none">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm text-accent">创新成果</h4>
                    <div className="text-lg font-light text-accent">
                      {story.id === 1 ? '200万' : story.id === 2 ? '3项' : story.id === 4 ? '5000万+' : story.id === 5 ? '3000+' : '2亿'}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {story.achievement}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {story.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light mb-4">
            开始您的创新故事
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            加入X极客网，与志同道合的创新者一起，用价值观和技能改变世界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyDialog trigger={<button className="btn-primary px-8 py-3">申请加入</button>} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
