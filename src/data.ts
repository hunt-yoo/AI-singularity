import {
  Brain, Users, Network, MessageSquare, Snowflake, Box, HeartPulse, Briefcase,
  Activity, GitMerge, Eye, Trophy, Layers, Image as ImageIcon, Mic, MonitorPlay,
  Zap, Type, Wand2, GitBranch, Gamepad2, Share2, BookOpen, MessageCircle,
  Dna, Palette, Code, Bot, BrainCircuit, Video, Cpu, LucideIcon
} from 'lucide-react';

export type AIEvent = {
  id: string;
  year: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  chartType?: 'line' | 'bar' | 'network';
  chartData?: any[];
  chartConfig?: any;
};

export const aiEvents: AIEvent[] = [
  {
    id: "turing-test",
    year: 1950,
    title: "圖靈測試與《計算機器與智慧》",
    description: "艾倫·圖靈發表了論文《計算機器與智慧》，提出了著名的「圖靈測試」，探討機器是否能展現出等同或無法區分於人類的智慧行為。這標誌著人工智慧概念的正式誕生。",
    image: "https://picsum.photos/seed/turing/800/600?blur=2",
    icon: Brain,
    chartType: 'network',
  },
  {
    id: "dartmouth",
    year: 1956,
    title: "達特茅斯會議",
    description: "約翰·麥卡錫等人在達特茅斯學院召開了為期兩個月的夏季研討會，正式確立了「人工智慧」（Artificial Intelligence）這一術語，被廣泛認為是 AI 領域的誕生地。",
    image: "https://picsum.photos/seed/dartmouth/800/600?blur=2",
    icon: Users,
  },
  {
    id: "perceptron",
    year: 1957,
    title: "感知器 (Perceptron)",
    description: "法蘭克·羅森布拉特發明了感知器，這是第一個能夠學習的類神經網路模型。它為後來的機器學習與深度學習奠定了基礎，儘管當時只能解決線性可分問題。",
    image: "https://picsum.photos/seed/perceptron/800/600?blur=2",
    icon: Network,
  },
  {
    id: "eliza",
    year: 1966,
    title: "ELIZA 聊天機器人",
    description: "麻省理工學院的約瑟夫·維森鮑姆開發了 ELIZA，這是世界上第一個自然語言處理程式。它透過簡單的模式匹配來模擬心理治療師，展示了人機對話的初步可能。",
    image: "https://picsum.photos/seed/eliza/800/600?blur=2",
    icon: MessageSquare,
  },
  {
    id: "ai-winter-1",
    year: 1969,
    title: "第一次 AI 寒冬",
    description: "馬文·明斯基和西摩·派普特出版了《感知器》一書，指出了單層神經網路的嚴重限制（如無法解決 XOR 問題），導致神經網路研究資金大幅削減，進入第一次 AI 寒冬。",
    image: "https://picsum.photos/seed/winter/800/600?blur=2",
    icon: Snowflake,
  },
  {
    id: "shrdlu",
    year: 1970,
    title: "SHRDLU 自然語言理解",
    description: "特里·威諾格拉德開發了 SHRDLU 系統，讓使用者能用自然語言指示電腦在一個虛擬的「積木世界」中移動物體，展現了早期 AI 結合語言與邏輯推理的能力。",
    image: "https://picsum.photos/seed/shrdlu/800/600?blur=2",
    icon: Box,
  },
  {
    id: "mycin",
    year: 1972,
    title: "MYCIN 專家系統",
    description: "史丹佛大學開發了 MYCIN，這是一個早期的反向鏈接專家系統，用於識別導致嚴重感染的細菌並推薦抗生素。它證明了 AI 在特定專業領域能達到甚至超越人類專家的水準。",
    image: "https://picsum.photos/seed/mycin/800/600?blur=2",
    icon: HeartPulse,
  },
  {
    id: "xcon",
    year: 1980,
    title: "XCON 商業專家系統",
    description: "卡內基梅隆大學為 DEC 公司開發了 XCON（R1），這是第一個取得巨大商業成功的專家系統，每年為公司節省數千萬美元，引發了 80 年代專家系統的熱潮。",
    image: "https://picsum.photos/seed/xcon/800/600?blur=2",
    icon: Briefcase,
  },
  {
    id: "hopfield",
    year: 1982,
    title: "霍普菲爾德神經網路",
    description: "約翰·霍普菲爾德發明了霍普菲爾德網路，這是一種結合了物理學概念的遞迴神經網路，重新點燃了學界對神經網路研究的興趣。",
    image: "https://picsum.photos/seed/hopfield/800/600?blur=2",
    icon: Activity,
  },
  {
    id: "backprop",
    year: 1986,
    title: "反向傳播演算法",
    description: "傑弗里·辛頓等人發表了關於反向傳播演算法（Backpropagation）的著名論文，有效解決了多層神經網路的訓練問題，成為現代深度學習的核心基石。",
    image: "https://picsum.photos/seed/backprop/800/600?blur=2",
    icon: GitMerge,
  },
  {
    id: "lenet",
    year: 1989,
    title: "LeNet-1 卷積神經網路",
    description: "楊立昆（Yann LeCun）提出了卷積神經網路（CNN）架構 LeNet，並成功應用於美國郵政服務的支票手寫郵遞區號辨識，是電腦視覺領域的重大突破。",
    image: "https://picsum.photos/seed/lenet/800/600?blur=2",
    icon: Eye,
  },
  {
    id: "deep-blue",
    year: 1997,
    title: "深藍擊敗卡斯帕洛夫",
    description: "IBM 的超級電腦「深藍」（Deep Blue）在六局比賽中擊敗了當時的世界西洋棋冠軍加里·卡斯帕洛夫。這是電腦首次在標準比賽時限內擊敗人類世界冠軍。",
    image: "https://picsum.photos/seed/deepblue/800/600?blur=2",
    icon: Trophy,
    chartType: 'bar',
    chartData: [
      { name: '人類', value: 3 },
      { name: '深藍', value: 200000000 },
    ],
    chartConfig: {
      yAxisLabel: '每秒評估局勢數 (對數)',
      dataKey: 'value',
      logScale: true
    }
  },
  {
    id: "deep-learning",
    year: 2006,
    title: "「深度學習」時代開啟",
    description: "傑弗里·辛頓發表了深度信念網路（DBN）的快速學習演算法，並正式推廣了「深度學習」（Deep Learning）一詞，帶領神經網路走出低谷。",
    image: "https://picsum.photos/seed/deeplearning/800/600?blur=2",
    icon: Layers,
  },
  {
    id: "imagenet",
    year: 2009,
    title: "ImageNet 計畫啟動",
    description: "李飛飛團隊發布了 ImageNet 資料集，包含超過千萬張人工標註的圖片。這個龐大的資料庫為後來深度學習在電腦視覺領域的爆發提供了不可或缺的燃料。",
    image: "https://picsum.photos/seed/imagenet/800/600?blur=2",
    icon: ImageIcon,
  },
  {
    id: "siri",
    year: 2011,
    title: "Siri 語音助理",
    description: "Apple 將 Siri 整合進 iPhone 4S，這是第一個廣泛普及於消費級設備的智慧語音助理，讓一般大眾首次體驗到 AI 在日常生活中的應用。",
    image: "https://picsum.photos/seed/siri/800/600?blur=2",
    icon: Mic,
  },
  {
    id: "watson",
    year: 2011,
    title: "Watson 贏得《邊緣危機》",
    description: "IBM Watson 在益智問答節目《Jeopardy!》中擊敗了兩位人類歷史冠軍。它展現了 AI 在自然語言理解、開放領域問答與即時資訊檢索上的強大能力。",
    image: "https://picsum.photos/seed/watson/800/600?blur=2",
    icon: MonitorPlay,
  },
  {
    id: "alexnet",
    year: 2012,
    title: "AlexNet 視覺辨識突破",
    description: "AlexNet 在 ImageNet 圖像辨識競賽中以壓倒性的優勢奪冠，錯誤率遠低於傳統方法。這場勝利向世界證明了 GPU 加速與深度卷積神經網路的巨大潛力。",
    image: "https://picsum.photos/seed/alexnet/800/600?blur=2",
    icon: Zap,
  },
  {
    id: "word2vec",
    year: 2013,
    title: "Word2Vec 詞嵌入模型",
    description: "Google 研究團隊發表了 Word2Vec，能將詞彙轉換為高維度向量，並保留詞彙間的語義關係（如「國王 - 男人 + 女人 = 女王」），徹底改變了自然語言處理領域。",
    image: "https://picsum.photos/seed/word2vec/800/600?blur=2",
    icon: Type,
  },
  {
    id: "gan",
    year: 2014,
    title: "GAN 生成對抗網路",
    description: "伊恩·古德費洛提出了生成對抗網路（GAN），透過生成器與判別器的互相博弈，AI 首次獲得了創造極度逼真圖像的能力，開啟了生成式 AI 的新紀元。",
    image: "https://picsum.photos/seed/gan/800/600?blur=2",
    icon: Wand2,
  },
  {
    id: "resnet",
    year: 2015,
    title: "ResNet 殘差網路",
    description: "微軟研究院提出了 ResNet，透過「殘差連接」成功解決了極深神經網路的梯度消失問題，讓訓練上百層的神經網路成為可能，大幅刷新了各項視覺任務紀錄。",
    image: "https://picsum.photos/seed/resnet/800/600?blur=2",
    icon: GitBranch,
  },
  {
    id: "alphago",
    year: 2016,
    title: "AlphaGo 戰勝李世乭",
    description: "DeepMind 開發的 AlphaGo 以 4:1 擊敗了世界圍棋冠軍李世乭。圍棋因其極高的複雜度被認為是 AI 的終極挑戰之一，這場勝利震驚了全世界。",
    image: "https://picsum.photos/seed/alphago/800/600?blur=2",
    icon: Gamepad2,
    chartType: 'line',
    chartData: [
      { name: '2014', value: 2000 },
      { name: '2015', value: 3144 },
      { name: '2016', value: 3739 },
      { name: '2017', value: 4500 },
    ],
    chartConfig: {
      yAxisLabel: 'Elo 等級分',
      dataKey: 'value'
    }
  },
  {
    id: "transformer",
    year: 2017,
    title: "Transformer 模型發表",
    description: "Google 發表了《Attention Is All You Need》，提出了 Transformer 架構。它完全依賴注意力機制，大幅提升了平行運算能力，奠定了現代大型語言模型（LLM）的基礎。",
    image: "https://picsum.photos/seed/transformer/800/600?blur=2",
    icon: Share2,
    chartType: 'network',
  },
  {
    id: "bert",
    year: 2018,
    title: "BERT 模型",
    description: "Google 推出了 BERT 模型，這是一種雙向 Transformer 預訓練模型，在多項自然語言處理任務上打破了紀錄，標誌著 NLP 進入了「預訓練+微調」的新範式。",
    image: "https://picsum.photos/seed/bert/800/600?blur=2",
    icon: BookOpen,
  },
  {
    id: "gpt3",
    year: 2020,
    title: "GPT-3 巨型語言模型",
    description: "OpenAI 發布了擁有 1750 億參數的 GPT-3。它展現了驚人的零樣本（Zero-shot）學習能力，只需給予提示詞就能寫文章、寫程式碼，讓世人見識到「暴力美學」的威力。",
    image: "https://picsum.photos/seed/gpt3/800/600?blur=2",
    icon: MessageCircle,
  },
  {
    id: "alphafold",
    year: 2020,
    title: "AlphaFold 2 破解蛋白質折疊",
    description: "DeepMind 的 AlphaFold 2 在 CASP14 競賽中取得了驚人成績，成功預測了蛋白質的 3D 結構，解決了困擾生物學界 50 年的世紀難題，對醫學與藥物開發影響深遠。",
    image: "https://picsum.photos/seed/alphafold/800/600?blur=2",
    icon: Dna,
  },
  {
    id: "dalle",
    year: 2021,
    title: "DALL-E 圖像生成",
    description: "OpenAI 發布了 DALL-E，這是一個能根據純文字描述生成高品質、充滿想像力圖像的 AI 模型，引爆了 AI 藝術創作與多模態生成的熱潮。",
    image: "https://picsum.photos/seed/dalle/800/600?blur=2",
    icon: Palette,
  },
  {
    id: "copilot",
    year: 2021,
    title: "GitHub Copilot",
    description: "GitHub 與 OpenAI 合作推出了 Copilot，這是一款 AI 結對程式設計助手。它能根據上下文自動補齊程式碼，徹底改變了全球軟體開發者的工作模式。",
    image: "https://picsum.photos/seed/copilot/800/600?blur=2",
    icon: Code,
  },
  {
    id: "chatgpt",
    year: 2022,
    title: "ChatGPT 問世",
    description: "OpenAI 推出了基於 GPT-3.5 微調的對話機器人 ChatGPT。它以極其自然、流暢的對話能力在短短兩個月內吸引了上億用戶，引發了全球性的 AI 狂熱與產業革命。",
    image: "https://picsum.photos/seed/chatgpt/800/600?blur=2",
    icon: Bot,
  },
  {
    id: "gpt-4",
    year: 2023,
    title: "GPT-4 與多模態時代",
    description: "OpenAI 發布了 GPT-4，這是一個大型多模態模型，能夠接受圖像和文本輸入並輸出文本。它在各種專業和學術基準測試中展現了人類水平的表現，逼近 AGI 的門檻。",
    image: "https://picsum.photos/seed/gpt4/800/600?blur=2",
    icon: BrainCircuit,
    chartType: 'line',
    chartData: [
      { name: 'GPT-1', value: 0.117 },
      { name: 'GPT-2', value: 1.5 },
      { name: 'GPT-3', value: 175 },
      { name: 'GPT-4', value: 1760 },
    ],
    chartConfig: {
      yAxisLabel: '參數數量 (十億, 對數)',
      dataKey: 'value',
      logScale: true
    }
  },
  {
    id: "sora",
    year: 2024,
    title: "Sora 物理世界模擬",
    description: "OpenAI 發表了影片生成模型 Sora，它不僅能生成長達一分鐘的高畫質影片，更展現了對物理世界規律的初步理解，被視為邁向世界模型（World Model）的重要一步。",
    image: "https://picsum.photos/seed/sora/800/600?blur=2",
    icon: Video,
  },
  {
    id: "autonomous-agents",
    year: 2025,
    title: "自主 AI 代理 (Autonomous Agents) 爆發",
    description: "AI 系統不再僅是被動回答問題，而是演化為具備規劃、執行與自我修正能力的「自主代理」。它們能夠跨應用程式協作、自動完成複雜的長期任務，標誌著 AI 從「對話工具」正式轉變為「數位勞動力」。",
    image: "https://picsum.photos/seed/agents/800/600?blur=2",
    icon: Cpu,
  }
];
