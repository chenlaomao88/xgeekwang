export interface Member {
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
}

export interface Position {
  name: string;
  level: number;
  weights: {
    创新: number;
    跨界: number;
    资源: number;
    技术: number;
    商业: number;
    领导: number;
  };
  x: number;
  y: number;
}