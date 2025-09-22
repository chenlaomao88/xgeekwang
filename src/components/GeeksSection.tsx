import { useState, useRef, useEffect } from 'react';
import memberZhang from '@/assets/member-zhang.jpg';
import memberLi from '@/assets/member-li.jpg';
import memberWang from '@/assets/member-wang.jpg';
import memberChen from '@/assets/member-chen.jpg';
import chenChuangShiRen from '@/assets/陈创始人.png';
import memberDeng from '@/assets/member-deng.jpg';
import memberFeng from '@/assets/member-feng.jpg';
import memberXue from '@/assets/member-xuebaohua.jpg';
import memberMahongchao from '@/assets/member-mahongchao.jpg';
interface Member {
  id: string;
  name: string;
  title: string;
  avatar: string;
  story: string;
  abilities: {
    创新: number;
    跨界: number;
    资源: number;
    技术: number;
    商业: number;
    领导: number;
  };
  industries: string[];
  joinTime: string;
  hidden?: boolean;
}

const GeeksSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>('刘投资人');
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<'ranking' | 'newMembers'>('ranking');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMember, setModalMember] = useState<Member | null>(null);

  const rankingScrollRef = useRef<HTMLDivElement>(null);
  const newMembersScrollRef = useRef<HTMLDivElement>(null);

  const members: Member[] = [
    {
      id: '李博士',
      name: '李博士',
      title: 'AI架构师',
      avatar: memberLi,
      story: '前Google高级工程师，专注于深度学习和神经网络架构设计，已发表多篇顶级论文。',
      abilities: {
        创新: 85,
        跨界: 70,
        资源: 90,
        技术: 95,
        商业: 55,
        领导: 75
      },
      industries: ['人工智能', '深度学习', '神经网络', '电商运营', '深度dee', 'AI网络', 'ai运营'],
      joinTime: '2023-01-15',
      hidden: true
    },
    {
      id: '王小鸽',
      name: '王小鸽',
      title: '首席技术官',
      avatar: memberZhang,
      story: '10年产品经验，曾主导多个千万级用户产品的设计与迭代。',
      abilities: {
        创新: 80,
        跨界: 96,
        资源: 82,
        技术: 93,
        商业: 79,
        领导: 75
      },
      industries: ['产品管理', '用户体验', '市场分析', 'AI网络'],
      joinTime: '2025-04-20'
    },
    {
      id: '李投资人',
      name: '李投资人',
      title: '投资总监',
      avatar: memberWang,
      story: '知名投资机构合伙人，成功投资过多个独角兽企业。',
      abilities: {
        创新: 65,
        跨界: 75,
        资源: 95,
        技术: 45,
        商业: 98,
        领导: 90
      },
      industries: ['风险投资', '金融科技', '创业孵化'],
      joinTime: '2025-03-10',
      hidden: true
    },
    {
      id: '陈博士',
      name: '陈博士',
      title: '技术总监',
      avatar: memberChen,
      story: '清华博士，在人工智能和区块链领域有深入研究。',
      abilities: {
        创新: 88,
        跨界: 65,
        资源: 70,
        技术: 96,
        商业: 60,
        领导: 78
      },
      industries: ['区块链', '人工智能', '量子计算'],
      joinTime: '2025-04-05',
      hidden: true
    },
    // 新增15位成员
    {
      id: '刘工程师',
      name: '刘工程师',
      title: '全栈工程师',
      avatar: memberLi,
      story: '阿里巴巴高级工程师，精通前后端开发，开源项目贡献者。',
      abilities: {
        创新: 82,
        跨界: 75,
        资源: 68,
        技术: 93,
        商业: 65,
        领导: 70
      },
      industries: ['Web开发', '云计算', '开源技术', '微服务'],
      joinTime: '2024-07-22',
      hidden: true
    },
    {
      id: '马设计师',
      name: '马燕',
      title: 'UX总监',
      avatar: memberChen,
      story: '腾讯设计总监，专注用户体验设计，获得多项国际设计奖项。',
      abilities: {
        创新: 93,
        跨界: 75,
        资源: 70,
        技术: 90,
        商业: 80,
        领导: 70
      },
      industries: ['UI/UX设计', '用户研究', '交互设计', '品牌设计'],
      joinTime: '2025-06-17'
    },
    {
      id: '孙医生',
      name: '孙医生',
      title: '数字医疗专家',
      avatar: memberWang,
      story: '协和医院主任医师，专注数字医疗和AI诊断技术研发。',
      abilities: {
        创新: 85,
        跨界: 80,
        资源: 85,
        技术: 70,
        商业: 75,
        领导: 90
      },
      industries: ['数字医疗', 'AI诊断', '医疗器械', '健康管理'],
      joinTime: '2024-07-18',
      hidden: true
    },
    {
      id: '陈宇清',
      name: '陈宇清',
      title: 'X极客网创始人',
      avatar: chenChuangShiRen,
      story: '三次成功创业经历，专注消费科技领域，累计融资过亿。',
      abilities: {
        创新: 96,
        跨界: 97,
        资源: 85,
        技术: 65,
        商业: 83,
        领导: 80
      },
      industries: ['私募股权', '科技服务', '综合消费', '传统制造', '品牌策划', '创业孵化'],
      joinTime: '2025-02-20'
    },
    {
      id: '钱分析师',
      name: '钱分析师',
      title: '金融分析师',
      avatar: memberLi,
      story: '高盛前副总裁，专注量化投资和金融科技创新。',
      abilities: {
        创新: 75,
        跨界: 70,
        资源: 88,
        技术: 85,
        商业: 92,
        领导: 80
      },
      industries: ['量化投资', '金融科技', '风险管理', '资产配置'],
      joinTime: '2024-07-12',
      hidden: true
    },
    {
      id: '周教授',
      name: '周教授',
      title: '算法专家',
      avatar: memberZhang,
      story: '清华大学教授，机器学习和数据挖掘领域的权威专家。',
      abilities: {
        创新: 95,
        跨界: 75,
        资源: 80,
        技术: 98,
        商业: 50,
        领导: 85
      },
      industries: ['机器学习', '数据挖掘', '算法优化', '学术研究'],
      joinTime: '2024-07-10',
      hidden: true
    },
    {
      id: '冯总监',
      name: '冯总监',
      title: '营销总监',
      avatar: memberWang,
      story: '字节跳动营销总监，在增长黑客和数字营销方面有丰富经验。',
      abilities: {
        创新: 85,
        跨界: 90,
        资源: 85,
        技术: 65,
        商业: 88,
        领导: 80
      },
      industries: ['数字营销', '增长黑客', '内容营销', '品牌策略'],
      joinTime: '2024-07-08',
      hidden: true
    },
    {
      id: '郑架构师',
      name: '郑架构师',
      title: '云架构师',
      avatar: memberChen,
      story: '华为云技术专家，专注企业级云架构设计和实施。',
      abilities: {
        创新: 80,
        跨界: 75,
        资源: 75,
        技术: 95,
        商业: 70,
        领导: 85
      },
      industries: ['云计算', '企业架构', '微服务', 'DevOps'],
      joinTime: '2024-07-05',
      hidden: true
    },
    {
      id: '冯律师',
      name: '冯律师',
      title: '科技律师',
      avatar: memberLi,
      story: '知名律所合伙人，专注科技公司法务和知识产权保护。',
      abilities: {
        创新: 70,
        跨界: 85,
        资源: 90,
        技术: 55,
        商业: 85,
        领导: 88
      },
      industries: ['知识产权', '公司法务', '合规管理', '法律科技'],
      joinTime: '2024-07-02',
      hidden: true
    },
    {
      id: '李亚琪',
      name: '李亚琪',
      title: '运营专家',
      avatar: memberLi,
      story: '小红书运营总监，在社区运营和用户增长方面经验丰富。',
      abilities: {
        创新: 82,
        跨界: 88,
        资源: 80,
        技术: 60,
        商业: 85,
        领导: 75
      },
      industries: ['数字营销', '用户增长', '内容运营', '社交电商'],
      joinTime: '2025-06-28'
    },
    {
      id: '刘投资人',
      name: '刘投资人',
      title: '风险投资人',
      avatar: memberWang,
      story: '红杉资本投资总监，关注早期科技项目投资。',
      abilities: {
        创新: 87,
        跨界: 95,
        资源: 96,
        技术: 60,
        商业: 97,
        领导: 95
      },
      industries: ['风险投资', '早期投资', '科技评估', '创业指导', '金融科技'],
      joinTime: '2025-02-20'
    },
    {
      id: '黄CTO',
      name: '黄CTO',
      title: '技术合伙人',
      avatar: memberChen,
      story: '美团技术VP，在大规模系统架构和团队管理方面有丰富经验。',
      abilities: {
        创新: 88,
        跨界: 75,
        资源: 85,
        技术: 96,
        商业: 80,
        领导: 92
      },
      industries: ['系统架构', '团队管理', '技术战略', '平台建设'],
      joinTime: '2024-06-20',
      hidden: true
    },
    {
      id: '杨顾问',
      name: '杨顾问',
      title: '战略顾问',
      avatar: memberLi,
      story: '麦肯锡前合伙人，专注企业战略咨询和数字化转型。',
      abilities: {
        创新: 85,
        跨界: 90,
        资源: 88,
        技术: 60,
        商业: 95,
        领导: 90
      },
      industries: ['战略咨询', '数字化转型', '组织变革', '商业模式'],
      joinTime: '2024-06-15',
      hidden: true
    },
    {
      id: '何研究员',
      name: '何研究员',
      title: '区块链研究员',
      avatar: memberZhang,
      story: '中科院计算所研究员，区块链和分布式系统专家。',
      abilities: {
        创新: 90,
        跨界: 70,
        资源: 75,
        技术: 95,
        商业: 65,
        领导: 80
      },
      industries: ['区块链', '分布式系统', '密码学', '智能合约'],
      joinTime: '2024-06-10',
      hidden: true
    },
    {
      id: '谢总经理',
      name: '谢总经理',
      title: '供应链专家',
      avatar: memberWang,
      story: '京东物流总经理，在供应链优化和物流科技方面有深厚造诣。',
      abilities: {
        创新: 78,
        跨界: 82,
        资源: 90,
        技术: 75,
        商业: 88,
        领导: 85
      },
      industries: ['供应链管理', '物流科技', '运营优化', '智能仓储'],
      joinTime: '2024-06-05',
      hidden: true
    },
    {
      id: '薛宝华',
      name: '薛宝华',
      title: 'Al+移动端技术专家',
      avatar: memberXue,
      story: '10年原生iOS/Android开发经验，5年产品经历，主导过多个移动应用开发。虽身在北京，但对极客网的组织文化高度认可。',
      abilities: {
        创新: 85,
        跨界: 83,
        资源: 87,
        技术: 91,
        商业: 82,
        领导: 82
      },
      industries: ['产业AI', '技术标准','移动开发', 'iOS', 'Android', '产品设计', '市场推广'],
      joinTime: '2025-09-16'
    },
    {
      id: '马洪超',
      name: '马洪超',
      title: '编程教育专家',
      avatar: memberMahongchao,
      story: '10年编程教育经验，擅长将复杂技术概念转化为易懂教学内容，培养了数千名优秀程序员。回香河创业，致力于技术人才培养。',
      abilities: {
        创新: 65,
        跨界: 89,
        资源: 93,
        技术: 83,
        商业: 85,
        领导: 86
      },
      industries: ['编程教育', '技术培训', '课程设计', '人才培养'],
      joinTime: '2025-09-16'
    },
  ];

  const positions = [
    // 第6层：顶层战略层
    { name: 'CEO', level: 6, weights: { 创新: 25, 跨界: 20, 资源: 15, 技术: 10, 商业: 15, 领导: 15 }, x: 50, y: 15 },

    // 第5层：高管层
    { name: 'CTO', level: 5, weights: { 创新: 20, 跨界: 15, 资源: 10, 技术: 35, 商业: 10, 领导: 10 }, x: 30, y: 28 },
    { name: 'CFO', level: 5, weights: { 创新: 10, 跨界: 15, 资源: 20, 技术: 5, 商业: 35, 领导: 15 }, x: 70, y: 28 },
    { name: 'COO', level: 5, weights: { 创新: 15, 跨界: 25, 资源: 20, 技术: 15, 商业: 15, 领导: 10 }, x: 50, y: 28 },

    // 第4层：业务领导层
    { name: 'CMO', level: 4, weights: { 创新: 20, 跨界: 25, 资源: 25, 技术: 5, 商业: 20, 领导: 5 }, x: 20, y: 41 },
    { name: 'CHRO', level: 4, weights: { 创新: 10, 跨界: 20, 资源: 25, 技术: 5, 商业: 10, 领导: 30 }, x: 40, y: 41 },
    { name: 'CIO', level: 4, weights: { 创新: 15, 跨界: 15, 资源: 10, 技术: 40, 商业: 5, 领导: 15 }, x: 60, y: 41 },
    { name: 'CDO', level: 4, weights: { 创新: 20, 跨界: 10, 资源: 10, 技术: 45, 商业: 5, 领导: 10 }, x: 80, y: 41 },

    // 第3层：业务执行层
    { name: '创业导师', level: 3, weights: { 创新: 30, 跨界: 25, 资源: 20, 技术: 5, 商业: 10, 领导: 10 }, x: 15, y: 54 },
    { name: '产品经理', level: 3, weights: { 创新: 25, 跨界: 20, 资源: 10, 技术: 15, 商业: 20, 领导: 10 }, x: 50, y: 54 },
    { name: 'AI架构师', level: 3, weights: { 创新: 20, 跨界: 15, 资源: 10, 技术: 40, 商业: 5, 领导: 10 }, x: 85, y: 54 },

    // 第2层：专业支持层
    { name: '市场拓展', level: 2, weights: { 创新: 15, 跨界: 20, 资源: 25, 技术: 5, 商业: 25, 领导: 10 }, x: 35, y: 67 },

    // 第1层：基础运营层
    { name: '行政专员', level: 1, weights: { 创新: 5, 跨界: 10, 资源: 15, 技术: 5, 商业: 15, 领导: 50 }, x: 65, y: 80, hidden: true }
  ];

  const calculatePositionScore = (abilities: any, positionWeights: any) => {
    let score = 0;
    for (const [ability, weight] of Object.entries(positionWeights)) {
      score += (abilities[ability] || 0) * (weight as number) / 100;
    }
    return Math.round(score);
  };

  const getSelectedMember = () => members.find(m => m.id === selectedMember) || members[0];
  const selectedMemberData = getSelectedMember();

  const getBestPosition = (abilities: any) => {
    let bestPosition = positions[0];
    let bestScore = 0;

    positions.forEach(position => {
      const score = calculatePositionScore(abilities, position.weights);
      if (score > bestScore) {
        bestScore = score;
        bestPosition = position;
      }
    });

    return { position: bestPosition.name, score: bestScore };
  };

  const bestMatch = getBestPosition(selectedMemberData.abilities);



  const handleMemberClick = (member: Member) => {
    setModalMember(member);
    setIsModalOpen(true);
  };

  // 动态设置左侧列高度为基准
  useEffect(() => {
    const updateColumnHeight = () => {
      const leftColumn = document.getElementById('left-column');
      if (leftColumn && window.innerWidth >= 1024) {
        // 桌面端：使用左侧列的实际高度
        const height = leftColumn.offsetHeight;
        document.documentElement.style.setProperty('--left-column-height', `${height}px`);
      } else {
        // 移动端：使用固定高度
        document.documentElement.style.setProperty('--left-column-height', '725px');
      }
    };

    // 初始设置
    updateColumnHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', updateColumnHeight);

    // 监听选中成员变化（可能影响左侧高度）
    const timer = setTimeout(updateColumnHeight, 100);

    return () => {
      window.removeEventListener('resize', updateColumnHeight);
      clearTimeout(timer);
    };
  }, [selectedMember]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1023px) {
            .mobile-fixed-height {
              max-height: 80vh;
              overflow-y: auto;
            }
          }
          
          /* 隐藏滚动条 */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `
      }} />
      <section className="py-20 bg-secondary/20" id="geeks">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-balance">
              X极客成员
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              精英社区的核心力量，每位成员都具备独特的专业能力和创新贡献
            </p>
          </div>

          <div
            className="grid lg:grid-cols-3 gap-8 lg:items-start"
            style={{ minHeight: '600px' }}
          >
            {/* 左侧：成员详情 - 桌面端显示 */}
            <div className="lg:col-span-1 space-y-6 hidden lg:block" id="left-column">
              <div className="bg-card rounded-lg border p-6 border-accent shadow-lg">
                <div className="text-center mb-6">
                  <img
                    src={selectedMemberData.avatar}
                    alt={selectedMemberData.name}
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-accent/20"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <h3 className="text-xl font-medium">{selectedMemberData.name}</h3>
                  <p className="text-muted-foreground">{selectedMemberData.title}</p>
                  <div className="mt-3 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full inline-block">
                    最佳匹配：{bestMatch.position} ({bestMatch.score}分)
                  </div>


                </div>

                <div className="mb-6 max-w-xl">
                  <h4 className="font-medium mb-2">能力雷达</h4>
                  <HexagonChart
                    abilities={selectedMemberData.abilities}
                    positionWeights={hoveredPosition ?
                      positions.find(p => p.name === hoveredPosition)?.weights || {} :
                      {}
                    }
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-2">成就微章</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-lg font-light text-accent">创新领袖</div>
                      <div className="text-xs text-muted-foreground">等级 5</div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-lg font-light text-accent">跨界先锋</div>
                      <div className="text-xs text-muted-foreground">8项目</div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-lg font-light text-accent">资源整合</div>
                      <div className="text-xs text-muted-foreground">12次</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 中间：金字塔职位系统 - 桌面端显示 */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="relative bg-card rounded-lg border p-4" style={{ height: 'var(--left-column-height, auto)' }}>
                <h4 className="font-medium mb-2 text-center">岗位位置评分</h4>
                <div className="relative w-full h-full">
                  {positions.filter(position => !position.hidden).map((position) => {
                    const score = calculatePositionScore(selectedMemberData.abilities, position.weights);
                    const isHovered = hoveredPosition === position.name;
                    const isBest = bestMatch.position === position.name;

                    return (
                      <div
                        key={position.name}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                        style={{
                          left: `${position.x}%`,
                          top: `${position.y}%`,
                          zIndex: position.level
                        }}
                        onMouseEnter={() => setHoveredPosition(position.name)}
                        onMouseLeave={() => setHoveredPosition(null)}
                      >
                        <div className={`min-w-max max-w-32 h-10 px-2 py-1 rounded-lg text-center shadow-lg transition-all duration-300 flex flex-col items-center justify-center ${isBest ? 'bg-accent text-accent-foreground' :
                          isHovered ? 'bg-accent/20 text-accent' : 'bg-secondary text-foreground'
                          }`}>
                          <div className="text-xs font-medium leading-tight line-clamp-2">{position.name}</div>
                          <div className={`text-xs leading-tight ${!isBest ? 'text-accent' : ''}`}>{score}分</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* 右侧：评分排行和新成员 - 移动端占全宽 */}
            <div
              className="lg:col-span-1 col-span-full flex flex-col space-y-4"
              style={{ height: 'var(--left-column-height, 750px)' }}
            >
              <div className="flex bg-card rounded-lg border overflow-hidden flex-shrink-0" style={{ minHeight: '50px' }}>
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${currentTab === 'ranking' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setCurrentTab('ranking')}
                >
                  评分排行
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${currentTab === 'newMembers' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setCurrentTab('newMembers')}
                >
                  新成员
                </button>
              </div>
              <div className="bg-card rounded-lg border p-4 flex-grow overflow-hidden flex flex-col">
                {currentTab === 'ranking' ? (
                  <div
                    ref={rankingScrollRef}
                    className="flex-grow overflow-y-auto space-y-3 px-2 pb-3"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'hsla(var(--accent), 0.3) transparent',
                      paddingBottom: '0.5rem !important'
                    }}
                  >
                    {members.filter(member => !member.hidden).slice()
                      .sort((a, b) => calculatePositionScore(b.abilities, positions[0].weights) - calculatePositionScore(a.abilities, positions[0].weights))
                      .map((member, index) => (
                        <div
                          key={member.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${selectedMember === member.id ? 'bg-accent/10 border border-accent/20' : 'hover:bg-secondary/50'
                            }`}
                          onMouseEnter={() => setSelectedMember(member.id)}
                          onClick={() => handleMemberClick(member)}
                        >
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.title}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">排名: {index + 1}</div>
                            <div className="text-xs text-accent">
                              评分: {calculatePositionScore(member.abilities, positions[0].weights)}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div
                    ref={newMembersScrollRef}
                    className="flex-grow overflow-y-auto space-y-3 px-2 pb-3"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'hsla(var(--accent), 0.3) transparent',
                      paddingBottom: '0.5rem !important'
                    }}
                  >
                    {members.filter(member => !member.hidden).slice()
                      .sort((a, b) => new Date(b.joinTime).getTime() - new Date(a.joinTime).getTime())
                      .map((member, index) => (
                        <div
                          key={`new-${member.id}`}
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${selectedMember === member.id ? 'bg-accent/10 border border-accent/20' : 'hover:bg-secondary/50'
                            }`}
                          onMouseEnter={() => setSelectedMember(member.id)}
                          onClick={() => handleMemberClick(member)}
                        >
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.title}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">加入时间</div>
                            <div className="text-xs text-accent">
                              {member.joinTime}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className="bg-card rounded-lg border p-6 border-accent shadow-lg mt-4 flex-shrink-0 hidden lg:block">
                <h3 className="text-lg font-medium mb-4">创新灵感力</h3>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">从事过的行业</span>
                  <div style={{ minHeight: '60px' }} className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedMemberData.industries?.map(industry => (
                        <span key={industry} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>创新灵感力得分</span>
                    <span className="font-medium">{Math.min(selectedMemberData.industries?.length * 15, 100)}分</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-[#CD5C5C] h-2 rounded-full" style={{ width: `${Math.min(selectedMemberData.industries?.length * 15, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 移动端弹窗 */}
          {isModalOpen && modalMember && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:hidden"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-card rounded-lg border max-w-sm w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
              >
                <MemberDetailModal
                  member={modalMember}
                  onClose={() => setIsModalOpen(false)}
                  positions={positions}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const MemberDetailModal = ({ member, onClose, positions }: {
  member: Member;
  onClose: () => void;
  positions: any[];
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 使用与web端一致的职位数据
  const mobilePositions = positions.filter(position => !position.hidden).map(position => ({
    name: position.name,
    weights: position.weights
  }));

  const calculatePositionScore = (abilities: any, positionWeights: any) => {
    let score = 0;
    for (const [ability, weight] of Object.entries(positionWeights)) {
      score += (abilities[ability] || 0) * (weight as number) / 100;
    }
    return Math.round(score);
  };

  const getBestPosition = (abilities: any) => {
    let bestPosition = mobilePositions[0];
    let bestScore = 0;

    mobilePositions.forEach(position => {
      const score = calculatePositionScore(abilities, position.weights);
      if (score > bestScore) {
        bestScore = score;
        bestPosition = position;
      }
    });

    return { position: bestPosition.name, score: bestScore };
  };

  const bestMatch = getBestPosition(member.abilities);

  const handleScroll = (e: React.TouchEvent) => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const newScrollPosition = element.scrollTop;
      setScrollPosition(newScrollPosition);
    }
  };

  // 按最高分排序并获取第一个作为默认显示
  const sortedPositions = mobilePositions
    .map(position => ({
      ...position,
      score: calculatePositionScore(member.abilities, position.weights)
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="max-h-[90vh] overflow-y-auto scrollbar-hide">
      {/* 固定头部 */}
      <div className="sticky top-0 bg-card border-b p-4 flex justify-between items-center z-10">
        <h2 className="text-lg font-medium">成员详情</h2>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 滚动内容区域 */}
      <div className="p-4 space-y-4">
        {/* 上部分：头像信息（左）和行业经历（右） */}
        <div className="grid grid-cols-2 gap-4">
          {/* 左侧：头像和基本信息 */}
          <div className="space-y-4 text-center">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-accent/20 mx-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="space-y-0.1">
              <h3 className="text-base font-medium leading-tight">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.title}</p>
              <div className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full inline-block mx-auto">
                最佳匹配：{bestMatch.position}
              </div>
            </div>
          </div>

          {/* 右侧：行业经历和创新灵感力 */}
          <div className="space-y-3 flex flex-col">
            {/* 行业经历 */}
            <div className="text-center">
              <h4 className="font-medium mb-2 text-sm">行业经历</h4>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.industries?.slice(0, 6).map(industry => (
                  <span
                    key={industry}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* 创新灵感力 - 缩小版本 */}
            <div className="bg-secondary/30 rounded-lg p-3 mb-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>创新灵感力</span>
                  <span className="font-medium">{Math.min(member.industries?.length * 15, 100)}分</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div 
                    className="bg-[#CD5C5C] h-1.5 rounded-full" 
                    style={{ width: `${Math.min(member.industries?.length * 15, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 岗位评分 - 仿照桌面端金字塔结构 */}
        <div className="mb-2">
          <h4 className="font-medium mb-3 text-sm text-center">岗位位置评分</h4>
          <div className="relative p-4" style={{ height: '300px' }}>
            <div className="relative w-full h-full">
              {mobilePositions.map((position) => {
                const score = calculatePositionScore(member.abilities, position.weights);
                const isBest = bestMatch.position === position.name;

                // 移动端金字塔位置映射 - 整体向上移动
                const mobilePositionMap: { [key: string]: { x: number; y: number } } = {
                  // 第1层 - y: 5%
                  'CEO': { x: 50, y: 8 },
                  
                  // 第2层 - y: 22% (间距14%)
                  'CTO': { x: 30, y: 30 },
                  'CFO': { x: 70, y: 30 },
                  'COO': { x: 50, y: 30 },
                  
                  // 第3层 - y: 36% (间距14%)
                  'CMO': { x: 20, y: 50 },
                  'CHRO': { x: 40, y: 50},
                  'CIO': { x: 60, y: 50 },
                  'CDO': { x: 80, y: 50 },
                  
                  // 第4层 - y: 50% (间距14%)
                  '创业导师': { x: 15, y: 70 },
                  '产品经理': { x: 50, y: 70 },
                  'AI架构师': { x: 85, y: 70 },
                  
                  // 第5层 - y: 80% (间距14%)
                  '市场拓展': { x: 35, y: 90 },
                  
                  // 第6层 - y: 90% (间距14%)
                  '行政专员': { x: 65, y: 100 }
                };

                const pos = mobilePositionMap[position.name] || { x: 50, y: 95 };

                return (
                  <div
                    key={position.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`
                    }}
                  >
                    <div className={`min-w-max max-w-20 h-7 px-1.5 py-0.5 rounded text-center shadow-lg transition-all duration-300 flex flex-col items-center justify-center ${
                      isBest ? 'bg-accent text-accent-foreground' : 'bg-secondary text-foreground'
                    }`}>
                      <div className="text-[11px] font-medium leading-none whitespace-nowrap">{position.name}</div>
                      <div className={`text-[10px] leading-none mt-0.5 ${!isBest ? 'text-accent' : ''}`}>{score}分</div>
                    </div>
                  </div>
                );
              })}


            </div>
          </div>
        </div>

        {/* 能力雷达图 - 增大尺寸 */}
        <div className="space-y-3">
          <h4 className="font-medium text-center text-sm">能力雷达</h4>
          <div className="h-[320px] flex items-center justify-center">
            <EnhancedHexagonChart abilities={member.abilities} />
          </div>
        </div>
      </div>
    </div>
  );
};

// 增强的雷达图组件
const EnhancedHexagonChart = ({ abilities }: { abilities: any }) => {
  const size = 300;
  const center = size / 2;
  const radius = 100;

  const abilityNames = ['创新', '跨界', '资源', '技术', '商业', '领导'];

  const getHexagonPoints = (values: number[]) => {
    return values.map((value, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const r = (value / 100) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  const currentValues = abilityNames.map(name => abilities[name] || 0);
  const dataPoints = getHexagonPoints(currentValues);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="280" viewBox={`0 0 ${size} ${size}`} className="mb-4">
        {/* Grid */}
        {[20, 40, 60, 80, 100].map(level => (
          <polygon
            key={level}
            points={getHexagonPoints(new Array(6).fill(level))}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.8"
            opacity={0.3}
          />
        ))}

        {/* Axis lines */}
        {abilityNames.map((_, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="0.8"
              opacity={0.5}
            />
          );
        })}

        {/* Data area */}
        <polygon
          points={dataPoints}
          fill="hsl(var(--accent))"
          fillOpacity={0.3}
          stroke="hsl(var(--accent))"
          strokeWidth={2.5}
        />

        {/* Data points */}
        {currentValues.map((value, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const r = (value / 100) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={4}
              fill="hsl(var(--accent))"
              stroke="white"
              strokeWidth={1.5}
            />
          );
        })}

        {/* Labels with values - 增大字体 */}
        {abilityNames.map((name, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const labelRadius = radius + 25;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          const value = currentValues[index];

          return (
            <g key={name}>
              <text
                x={x}
                y={y - 6}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="hsl(var(--foreground))"
                fontWeight="500"
              >
                {name}
              </text>
              <text
                x={x}
                y={y + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill="hsl(var(--accent))"
                fontWeight="700"
              >
                {value}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 能力条形图 - 仿照大屏端设计 */}
      <div className="w-full space-y-2">
        <div className="grid grid-cols-3 gap-3">
          {abilityNames.map(name => {
            const value = abilities[name] || 0;
            return (
              <div key={name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-foreground">{name}</span>
                  <span className="text-xs text-accent font-bold">{value}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HexagonChart = ({ abilities, positionWeights }: { abilities: any, positionWeights: any }) => {
  const size = 240;
  const center = size / 2;
  const radius = 90;

  const abilityNames = ['创新', '跨界', '资源', '技术', '商业', '领导'];

  const getHexagonPoints = (values: number[]) => {
    return values.map((value, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const r = (value / 100) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  const gridPoints = [20, 40, 60, 80, 100].map(level =>
    getHexagonPoints(new Array(6).fill(level))
  );

  const currentValues = abilityNames.map(name => abilities[name] || 0);
  const dataPoints = getHexagonPoints(currentValues);

  return (
    <div className="w-full mx-auto">
      <svg width="100%" height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid */}
        {gridPoints.map((points, index) => (
          <polygon
            key={index}
            points={points}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity={0.3}
          />
        ))}

        {/* Axis lines */}
        {abilityNames.map((_, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              opacity={0.5}
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="hsl(var(--accent))"
          fillOpacity={0.2}
          stroke="hsl(var(--accent))"
          strokeWidth="2"
        />

        {/* Data points */}
        {currentValues.map((value, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const r = (value / 100) * radius;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill="hsl(var(--accent))"
              stroke="white"
              strokeWidth="1"
            />
          );
        })}

        {/* Labels */}
        {abilityNames.map((name, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const x = center + (radius + 15) * Math.cos(angle);
          const y = center + (radius + 15) * Math.sin(angle);
          const isWeighted = positionWeights[name] > 0;

          return (
            <text
              key={name}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              className={`text-xs font-light transition-colors duration-300 ${isWeighted ? 'fill-accent font-medium' : 'fill-muted-foreground'}`}
            >
              {name}
              <tspan dx="5">{currentValues[index]}</tspan>
            </text>
          );
        })}
      </svg>

      {/* Ability scores */}
      <div className="mt-4 space-y-2">
        {abilityNames.map(name => {
          const value = abilities[name] || 0;
          const isWeighted = positionWeights[name] > 0;

          return (
            <div key={name} className="flex justify-between items-center">
              <span className={`text-sm transition-colors duration-300 ${isWeighted ? 'text-accent font-medium' : 'text-muted-foreground'
                }`}>
                {name}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${isWeighted ? 'bg-accent' : 'bg-muted-foreground'
                      }`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className={`text-sm font-medium min-w-[2rem] text-right transition-colors duration-300 ${isWeighted ? 'text-accent' : 'text-foreground'
                  }`}>
                  {value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeeksSection;
