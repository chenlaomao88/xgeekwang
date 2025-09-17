import { useState } from 'react';
import { Lightbulb, Users, Zap } from 'lucide-react';

const CoreModules = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'creative',
      title: '创意熔炉',
      subtitle: '分享初步想法闭门会议室',
      icon: Lightbulb,
      stats: { projects: 0, discussions: 0, success: 0 },
      features: [
        '动态知识图谱',
        '创意价值雷达', 
        '创新沙盘预演',
        '灵感火花值'
      ],
      description: '让每一个想法都有发声的机会，通过智能关联和深度讨论，将创意雏形塑造成可执行的项目方案。基于"空即是有的容器"理念，以空白创造想象空间。',
      color: 'border-blue-500',
      detailContent: {
        features: [
          {
            name: '动态知识图谱',
            description: '关联历史相似提案，可视化知识关联网络',
            status: '142个活跃节点'
          },
          {
            name: '创意价值雷达',
            description: 'AI智能体评估市场潜力，六维雷达图展示',
            status: '89%准确率'
          },
          {
            name: '创新沙盘预演',
            description: '标注颠覆性技术路线，引发深度思辨',
            status: '仅限极客成员'
          },
          {
            name: '灵感火花值',
            description: '实时显示跨界讨论热度和地域分布',
            status: '实时更新'
          }
        ]
      }
    },
    {
      id: 'resources',
      title: '资源好兄弟',
      subtitle: '连接项目与资源的桥梁',
      icon: Users,
      stats: { connections: 0, experts: 0, success: 0 },
      features: [
        '项目诊断',
        '资源对接',
        '人才时间银行',
        '创意竞拍'
      ],
      description: '汇聚行业顶尖专家和投资人，为有潜力的项目提供精准的资源匹配和专业指导。通过"信息建筑"理念，创造有温度的数字资源平台。',
      color: 'border-green-500',
      detailContent: {
        features: [
          {
            name: '项目诊断',
            description: '团队接受顶尖成员的犀利提问和建议',
            status: '3个精选案例'
          },
          {
            name: '资源对接',
            description: '连接导师、投资人、技术专家',
            status: '9位专家'
          },
          {
            name: '人才时间银行',
            description: '"出租"1小时专家咨询时间',
            status: '72小时内可预约'
          },
          {
            name: '创意竞拍',
            description: '任务发布与解决方案征集区',
            status: '实时竞拍'
          }
        ]
      }
    },
    {
      id: 'innovation',
      title: '跨界创新汇',
      subtitle: '不同领域的思维碰撞',
      icon: Zap,
      stats: { collaborations: 0, breakthroughs: 0, patents: 0 },
      features: [
        '知识炼金工坊',
        '创意星图',
        '跨界碰撞室'
      ],
      description: '打破行业壁垒，促进不同领域专家的深度交流，孕育突破性的创新解决方案。将复杂创新过程转化为直觉化的空间叙事。\n\n',
      color: 'border-purple-500',
      detailContent: {
        features: [
          {
            name: '知识炼金工坊',
            description: '知识重组与深度加工的认知思维空间',
            status: '23个突破性方案'
          },
          {
            name: '创意星图',
            description: '拖拽关联不同领域生成创新矩阵',
            status: '实时匹配度显示'
          },
          {
            name: '跨界碰撞室',
            description: '不同领域专家视频讨论',
            status: '定期直播开放'
          }
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="modules">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-balance">
            三大核心模块
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            基于CYQ1D3S设计理念，构建强大而高效的创新生态系统
          </p>
        </div>

        {/* All modules expanded by default */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isExpanded={expandedModule === module.id}
              onExpand={setExpandedModule}
            />
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {expandedModule && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4"
          onClick={() => setExpandedModule(null)}
        >
          {/* Desktop Version */}
          <div 
            className="hidden md:block bg-card rounded-lg border w-[90vw] max-w-4xl h-fit max-h-[90vh] overflow-auto hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <ModuleDetail 
              module={modules.find(m => m.id === expandedModule)!}
              onClose={() => setExpandedModule(null)}
            />
          </div>
          
          {/* Mobile Version - Responsive height with scrollable content */}
          <div className="md:hidden w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <div 
              className="bg-card rounded-lg w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileModuleDetail 
                module={modules.find(m => m.id === expandedModule)!}
                onClose={() => setExpandedModule(null)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ModuleCard = ({ 
  module, 
  isExpanded, 
  onExpand
}: {
  module: any;
  isExpanded: boolean;
  onExpand: (id: string | null) => void;
}) => {
  const Icon = module.icon;

  return (
    <div
      className={`module-card p-6 transition-all duration-300 h-auto ${module.color}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-xl">{module.title}</h3>
            <p className="text-sm text-muted-foreground">{module.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 whitespace-pre-line h-20">
        {module.description}
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {module.features.map((feature, index) => (
          <div 
            key={feature}
            className="text-xs bg-secondary/50 rounded px-3 py-2 text-center font-medium"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-between text-center mb-6">
        {Object.entries(module.stats).map(([key, value]) => (
          <div key={key}>
            <div className="text-2xl font-light text-accent">{value as number}</div>
            <div className="text-xs text-muted-foreground capitalize">{key}</div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button 
        className="w-full btn-primary text-sm py-3"
        onClick={() => onExpand(module.id)}
      >
        深入探索 {module.title}
      </button>
    </div>
  );
};

const ModuleDetail = ({ module, onClose }: { module: any; onClose: () => void }) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
            <module.icon className="w-8 h-8 text-accent" />
          </div>
          <div>
            <h2 className="text-3xl font-light">{module.title}</h2>
            <p className="text-muted-foreground">{module.subtitle}</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
          {module.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {module.detailContent.features.map((feature, index) => (
            <div key={index} className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3 text-accent">{feature.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {feature.status}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
          <h3 className="font-medium text-lg mb-4">如何使用</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Web端仅提供展示和宣传，完整功能通过微信小程序完成。
          </p>
          <button 
            className="btn-primary"
            onClick={() => alert('小程序搭建中，敬请期待')}
          >
            扫码进入小程序
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileModuleDetail = ({ module, onClose }: { module: any; onClose: () => void }) => {
  return (
    <div className="flex flex-col h-[90vh] max-h-[600px] rounded-lg overflow-hidden">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 border-b">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <module.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-light">{module.title}</h2>
              <p className="text-sm text-muted-foreground">{module.subtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors ml-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto hide-scrollbar p-6 bg-background">
        <div className="min-h-full flex flex-col">
          <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-shrink-0">
            {module.description}
          </p>

          <div className="grid grid-cols-1 gap-4 flex-grow">
            {module.detailContent.features.map((feature: any, index: number) => (
              <div key={index} className="bg-secondary/20 rounded-lg p-4 flex-shrink-0">
                <h3 className="font-medium text-lg mb-2 text-accent">{feature.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-2 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {feature.status}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20 flex-shrink-0">
            <h3 className="font-medium text-lg mb-3">如何使用</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Web端仅提供展示和宣传，完整功能通过微信小程序完成。
            </p>
            <button 
              className="btn-primary text-sm px-4 py-2"
              onClick={() => alert('小程序搭建中，敬请期待')}
            >
              扫码进入小程序
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreModules;
