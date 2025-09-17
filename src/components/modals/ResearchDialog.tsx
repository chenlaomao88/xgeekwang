import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import qrWechat from "@/assets/qr-wechat.jpg";

interface ResearchDialogProps {
  trigger: React.ReactNode;
}

export default function ResearchDialog({ trigger }: ResearchDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg sm:rounded-lg select-text">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">香河创新与创业研究报告</DialogTitle>
          <DialogDescription>探索科技驱动的未来机遇</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">研究报告清单</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>香河科技创新趋势分析</li>
              <li>创业生态与投资机会报告</li>
              <li>人工智能在本地产业的应用前景</li>
              <li>绿色科技与可持续发展方案</li>
              <li>数字转型最佳实践案例</li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">获取完整版报告</h3>
            <img 
                src={qrWechat} 
                alt="公众号二维码" 
                className="w-32 h-32 mb-4 qr-code"
                loading="lazy"
                decoding="async"
              />
            <p className="text-sm mb-2">扫码公众号回复【研究报告】获取完整版</p>
            <p className="text-xs text-muted-foreground">暂缓开放，开放日另行通知</p>
          </div>
        </div>
        
        <div className="flex justify-center pt-4">
          <DialogTrigger asChild>
            <button className="btn-primary text-sm px-8">关闭</button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
}