/**
 * 作品数据 — 中英文文案在 title / description / tags 等字段内
 * category: architecture | graphic | aigc
 */
const PROJECTS = [
  {
    id: "arch-wenzhou-binjiang",
    category: "architecture",
    featured: true,
    title: {
      zh: "温州市滨江商务区住区设计",
      en: "Wenzhou Binjiang CBD Residential Design",
    },
    year: "2025",
    image: "assets/wenzhou-binjiang-cover.png",
    pdf: "assets/wenzhou-binjiang-residential.pdf",
    description: {
      zh: "针对我国传统封闭式住区将内外严格隔离、功能分区过细、难以复合交叉且居民缺乏交往等问题，本方案采用「共享」街区结构：通过多种方式营造开放公共空间，使住区景观、商业与配套与城市融合一体，为居民提供开放的交流场所。住区内部居住组团则通过建筑与景观的巧妙组织保持相对独立，兼顾住户的安全与私密，形成「内部居住小空间 + 公共开放大空间」并置的结构形态。",
      en: "Responding to the limits of conventional gated residential compounds—strict inside/outside separation, rigid functional zoning, little overlap between programs, and weak social interaction—this scheme adopts a “shared block” structure. Open public space is woven through the plan so landscape, retail, and amenities merge with the city and invite encounter. Residential clusters remain relatively independent through careful architectural and landscape design, balancing safety and privacy with a dual structure of intimate domestic space and generous public realm.",
    },
    tags: {
      zh: ["住区设计", "共享街区", "滨江商务区", "大四课程设计"],
      en: [
        "Residential design",
        "Shared block",
        "Binjiang CBD",
        "Studio project",
      ],
    },
  },
  {
    id: "arch-qingnianfang-street",
    category: "architecture",
    featured: true,
    title: {
      zh: "庆年坊历史街区街道界面改善",
      en: "Qingnianfang Historic Block · Street Interface Renewal",
    },
    year: "2026",
    image: "assets/qingnianfang-street-cover.png",
    pdf: "assets/qingnianfang-street.pdf",
    description: {
      zh: "建筑设计 · 专题化设计（陆宇婧、张逸婷）。在城市由「增量扩张」转向「存量更新」的背景下，街道作为公共空间核心载体，其品质提升与文化重塑成为重要议题。课题以「针灸式」介入、小规模渐进为特征的微更新理念，在保留原有肌理与生活氛围的前提下，通过精细化设计提升视觉美感、空间体验与情感认同。场地为温州庆年坊历史文化街区天窗巷——承载地方记忆与市井烟火，却面临建筑老化、空间局促、设施不足、文化表征模糊等问题；研究如何在美学视角下以适宜微更新模式，实现功能与风貌的协调提升。",
      en: "Architecture · Thematic studio (Lu Yujing & Zhang Yiting). As cities shift from expansion to stock renewal, street quality and cultural reinvention matter more. The project applies micro-renewal—“acupuncture” interventions at small scale—preserving fabric and daily life while refining visual order, spatial experience, and emotional belonging. The site is Skylight Alley in Wenzhou’s Qingnianfang historic district: rich in memory and street life, yet challenged by aging buildings, tight space, weak amenities, and fading cultural expression. The study asks how aesthetic-led micro-renewal can align function and character.",
    },
    tags: {
      zh: ["专题化设计", "微更新", "庆年坊", "历史街区"],
      en: [
        "Thematic studio",
        "Micro-renewal",
        "Qingnianfang",
        "Historic district",
      ],
    },
  },
  {
    id: "arch-dragon-boat-museum",
    category: "architecture",
    featured: true,
    title: {
      zh: "龙舟博物馆设计",
      en: "Dragon Boat Museum",
    },
    year: "2023",
    image: "assets/dragon-boat-museum-cover.png",
    pdf: "assets/dragon-boat-museum.pdf",
    description: {
      zh: "以「在地性」为锚点，将建筑化作停泊于温瑞塘河的「文化方舟」——既是对传统龙舟文化的当代转译，亦是对绿岛生态系统的温柔介入。通过空间、材料与事件的交织，重新定义博物馆作为「文化容器」与「城市客厅」的双重价值。主题定位以「龙舟竞渡·水韵共生」为核心，融合温州千年龙舟文化、地域水文特征与现代建筑语言，打造集文化展示、公共体验、生态休闲于一体的标志性博物馆。建筑形态提取龙舟轮廓与竞渡动态张力，以起伏双坡屋顶、层叠体块与通透迎河界面，隐喻「舟行碧波、龙骨跃动」，呼应温州龙舟竞渡的历史记忆与精神传承。",
      en: "Anchored in local context, the museum becomes a “cultural ark” moored along the Wenrui Canal—reinterpreting dragon-boat heritage while gently engaging the Green Island ecosystem. Space, material, and event interweave to renew the museum as both cultural vessel and urban living room. The theme “Dragon-Boat Racing · Living Waters” unites Wenzhou’s millennium-long boat culture, regional hydrology, and contemporary architecture into a landmark for exhibition, public experience, and ecological leisure. Form draws the dragon boat’s profile and racing tension: undulating dual-pitched roofs, layered masses, and a transparent riverfront facade evoke boats on rippling water and leaping keels, echoing Wenzhou’s memory and spirit of dragon-boat competition.",
    },
    tags: {
      zh: ["博物馆设计", "龙舟文化", "温瑞塘河", "在地性"],
      en: [
        "Museum design",
        "Dragon boat culture",
        "Wenrui Canal",
        "Site-specific",
      ],
    },
  },
  {
    id: "arch-wzu-department",
    category: "architecture",
    featured: true,
    title: {
      zh: "建筑系馆设计",
      en: "Architecture Department Building",
    },
    year: "2023",
    image: "assets/architecture-department-cover.png",
    pdf: "assets/architecture-department-building.pdf",
    description: {
      zh: "场地位于温州大学南校区，周边为教学楼，一面向校园绿地打开。系馆主要服务师生，旨在提供开放交流的灵活教学空间。经调研确立设计目标：清晰体块与流线、灵活空间、良好采光。通过体块抬升与周边建筑高度融合，依路网与交通生成主轴线并形成两侧布局；沿师生上课路径将建筑底部掏空退让，形成引导空间，并按不同人群分流布置功能。采用大量通高天井，在引入自然光的同时促进上下层交流，丰富空间层次。为实现教学空间的开窗采光并保证造型整体性，引入聚碳酸酯幕墙——白日通透引光，夜晚透出室内光影。",
      en: "Sited on the south campus of Wenzhou University among teaching blocks, the building opens to campus green space. It serves faculty and students with flexible, open learning environments. Research defined clear volumes and circulation, adaptable space, and good daylight. Raised masses align with surrounding heights; road networks shape a main axis and bilateral layout. The ground level is carved and set back along daily class routes to guide movement, with programs zoned for different user groups. Full-height atriums bring in natural light and vertical interaction. Polycarbonate curtain walls balance daylighting for studios with a cohesive form—transparent by day, glowing with interior light at night.",
    },
    tags: {
      zh: ["系馆设计", "温州大学", "教学空间", "聚碳酸酯幕墙"],
      en: [
        "Department building",
        "Wenzhou University",
        "Learning space",
        "Polycarbonate facade",
      ],
    },
  },
  {
    id: "arch-nantang-bookbox",
    category: "architecture",
    featured: true,
    title: {
      zh: "温州南塘老街书盒改造",
      en: "Nantang Old Street Book Box Renovation, Wenzhou",
    },
    year: "2024",
    image: "assets/nantang-bookbox-cover.png",
    pdf: "assets/nantang-bookbox-renovation.pdf",
    description: {
      zh: "方案旨在活化滨水空间，融合文化、休闲与社区活力，打造温暖亲水、文化浸润的活力地标，成为南塘河畔集阅读、社交、消费与休闲于一体的社区文化客厅。",
      en: "The project revitalizes the waterfront by weaving culture, leisure, and community life into one place—creating a warm, water-friendly landmark where reading, socializing, retail, and relaxation come together as Nantang’s neighborhood cultural living room.",
    },
    tags: {
      zh: ["滨水活化", "书盒改造", "南塘老街", "大三课程设计"],
      en: [
        "Waterfront revitalization",
        "Adaptive reuse",
        "Nantang Old Street",
        "Studio project",
      ],
    },
  },
  {
    id: "arch-shades-in-woods",
    category: "architecture",
    featured: true,
    title: {
      zh: "山林片影 · 城市装置",
      en: "Shades in Woods · Urban Installation",
    },
    year: "2024",
    image: "assets/shades-in-woods-cover.png",
    pdf: "assets/shades-in-woods.pdf",
    description: {
      zh: "中意城市设计大赛赛题二「城市装置」竞赛作品。以中国温州国际园林博览会为背景，场地位于园博会瓯越园，旨在融合瓯海区与瓯江的历史地理文化，传承中国园林「内外通透、自然融合、化整为零」的精髓。依据岛的线性步道体验与景观视野，三座装置自北向南布置于园区。设计灵感源自中国传统剪纸与皮影戏，各装置由九道透光环保树脂板构成；在自然光下呈现动态而富有韵律的形态，游客于一日不同时段可见不同景致。中部镂空与雕塑性体量在视觉上呼应园中景观、在行为上与游人互动，为旅人带来与瓯越园独特魅力相得益彰的体验。",
      en: "Entry for China–Italy Urban Design Competition, Theme 2: Urban Installations. Set in the Ouyue Garden of the Wenzhou International Garden Expo, the project draws on Ouhai District and the Oujiang River’s cultural landscape while honoring classical Chinese garden ideals—transparency inside and out, natural integration, and composition in fragments. Three installations align north to south along the island’s linear promenade and sightlines. Inspired by paper-cutting and shadow puppetry, each piece is built from nine translucent eco-resin panels that shift in rhythm with daylight, offering changing views through the day. Perforated centers and sculptural form dialogue with the garden visually and invite visitor interaction—an experience tuned to the distinct character of Ouyue Garden.",
    },
    tags: {
      zh: [
        "竞赛作品",
        "中意城市设计大赛",
        "城市装置",
        "园林博览会",
      ],
      en: [
        "Competition",
        "China–Italy Urban Design",
        "Installation",
        "Garden Expo",
      ],
    },
  },
  {
    id: "arch-lingguang-tower",
    category: "architecture",
    featured: true,
    title: {
      zh: "蝶镜湖 · 林光塔设计",
      en: "Butterfly Mirror Lake · Forest Light Tower",
    },
    year: "2025",
    image: "assets/lingguang-tower-cover.png",
    images: [
      "assets/lingguang-tower-cover.png",
      "assets/lingguang-tower-02.png",
      "assets/lingguang-tower-03.png",
      "assets/lingguang-tower-01.png",
    ],
    description: {
      zh: "2025 首届巷创赛 · 乡村创业空间设计竞赛作品（设计：叶峻朵、陆宇婧）。场地位于上海蝶镜湖，以公园林木为灵感，打造向上生长、与自然对话的塔式地标——既是视觉焦点，也是可供市民攀登、停留、俯瞰的「立体庭院」。理念「林木 · 生长 · 层叠」：钢柱如林间树干有机排列（林木之柱）；集中式塔楼为视觉与精神核心（生长之塔）；片状露台水平悬挑，承载观景与咖啡外摆（层叠之台）。一层门厅与社区展廊，二、三层咖啡馆与书吧配露台，塔顶 360° 全景观景台；立面以玻璃幕墙与钢柱林、层叠露台交织，连续坡顶屋顶富有韵律，将树林意象转化为可游可憩的立体建筑。",
      en: "Entry for the 2025 1st Xiangchuang Competition · Rural Entrepreneurship Space (Ye Junduo & Lu Yujing). Sited at Butterfly Mirror Lake, Shanghai, the tower grows upward as a dialogue with the park woods—a landmark and a “vertical courtyard” for climbing, lingering, and viewing. The concept “Forest · Growth · Layers” translates surrounding trees into architecture: a forest of steel columns, a central growth tower as visual and spiritual core, and layered terraces for viewing and café spill-out. Programs include a ground-floor lobby and community gallery, café and book bar on upper floors with terraces, and a 360° rooftop lookout—geometry, glass, and rhythmic roofs turn the forest image into architecture to explore the park.",
    },
    tags: {
      zh: ["竞赛作品", "巷创赛", "蝶镜湖", "乡村创业空间"],
      en: [
        "Competition",
        "Xiangchuang",
        "Butterfly Mirror Lake",
        "Rural space",
      ],
    },
  },
  {
    id: "graphic-wopai-dream",
    category: "graphic",
    featured: true,
    title: {
      zh: "联通沃派 · 梦想第一站",
      en: "China Unicom Wo Pai · Dream First Station",
    },
    year: "2023",
    image: "assets/wopai-dream-station-01.png",
    images: [
      "assets/wopai-dream-station-01.png",
      "assets/wopai-dream-station-02.png",
      "assets/wopai-dream-station-03.png",
    ],
    description: {
      zh: "大学生广告设计竞赛作品，紧扣中国联通沃派品牌，探索企业如何融入校园生活、助力年轻人数字生活。方案涵盖品牌 IP「沃克斯」、校园营业厅 SI 与门店空间设计：以「有梦，有方向」为理念，融合科技创新、品牌传播与青年文化，借助沃派优质网络资源与应用生态，为 Z 世代建立可识别、有情感联结的品牌体验，激发年轻人对品牌的认同感。",
      en: "College advertising design competition entry for China Unicom Wo Pai, exploring how the brand integrates into campus life and supports young people’s digital lifestyles. The package spans mascot IP “Vox,” campus store SI, and spatial design—guided by “Have dreams, have direction,” blending tech innovation, brand communication, and youth culture. Leveraging Wo Pai’s network and app ecosystem, the scheme builds a recognizable, emotionally resonant experience that strengthens Gen Z identification with the brand.",
    },
    tags: {
      zh: [
        "广告设计竞赛",
        "SI 设计",
        "品牌 IP",
        "门店设计",
        "中国联通沃派",
      ],
      en: [
        "Ad competition",
        "SI design",
        "Brand IP",
        "Retail design",
        "China Unicom Wo Pai",
      ],
    },
  },
  {
    id: "aigc-magic-sound",
    category: "aigc",
    featured: true,
    title: {
      zh: "魔音·无线降噪耳机",
      en: "Magic Sound · Wireless ANC Headphones",
    },
    year: "2026",
    image: "assets/magic-sound-cover.png",
    video: "assets/magic-sound-headphones.mp4",
    description: {
      zh: "AIGC 产品广告短片。先由 ChatGPT 生成创意脚本与分镜，再在即梦 AI 中反复调试生成画面；以节奏感、重复口号、夸张场景与幽默创意强化记忆点，让观众一眼记住「魔音·无线降噪耳机」。",
      en: "AIGC product ad. ChatGPT produced the creative script and shot breakdown; Jimeng AI generated visuals through iterative prompting. Rhythmic editing, repeated slogans, exaggerated scenes, and humor make “Magic Sound · Wireless ANC Headphones” stick in one viewing.",
    },
    tags: {
      zh: ["AIGC 视频", "ChatGPT", "即梦 AI", "产品广告"],
      en: ["AIGC video", "ChatGPT", "Jimeng AI", "Product ad"],
    },
  },
  {
    id: "aigc-interstellar-frontier",
    category: "aigc",
    featured: true,
    title: {
      zh: "《星际边境》",
      en: "Interstellar Frontier",
    },
    year: "2025",
    image: "assets/interstellar-frontier-cover.png",
    video: "assets/interstellar-frontier.mp4",
    description: {
      zh: "AIGC 科幻电影预告短片。由 ChatGPT 生成叙事脚本与分镜，再在即梦 AI 中持续调试生成画面；以宇宙边界的未知感、悬疑片段与激烈的角色冲突营造张力，在快节奏剪辑中把悬念留到最后一刻。",
      en: "AIGC sci-fi trailer. ChatGPT drafted the narrative and shot list; Jimeng AI refined visuals through iterative generation. Unknown frontiers, suspenseful beats, and intense confrontations build tension—fast cuts hold the mystery until the final reveal.",
    },
    tags: {
      zh: ["AIGC 视频", "ChatGPT", "即梦 AI", "科幻预告"],
      en: ["AIGC video", "ChatGPT", "Jimeng AI", "Sci-fi trailer"],
    },
  },
];
