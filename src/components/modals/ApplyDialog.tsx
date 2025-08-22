import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import qrWechat from "@/assets/qr-wechat.jpg";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h3 className="text-base font-medium tracking-wide">{title}</h3>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
      {children}
    </div>
  </section>
);

interface ApplyDialogProps {
  trigger: React.ReactNode;
  mode?: "apply" | "openday";
}

export default function ApplyDialog({ trigger, mode = "apply" }: ApplyDialogProps) {
  const [copied, setCopied] = useState(false);
  const email = "helloxgeek@hotmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      alert("单击打开邮箱按钮或手动复制本邮箱：" + email);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg sm:rounded-lg select-text">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">
            {mode === "openday" ? "预约开放日" : "申请加入 X极客"}
          </DialogTitle>
          <DialogDescription>
            {mode === "openday" ? "留下联系方式，我们将尽快与您确认场次。" : ""}
          </DialogDescription>
        </DialogHeader>

        {mode === "openday" ? (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">开放日预约清单</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>姓名/昵称</li>
                <li>联系方式（微信/邮箱）</li>
                <li>参与人数</li>
                <li>感兴趣的主题</li>
                <li>期望参与的活动类型</li>
                <li>专业技能或资源</li>
                <li>项目阶段（想法/原型/已上线）</li>
                <li>期望获得的帮助</li>
                <li>可投入的时间</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" className="btn-primary" onClick={() => {
                copyEmail();
                alert("已复制邮箱，请将预约信息发送至邮箱，我们会在1个工作日内回复。");
              }}>
                发送预约信息（邮箱）
              </button>
              <button type="button" className="btn-outline" onClick={copyEmail}>
                {copied ? "已复制邮箱" : "复制邮箱地址"}
              </button>
              <a className="btn-outline" href={`mailto:${email}`}>
                打开邮箱
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Section title="加入门槛">
              <ol className="list-decimal pl-5 space-y-1">
                <li>三位老会员举荐或拿得出手的硬成果</li>
                <li>价值观/内驱力考试（硬核）</li>
                <li>CYQ-1D3S 体系培训（建设中）</li>
                <li>CYQ 创业学三层锤炼，获得孵化导师认证（建设中）</li>
              </ol>
            </Section>

            <Section title="你将获得">
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-3 border rounded-md">平台资源全解锁</div>
                <div className="p-3 border rounded-md">顶级孵化支持</div>
                <div className="p-3 border rounded-md">高质量人脉与机会</div>
              </div>
            </Section>

            <div className="text-center pt-4">
              <p>关注公众号留言 申请加入</p>
              <img 
                src={qrWechat} 
                alt="公众号二维码" 
                className="mx-auto mt-2 w-32 h-32 object-contain qr-code"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
