import { useState } from 'react';
import memberZhang from '@/assets/member-zhang.jpg';
import memberLi from '@/assets/member-li.jpg';
import memberWang from '@/assets/member-wang.jpg';
import memberChen from '@/assets/member-chen.jpg';
import memberDeng from '@/assets/member-deng.jpg';
import memberFeng from '@/assets/member-feng.jpg';

const MembersSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>('全栈开发');

  const members = [
    {
      id: '1',
      name: '张工',
      title: 'AI架构师',
      avatar: memberZhang,
      story: '前百度AI研究院专家，专注于机器学习算法优化，曾主导3个突破性AI产品的开发。',
      abilities: {
        创新: 85,
        跨界: 70,
        资源: 90,
        技术: 95,
        商业: 55,
        领导: 75
      }
    },
    {
      id: '2',
      name: '李博士',
      title: '硬件设计专家',
      avatar: memberLi,
      story: '华为资深硬件工程师，拥有18项发明专利，在5G通信领域有重要贡献。',
      abilities: {
        创新: 78,
        跨界: 65,
        资源: 70,
        技术: 92,
        商业: 60,
        领导: 68
      }
    },
    {
      id: '3',
      name: '王总',
      title: '连续创业者',
      avatar: memberWang,
      story: '三次创业经历，两次成功退出，擅长将技术创新转化为商业价值。',
      abilities: {
        创新: 88,
        跨界: 82,
        资源: 95,
        技术: 60,
        商业: 92,
        领导: 89
      }
    },
    {
      id: '4',
      name: '陈设计师',
      title: 'UX设计总监',
      avatar: memberChen,
      story: '曾任职于苹果设计团队，主导多个获奖产品的用户体验设计。',
      abilities: {
        创新: 92,
        跨界: 88,
        资源: 75,
        技术: 70,
        商业: 65,
        领导: 80
      }
    },
    {
      id: '5',
      name: '邓前端',
      title: '前端开发专家',
      avatar: memberDeng,
      story: '拥有8年前端开发经验，精通React、Vue等主流框架，曾就职于腾讯，主导多个大型项目的前端架构设计。',
      abilities: {
        创新: 85,
        跨界: 75,
        资源: 70,
        技术: 95,
        商业: 60,
        领导: 75
      }
    },
    {
      id: '6',
      name: '冯老师',
      title: '编程培训机构教师',
      avatar: memberFeng,
      story: '资深编程教育专家，拥有10年编程教学经验，擅长将复杂技术概念转化为易于理解的教学内容，培养了数千名优秀程序员。',
      abilities: {
        创新: 80,
        跨界: 90,
        资源: 85,
        技术: 85,
        商业: 70,
        领导: 80
      }
    }
  ];

  const positions = {
    '全栈开发': { 创新: 0.8, 跨界: 0.6, 资源: 0.4, 技术: 1.0, 商业: 0.3, 领导: 0.5 },
    '产品经理': { 创新: 0.9, 跨界: 0.8, 资源: 0.7, 技术: 0.4, 商业: 0.9, 领导: 0.8 },
    '投资分析': { 创新: 0.7, 跨界: 0.9, 资源: 1.0, 技术: 0.3, 商业: 1.0, 领导: 0.6 },
    'AI研究员': { 创新: 1.0, 跨界: 0.7, 资源: 0.5, 技术: 1.0, 商业: 0.2, 领导: 0.4 }
  };

  const calculatePositionScore = (abilities: any, position: string) => {
    const weights = positions[position as keyof typeof positions];
    let totalScore = 0;
    let totalWeight = 0;

    Object.entries(weights).forEach(([ability, weight]) => {
      totalScore += abilities[ability] * weight;
      totalWeight += weight;
    });

    return Math.round(totalScore / totalWeight);
  };

  return (
    <section className="py-20" id="members">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-balance">
            X极客成员
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            展示每位成员的专业能力和创新贡献，构建基于能力的协作网络
          </p>
        </div>

        {/* Position Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-secondary/50 rounded-lg p-1">
            {Object.keys(positions).map((position) => (
              <button
                key={position}
                onClick={() => setSelectedPosition(position)}
                className={`px-4 py-2 rounded-md text-sm font-light transition-all duration-200 ${
                  selectedPosition === position
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              isSelected={selectedMember === member.id}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              positionScore={calculatePositionScore(member.abilities, selectedPosition)}
              selectedPosition={selectedPosition}
            />
          ))}
        </div>

        {/* Detailed View */}
        {selectedMember && (
          <div className="module-card p-8 animate-scale-in">
            {(() => {
              const member = members.find(m => m.id === selectedMember);
              if (!member) return null;

              return (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-20 h-20 rounded-full border-2 border-accent/20"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div>
                        <h3 className="text-2xl font-light">{member.name}</h3>
                        <p className="text-muted-foreground">{member.title}</p>
                        <div className="mt-2 text-lg text-accent font-medium">
                          {selectedPosition}适配度: {calculatePositionScore(member.abilities, selectedPosition)}分
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">创新故事</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.story}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4">六边形能力图</h4>
                    <HexagonChart 
                      abilities={member.abilities} 
                      positionWeights={positions[selectedPosition as keyof typeof positions]}
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

const MemberCard = ({ 
  member, 
  isSelected, 
  onClick, 
  positionScore, 
  selectedPosition 
}: {
  member: any;
  isSelected: boolean;
  onClick: () => void;
  positionScore: number;
  selectedPosition: string;
}) => {
  return (
    <div
      className={`module-card p-6 cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-accent scale-105' : ''
      }`}
      onClick={onClick}
    >
      <div className="text-center space-y-4">
        <img 
          src={member.avatar} 
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 mx-auto rounded-full border-2 border-accent/20"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        
        <div>
          <h3 className="font-medium text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.title}</p>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-light text-accent">
            {positionScore}
          </div>
          <div className="text-xs text-muted-foreground">
            {selectedPosition}适配度
          </div>
        </div>

        <button className="w-full btn-outline text-sm py-2">
          查看详情
        </button>
      </div>
    </div>
  );
};

const HexagonChart = ({ abilities, positionWeights }: { abilities: any; positionWeights: any }) => {
  const abilityKeys = Object.keys(abilities);
  const maxValue = 100;
  
  // Calculate hexagon points
  const getPoint = (index: number, value: number, radius: number = 100) => {
    const angle = (index * 60 - 90) * (Math.PI / 180);
    const scaledRadius = (value / maxValue) * radius;
    return {
      x: 150 + Math.cos(angle) * scaledRadius,
      y: 150 + Math.sin(angle) * scaledRadius
    };
  };

  const getOuterPoint = (index: number, radius: number = 120) => {
    const angle = (index * 60 - 90) * (Math.PI / 180);
    return {
      x: 150 + Math.cos(angle) * radius,
      y: 150 + Math.sin(angle) * radius
    };
  };

  return (
    <div className="relative">
      <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
        {/* Background hexagon grid */}
        {[20, 40, 60, 80, 100].map((level) => (
          <polygon
            key={level}
            points={abilityKeys.map((_, i) => {
              const point = getPoint(i, level);
              return `${point.x},${point.y}`;
            }).join(' ')}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Ability value polygon */}
        <polygon
          points={abilityKeys.map((ability, i) => {
            const point = getPoint(i, abilities[ability]);
            return `${point.x},${point.y}`;
          }).join(' ')}
          fill="hsl(var(--accent))"
          fillOpacity="0.2"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
        />

        {/* Data points */}
        {abilityKeys.map((ability, i) => {
          const point = getPoint(i, abilities[ability]);
          const weight = positionWeights[ability] || 0;
          
          return (
            <g key={ability}>
              <circle
                cx={point.x}
                cy={point.y}
                r={weight > 0.7 ? "6" : "4"}
                fill="hsl(var(--accent))"
                stroke="hsl(var(--background))"
                strokeWidth="2"
              />
            </g>
          );
        })}

        {/* Labels */}
        {abilityKeys.map((ability, i) => {
          const labelPoint = getOuterPoint(i, 140);
          const weight = positionWeights[ability] || 0;
          
          return (
            <g key={`label-${ability}`}>
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-sm font-light ${
                  weight > 0.7 ? 'fill-accent font-medium' : 'fill-foreground/60'
                }`}
              >
                {ability}
              </text>
              <text
                x={labelPoint.x}
                y={labelPoint.y + 16}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-muted-foreground"
              >
                {abilities[ability]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default MembersSection;