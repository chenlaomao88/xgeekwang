import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ApplyDialog from "./ApplyDialog";

interface ManifestDialogProps {
  trigger: React.ReactNode;
  className?: string;
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h3 className="text-base font-medium tracking-wide">{title}</h3>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
      {children}
    </div>
  </section>
);

export default function ManifestDialog({ trigger, className }: ManifestDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn("max-w-3xl sm:rounded-lg select-text", className)}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">香河困不住的火种</DialogTitle>
          <DialogDescription className="text-sm">北漂精英，是时候回我们的主场了</DialogDescription>
        </DialogHeader>


        <div className="space-y-6">
          <Section title="三重现实">
            <ul className="list-disc pl-5 space-y-1">
              <li>憋屈：本领被“本地规矩”束缚，想做事却被按住。</li>
              <li>排挤：机会被剥夺，创新火花被浇灭。</li>
              <li>窒息：拒绝改变的“安稳”，才华与梦想被埋没。</li>
            </ul>
          </Section>

   

          <Separator />

          <Section title="我们是谁">
            <ul className="list-disc pl-5 space-y-1">
              <li>在香河被排挤得憋出内伤的北漂技术大牛、行业专家！</li>
              <li>跨了几个行业，却总感觉缺了点什么、找不到破局点的连续创业者！</li>
              <li>钱在手里，却苦于找不到真正靠谱项目、筛人筛到眼瞎的投资人！</li>
              <li>公司内部想创新，却感觉死水一潭、使不上劲儿的创新负责人！</li>
            <p className="font-bold">一句话：都是价值被低估，前路被堵死的“狠角色”！</p>  
            </ul>
          </Section>

          <Separator />

          <Section title="我们要做什么">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-bold">聚沙成塔</span>：散是满天星，聚是燎原火！把散落在香河各个角落的北漂精英聚起来，打破信息孤岛，形成强大的“北漂创新共同体”。</li>
              <li><span className="font-bold">用新实力的先进性碾碎傲慢的旧世界</span>：不是我们不给“土著”活路，是他们先堵死了我们的路！我们只能创造新世界！守着一些垃圾产业，靠关系、靠排挤榨取那点可怜的剩余价值？以为能永远躺着赚钱？做梦！我们要用先进的认知、跨界的视野、过硬的技术，开创新产业，或者干脆掀翻那些不思进取的旧摊子！</li>
              <li><span className="font-bold">点燃灯塔，照亮香河的未来！</span>：没错我们这里就盛产中国的马斯克和乔布斯，我们要成为香河最亮的那束光！告诉那些被“内卷”、“内斗”、“关系学”毒害的本地年轻人：“我们改变你们！” 打破那套害人害己的毒文化，把竞争从“互相踩”变成“一起闯”！把精力从“搞人”转向“搞事”、“搞创新”！让香河看看，什么才是真正能驱动进步的力量！</li>
            </ul>
          </Section>

         
          <div className="flex flex-wrap gap-3 pt-2">
            <ApplyDialog trigger={<button className="btn-primary">申请加入</button>} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
