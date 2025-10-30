// Data storage for the academic website
const academicData = {
    // Personal Bio Information
    bio: {
        en: `Yipeng Liu is a Professor and Ph.D. Supervisor at the School of Information and Communication Engineering, University of Electronic Science and Technology of China (UESTC), and a National Level Young Talent. He has worked and visited at KU Leuven (Belgium), Tsinghua University (Beijing), National Tsing Hua University (Taiwan), Huawei Technologies, and Southwest China Research Institute of Electronic Equipment.

His main research focuses on tensor signal processing theory and applications. Based on tensor computation, he primarily investigates tensor decomposition and low-rank optimization, effectively avoiding the data structure loss caused by matricization of high-dimensional arrays in traditional signal processing, while also addressing the "curse of dimensionality" computational challenges in large-scale data processing.

He has published over 100 international journal and conference papers, with more than 30 papers published in IEEE journals such as JSTSP, TSP, TIP, TMI, TMM, TPAMI, TKDE, TNNLS, including 5 ESI highly cited papers. He has authored 2 English monographs and edited 1 book on tensor signal processing. His paper "Tensor Regression" was published in Foundations and Trends in Machine Learning (impact factor 65.3), being the only work with first/corresponding author from a Chinese institution in the journal's 16-year history.

He is a Senior Member of IEEE, Senior Member of Chinese Institute of Electronics, Senior Member of China Society of Image and Graphics, member of IEEE Signal Processing Society Computational Imaging (SPS CI) Technical Committee, member of IEEE Circuits and Systems Society Multimedia Systems and Applications (CASS MSA) Technical Committee, member of China Society of Image and Graphics Youth Working Committee, and member of China Computer Federation Multimedia Technology Professional Committee.`,
        zh: `刘翼鹏是电子科技大学信息与通信工程学院教授、博士生导师、国家级青年人才。他曾在鲁汶大学（比利时）、清华大学（北京）、清华大学（台湾）、华为技术、西南电子技术研究所访问和工作。他主要从事张量信号处理相关的理论方法和应用工作。以张量计算为基础，重点研究张量分解和低秩优化，有效避免传统信号处理中将高维数组矩阵化带来的数据结构损失，同时还能避免大规模数据处理中的"维数灾难"计算难题。

他发表国际期刊和会议论文100余篇，其中30余篇论文发表在JSTSP、TSP、TIP、TMI、TMM、TPAMI、TKDE、TNNLS等IEEE期刊，ESI 高被引论文5篇。撰写张量信号处理方向的英文专著2本和编著1本。他的论文Tensor Regression发表在影响因子65.3的人工智能顶刊FnT in Machine Learning，是其创刊16年唯一的第一/通讯作者来自中国单位的工作。

他是IEEE高级会员，中国电子学会高级会员，中国图象图形学学会高级会员，IEEE信号处理协会计算成像（SPS CI）技术委员会委员，IEEE电路与系统协会多媒体系统与应用(CASS MSA)技术委员会委员，中国图象图形学学会青年工作委员会委员，中国计算机学会多媒体技术专委会委员。`
    },

    // Academic Experience Timeline
    experience: {
        academic: [
            {
                year: "2023-Present",
                title: {
                    en: "Professor",
                    zh: "教授"
                },
                institution: {
                    en: "School of Information and Communication Engineering, UESTC",
                    zh: "电子科技大学，信息与通信工程学院"
                },
                description: {
                    en: "Full Professor and Ph.D. Supervisor, National Level Young Talent",
                    zh: "教授、博士生导师、国家级青年人才"
                }
            },
            {
                year: "2014-2023",
                title: {
                    en: "Associate Professor",
                    zh: "副教授"
                },
                institution: {
                    en: "School of Information and Communication Engineering / School of Electronic Engineering, UESTC",
                    zh: "电子科技大学，信息与通信工程学院/电子工程学院"
                },
                description: {
                    en: "Associate Professor and Ph.D. Supervisor",
                    zh: "副教授、博士生导师"
                }
            },
            {
                year: "2016-2017",
                title: {
                    en: "Visiting Scholar",
                    zh: "访问学者"
                },
                institution: {
                    en: "Department of Electrical Engineering, National Tsing Hua University, Taiwan",
                    zh: "台湾清华大学，电讯工程系"
                },
                description: {
                    en: "Research collaboration on signal processing and machine learning",
                    zh: "信号处理与机器学习研究合作"
                }
            },
            {
                year: "2011-2014",
                title: {
                    en: "Postdoctoral Researcher",
                    zh: "博士后研究员"
                },
                institution: {
                    en: "Department of Electrical Engineering, KU Leuven, Belgium",
                    zh: "鲁汶大学（比利时），电子工程系"
                },
                description: {
                    en: "Research on compressed sensing and biomedical signal processing",
                    zh: "压缩感知与生物医学信号处理研究"
                }
            },
            {
                year: "2010-2011",
                title: {
                    en: "Visiting Student",
                    zh: "访问学生"
                },
                institution: {
                    en: "Department of Electronic Engineering, Tsinghua University, Beijing",
                    zh: "清华大学（北京），电子工程系"
                },
                description: {
                    en: "Research collaboration on signal processing algorithms",
                    zh: "信号处理算法研究合作"
                }
            }
        ],
        
        industry: [
            {
                year: "2011",
                title: {
                    en: "Algorithm Engineer",
                    zh: "算法工程师"
                },
                institution: {
                    en: "Huawei Technologies Co., Ltd., Chengdu Research Institute",
                    zh: "华为技术有限责任公司，成都研究所"
                },
                description: {
                    en: "Algorithm development for wireless communication systems",
                    zh: "无线通信系统算法开发"
                }
            },
            {
                year: "2007-2008",
                title: {
                    en: "Intern",
                    zh: "实习生"
                },
                institution: {
                    en: "Southwest China Research Institute of Electronic Equipment",
                    zh: "西南电子技术研究所"
                },
                description: {
                    en: "Research and development in electronic systems",
                    zh: "电子系统研发"
                }
            }
        ],

        education: [
            {
                year: "2006-2011",
                title: {
                    en: "Ph.D. in Information and Communication Engineering",
                    zh: "信息与通信工程博士"
                },
                institution: {
                    en: "University of Electronic Science and Technology of China",
                    zh: "电子科技大学"
                },
                description: {
                    en: "Dissertation on signal processing and wireless communications",
                    zh: "信号处理与无线通信博士论文"
                }
            },
            {
                year: "2002-2006",
                title: {
                    en: "B.S. in Biomedical Engineering",
                    zh: "生物医学工程学士"
                },
                institution: {
                    en: "University of Electronic Science and Technology of China",
                    zh: "电子科技大学"
                },
                description: {
                    en: "Undergraduate studies in biomedical engineering",
                    zh: "生物医学工程本科学习"
                }
            }
        ]
    },

    // Academic Service and Editorial Roles
    service: [
        {
            year: "2025至今",
            role: {
                en: "Associate Editor",
                zh: "编委"
            },
            organization: {
                en: "IEEE Transactions on Image Processing",
                zh: "IEEE Transactions on Image Processing编委"
            }
        },
        {
            year: "2024至今",
            role: {
                en: "Senior Area Editor",
                zh: "资深领域编委"
            },
            organization: {
                en: "IEEE Signal Processing Letters",
                zh: "IEEE Signal Processing Letters资深领域编委"
            }
        },
        {
            year: "2025-2027",
            role: {
                en: "Technical Committee Member",
                zh: "技术委员会委员"
            },
            organization: {
                en: "IEEE Signal Processing Society Computational Imaging (SPS CI) Technical Committee",
                zh: "IEEE信号处理协会计算成像（SPS CI）技术委员会委员"
            }
        },
        {
            year: "2024-2028",
            role: {
                en: "Technical Committee Member",
                zh: "技术委员会委员"
            },
            organization: {
                en: "IEEE Circuits and Systems Society Multimedia Systems and Applications (CASS MSA) Technical Committee",
                zh: "IEEE电路与系统协会多媒体系统与应用(CASS MSA)技术委员会委员"
            }
        },
        {
            year: "2022-2023",
            role: {
                en: "Distinguished Lecturer",
                zh: "杰出讲座人"
            },
            organization: {
                en: "Asia Pacific Signal and Information Processing Association (APSIPA)",
                zh: "亚太信号与信息处理学会杰出讲座人（APSIPA Distinguished Lecturer）"
            }
        },
        {
            year: "2017-2019",
            role: {
                en: "Lead Guest Editor",
                zh: "首席客座编委"
            },
            organization: {
                en: "Signal Processing: Image Communication special issue on Tensor Image Processing",
                zh: "Signal Processing: Image Communication special issue on Tensor Image Processing，首席客座编委"
            }
        },
        {
            year: "2025",
            role: {
                en: "Publicity Chair",
                zh: "宣传主席"
            },
            organization: {
                en: "ICASSP 2025 Satellite Event Suzhou, China",
                zh: "ICASSP 2025 Satellite Event Suzhou, China, Publicity Chair"
            }
        },
        {
            year: "2025",
            role: {
                en: "Lead Chair",
                zh: "主席"
            },
            organization: {
                en: "ICME 2025 workshop on Big Surveillance Data Analysis and Processing",
                zh: "ICME 2025 workshop on Big Surveillance Data Analysis and Processing, lead chair"
            }
        },
        {
            year: "2022-2024",
            role: {
                en: "Guest Editor",
                zh: "客座编委"
            },
            organization: {
                en: "Journal of Systems Engineering and Electronics (English Edition)",
                zh: "系统工程与电子技术学报（英文版）客座编委"
            }
        },
        {
            role: {
                en: "Committee Member",
                zh: "委员"
            },
            organization: {
                en: "Youth Working Committee, China Society of Image and Graphics",
                zh: "中国图象图形学学会青年工作委员会委员"
            }
        },
        {
            role: {
                en: "Committee Member",
                zh: "委员"
            },
            organization: {
                en: "Multimedia Technology Professional Committee, China Computer Federation",
                zh: "中国计算机学会多媒体技术专委会委员"
            }
        },
        {
            role: {
                en: "Doctoral Defense Committee Member",
                zh: "博士答辩委员会委员"
            },
            organization: {
                en: "Multiple world-renowned universities including Skoltech (Russia)",
                zh: "多次担任世界知名大学博士答辩委员会委员，包括俄罗斯斯科尔科沃科学技术学院（Skoltech）"
            }
        }
    ],

    // Major Research Projects
    projects: [
        {
            title: {
                en: "International Cooperation Project, National Natural Science Foundation of China",
                zh: "中国自然基金国际合作项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "International cooperation on advanced tensor signal processing methods",
                zh: "国际合作项目"
            }
        },
        {
            title: {
                en: "General Program, National Natural Science Foundation of China",
                zh: "中国自然基金面上项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "General program on tensor theory and applications",
                zh: "面上项目"
            }
        },
        {
            title: {
                en: "Young Scientists Fund, National Natural Science Foundation of China",
                zh: "中国自然基金青年基金项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "Young scientists fund on signal processing",
                zh: "青年基金项目"
            }
        },
        {
            title: {
                en: "National Foreign Expert Individual Project (Class S), Ministry of Human Resources and Social Security",
                zh: "人社部国家外国专家个人类项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "National foreign expert project",
                zh: "国家外国专家个人类项目"
            }
        },
        {
            title: {
                en: "International/Regional Cooperation Project, Sichuan Provincial Department of Science and Technology",
                zh: "四川省科技厅国际/地区合作项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "International cooperation project at provincial level",
                zh: "省级国际合作项目"
            }
        },
        {
            title: {
                en: "Sichuan Haiju Plan Project",
                zh: "四川海聚计划项目"
            },
            role: {
                en: "Principal Investigator",
                zh: "主持"
            },
            period: "",
            description: {
                en: "Sichuan talent recruitment project",
                zh: "四川人才引进项目"
            }
        },
        {
            title: {
                en: "Advanced Grant, European Research Council",
                zh: "欧盟研究理事会高级项目"
            },
            role: {
                en: "Key Researcher",
                zh: "主研"
            },
            period: "",
            description: {
                en: "European research council advanced grant",
                zh: "欧盟研究理事会高级项目"
            }
        },
        {
            title: {
                en: "Research Foundation Flanders (FWO), Belgium",
                zh: "比利时佛兰德科学基金"
            },
            role: {
                en: "Key Researcher",
                zh: "主研"
            },
            period: "",
            description: {
                en: "Belgian Flanders science foundation project",
                zh: "比利时佛兰德科学基金项目"
            }
        }
    ],

    // Research Achievements and Highlights
    research: {
        highlights: [
            {
                title: {
                    en: "Tensor Regression Monograph",
                    zh: "张量回归专著"
                },
                description: {
                    en: "Published in Foundations and Trends in Machine Learning (Impact Factor: 65.3), the only work with first/corresponding author from a Chinese institution in the journal's 16-year history.",
                    zh: "发表在影响因子65.3的人工智能顶刊FnT in Machine Learning，是其创刊16年唯一的第一/通讯作者来自中国单位的工作。"
                },
                icon: "fas fa-book"
            },
            {
                title: {
                    en: "High-Impact Publications",
                    zh: "高影响力论文"
                },
                description: {
                    en: "Over 100 international publications, 30+ IEEE journal papers, 5 ESI highly cited papers.",
                    zh: "发表国际期刊和会议论文100余篇，其中30余篇论文发表在IEEE期刊，ESI高被引论文5篇。"
                },
                icon: "fas fa-chart-line"
            },
            {
                title: {
                    en: "Global Recognition",
                    zh: "国际认可"
                },
                description: {
                    en: "Listed in Stanford University's Top 2% Scientists worldwide for three consecutive years (2022-2024).",
                    zh: "2022年至今连续入选斯坦福大学评选的全球前2%顶尖科学家名单。"
                },
                icon: "fas fa-globe"
            }
        ],
        
        innovations: [
            {
                area: {
                    en: "Tensor Signal Processing",
                    zh: "张量信号处理"
                },
                description: {
                    en: "Developed novel tensor decomposition algorithms that preserve high-dimensional data structures and avoid the curse of dimensionality.",
                    zh: "开发了新颖的张量分解算法，保持高维数据结构并避免维数灾难。"
                }
            },
            {
                area: {
                    en: "Computational Imaging",
                    zh: "计算成像"
                },
                description: {
                    en: "Advanced compressed sensing techniques for medical imaging and hyperspectral image reconstruction.",
                    zh: "医学成像和高光谱图像重建的先进压缩感知技术。"
                }
            },
            {
                area: {
                    en: "Machine Learning",
                    zh: "机器学习"
                },
                description: {
                    en: "Interpretable deep learning methods with applications to healthcare and multimedia processing.",
                    zh: "可解释深度学习方法，应用于医疗保健和多媒体处理。"
                }
            }
        ]
    },

    // Awards and Recognition
    awards: [
        {
            year: "2025",
            title: {
                en: "Best Paper Award, IEEE BMSB 2025",
                zh: "第20届IEEE宽带多媒体系统和广播年会（IEEE BMSB 2025）最佳论文奖"
            },
            type: "paper"
        },
        {
            year: "2025",
            title: {
                en: "Best Demo Award, IEEE ICME 2025",
                zh: "第26届IEEE多媒体年会（ICME 2025），最佳演示奖（Best Demo Award）"
            },
            type: "demo"
        },
        {
            year: "2024",
            title: {
                en: "15th Batch of Sichuan Provincial Academic and Technical Leaders Reserve Personnel",
                zh: "第15批四川省学术和技术带头人后备人选"
            },
            type: "honor"
        },
        {
            year: "2022-2024",
            title: {
                en: "Top 2% Scientists Worldwide (Stanford University)",
                zh: "全球前2%顶尖科学家（斯坦福大学发布）"
            },
            type: "recognition"
        },
        {
            year: "2023",
            title: {
                en: "Second Prize of Sichuan Provincial Natural Science Award (2nd author)",
                zh: "2023年度四川省自然科学奖二等奖（排名第二）"
            },
            type: "award"
        },
        {
            year: "2022",
            title: {
                en: "Best Demo Award, IEEE MMSP 2022",
                zh: "第24届IEEE国际多媒体信号处理研讨会（MMSP 2022）最佳演示奖（Best Demo Award）"
            },
            type: "demo"
        },
        {
            year: "2020",
            title: {
                en: "First Prize of Outstanding Paper, First Sichuan-Chongqing Science and Technology Academic Conference",
                zh: "首届川渝科技学术大会优秀论文一等奖"
            },
            type: "paper"
        },
        {
            year: "2017",
            title: {
                en: "IEEE Senior Member",
                zh: "国际电气电子工程师学会高级会员"
            },
            type: "membership"
        }
    ],

    // Teaching and Students
    teaching: {
        courses: [
            {
                level: {
                    en: "Undergraduate",
                    zh: "本科生"
                },
                title: {
                    en: "Signals and Systems",
                    zh: "信号与系统"
                },
                type: {
                    en: "Basic Course",
                    zh: "基础课"
                }
            },
            {
                level: {
                    en: "Undergraduate",
                    zh: "本科生"
                },
                title: {
                    en: "Multimedia Intelligent Human-Computer Interaction",
                    zh: "多媒体智能人机交互"
                },
                type: {
                    en: "Practical Course",
                    zh: "实践课"
                }
            },
            {
                level: {
                    en: "Graduate",
                    zh: "研究生"
                },
                title: {
                    en: "Optimization Theory and Applications",
                    zh: "最优化理论与应用"
                },
                type: {
                    en: "Basic Course",
                    zh: "基础课"
                }
            },
            {
                level: {
                    en: "Ph.D.",
                    zh: "博士生"
                },
                title: {
                    en: "Frontiers in Signal and Information Processing",
                    zh: "信号与信息处理前沿"
                },
                type: {
                    en: "Advanced Course",
                    zh: "前沿探索课"
                }
            }
        ],
        
        achievements: [
            {
                year: "2022",
                title: {
                    en: "Outstanding Individual for International Cooperation and Education at UESTC",
                    zh: "2022年度成电国际合作与国际教育先进个人"
                }
            },
            {
                year: "2020",
                title: {
                    en: "Outstanding Master's Thesis Supervisor",
                    zh: "2020年度优秀硕士学位论文指导教师"
                }
            },
            {
                title: {
                    en: "3 First Prizes for Graduate Teaching Achievement at UESTC",
                    zh: "获电子科技大学研究生教学成果奖一等奖3项"
                }
            },
            {
                title: {
                    en: "1 First Prize for Undergraduate Teaching Achievement at UESTC",
                    zh: "本科生教学成果奖一等奖1项"
                }
            }
        ],
        
        students: [
            {
                achievement: {
                    en: "4 Outstanding Master's Theses",
                    zh: "优秀硕士学位论文4篇"
                }
            },
            {
                achievement: {
                    en: "3 Outstanding Students at UESTC",
                    zh: "成电杰出学生3位"
                }
            }
        ],
        
        research_projects: [
            {
                title: {
                    en: "Modern Digital Signal Processing Theory and Algorithms",
                    zh: "现代数字信号处理理论及算法"
                }
            },
            {
                title: {
                    en: "Project-based 'Intelligent Information' Innovation Capability Enhancement Plan",
                    zh: "基于项目的\"智能信息\"创新能力提升计划"
                }
            },
            {
                title: {
                    en: "Core Course Group Construction for Signal Processing for Common Basic Projects",
                    zh: "面向共性基础项目的信号处理核心课程群建设"
                }
            }
        ],
        
        online_course: {
            title: {
                en: "Digital Image Processing (English)",
                zh: "全英文在线课程《Digital Image Processing》"
            },
            platform: {
                en: "XuetangX",
                zh: "学堂在线"
            },
            url: "https://www.xuetangx.com/course/uestc08071213dipintl/26055209"
        }
    },

    // Media Coverage
    media: [
        {
            title: {
                en: "Professor Liu Yipeng Invited to Give Tutorial on Tensor Regression at IEEE ISCAS 2024",
                zh: "信通学院刘翼鹏教授受邀在国际知名学术会议IEEE ISCAS 2024作张量回归讲习报告"
            },
            url: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=92835"
        },
        {
            title: {
                en: "English Book 'Tensor Computation for Data Analysis' by Liu Yipeng et al. Published by Springer",
                zh: "信通学院刘翼鹏等人的英文著作Tensor Computation for Data Analysis由施普林格公司出版"
            },
            url: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=81351"
        },
        {
            title: {
                en: "PhD Student Publishes Tensor Regression Survey in Foundations and Trends in Machine Learning",
                zh: "信通学院博士生在Foundations and Trends in Machine Learning上发表张量回归综述论文"
            },
            url: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=81642"
        },
        {
            title: {
                en: "Associate Professor Liu Yipeng Gave Specialized Reports on Tensor Signal Analysis at Three International Conferences in 2019",
                zh: "刘翼鹏副教授在2019年度三个国际知名学术会议做张量信号分析专题报告"
            },
            url: "https://news.uestc.edu.cn/?n=UestcNews.Front.DocumentV2.ArticlePage&Id=74753"
        }
    ]
};

// Publication data organized by year
const publicationData = {
    books: [
        {
            year: 2022,
            title: "Tensor Computation for Data Analysis",
            authors: "Yipeng Liu, Jiani Liu, Zhen Long, Ce Zhu",
            publisher: "Springer",
            isbn: "978-3-030-74385-7",
            type: "authored",
            details: "ebook ISBN: 978-3-030-74386-4, Hardcover ISBN: 978-3-030-74385-7, DOI: 10.1007/978-3-030-74386-4"
        },
        {
            year: 2021,
            title: "Tensor Regression",
            authors: "Jiani Liu, Ce Zhu, Zhen Long, Yipeng Liu",
            publisher: "Now Publishers Inc.",
            url: "https://www.nowpublishers.com/article/Details/MAL-087",
            type: "authored"
        },
        {
            year: 2022,
            title: "Tensors for Data Processing",
            authors: "Yipeng Liu (Editor)",
            publisher: "Academic Press (Elsevier)",
            isbn: "9780128244470",
            type: "edited"
        }
    ],

    book_chapters: [
        {
            year: 2022,
            title: "Tensor Decompositions: Computations, Applications, and Challenges",
            authors: "Yingyue Bi, Yingcong Lu, Zhen Long, Ce Zhu, and Yipeng Liu",
            book: "Tensors for Data Processing",
            publisher: "Academic Press (Elsevier)"
        },
        {
            year: 2022,
            title: "Generalized Thresholding for Low-rank Tensor Recovery: Approaches based on Model and Learning",
            authors: "Fei Wen, Zhonghao Zhang, and Yipeng Liu",
            book: "Tensors for Data Processing",
            publisher: "Academic Press (Elsevier)"
        }
    ],

    2025: [
        {
            title: "Tensor Decomposition for Brain Data Characterization: A Structured Review on Prerequisites, Models, and Constraints",
            authors: "Fei He, Yipeng Liu, Ce Zhu",
            venue: "IEEE Signal Processing Magazine",
            type: "journal"
        },
        {
            title: "HOPE: Enhanced Position Image Priors via High-Order Implicit Representations",
            authors: "Yang Chen, Ruituo Wu, Junhui Hou, Ce Zhu, Yipeng Liu",
            venue: "IEEE Transactions on Image Processing",
            type: "journal"
        },
        {
            title: "DA-Flow: Dual Attention Normalizing Flow for Skeleton-based Video Anomaly Detection",
            authors: "Ruituo Wu, Yang Chen, Jian Xiao, Bing Li, Jicong Fan, Frederic Dufaux, Ce Zhu, Yipeng Liu",
            venue: "IEEE Transactions on Multimedia",
            type: "journal"
        }
    ],

    2024: [
        {
            title: "Adaptively Topological Tensor Network for Multi-view Subspace Clustering",
            authors: "Yipeng Liu, Jie Chen, Yingcong Lu, Weiting Ou, Zhen Long, Ce Zhu",
            venue: "IEEE Transactions on Knowledge and Data Engineering, vol. 36, no. 11, pp. 5562-5575",
            type: "journal"
        },
        {
            title: "CS2DIPs: Unsupervised HSI Super-Resolution Using Coupled Spatial and Spectral DIPs",
            authors: "Yuan Fang, Yipeng Liu, Chong-Yung Chi, Zhen Long, Ce Zhu",
            venue: "IEEE Transactions on Image Processing, vol. 33, pp. 3090-3101",
            type: "journal"
        },
        {
            title: "Tensor Completion for Alzheimer's Disease Prediction from Diffusion Tensor Imaging",
            authors: "Yixin Gou, Yipeng Liu, Fei He, Borbala Hunyadi, Ce Zhu",
            venue: "IEEE Transactions on Biomedical Engineering, vol. 71, no. 7, pp. 2211-2223",
            type: "journal"
        }
    ],

    2023: [
        {
            title: "GAPMSF-Net: Generalized Alternating Projection with Multi-stage Fusion Network for Snapshot Compressive Imaging",
            authors: "Xin Liu, Zhangxin Chen, Ce Zhu, Yipeng Liu",
            venue: "IEEE Transactions on Computational Imaging, vol. 9, pp. 760-768",
            type: "journal"
        },
        {
            title: "Multiplex Transformed Tensor Decomposition for Multidimensional Image Recovery",
            authors: "Lanlan Feng, Ce Zhu, Zhen Long, Jiani Liu, Yipeng Liu",
            venue: "IEEE Transactions on Image Processing, vol. 32, pp. 3397-3412",
            type: "journal"
        }
    ],

    2022: [
        {
            title: "Multi-Scale Spatial and Temporal Speech Associations to Swallowing for Dysphagia Screening",
            authors: "Fei He, Xiaoyi Hu, Ce Zhu, Ying Li, Yipeng Liu",
            venue: "IEEE-ACM Transactions on Audio, Speech and Language Processing, vol. 30, pp. 2888-2899",
            type: "journal"
        },
        {
            title: "Trainable Subspaces for Low Rank Tensor Completion: Model and Analysis",
            authors: "Zhen Long, Ce Zhu, Jiani Liu, Pierre Comon, Yipeng Liu",
            venue: "IEEE Transactions on Signal Processing, vol. 70, no. 5, pp. 2502-2517",
            type: "journal"
        }
    ],

    2020: [
        {
            title: "Robust Low-Rank Tensor Ring Completion",
            authors: "Huyan Huang, Yipeng Liu, Zhen Long, Ce Zhu",
            venue: "IEEE Transactions on Computational Imaging, vol. 6, pp. 1117-1126",
            type: "journal"
        },
        {
            title: "Low Rank Tensor Train Coefficient Array Estimation for Tensor-on-Tensor Regression",
            authors: "Yipeng Liu, Jiani Liu, Ce Zhu",
            venue: "IEEE Transactions on Neural Networks and Learning Systems, vol. 31, no. 12, pp. 5402-5411",
            type: "journal"
        },
        {
            title: "Smooth Robust Tensor Principal Component Analysis for Compressed Sensing of Dynamic MRI",
            authors: "Yipeng Liu, Tengteng Liu, Jiani Liu, Ce Zhu",
            venue: "Pattern Recognition, vol. 102, no. 107252",
            type: "journal"
        },
        {
            title: "Provable Tensor Ring Completion",
            authors: "Huyan Huang, Yipeng Liu, Jiani Liu, Ce Zhu",
            venue: "Signal Processing, vol. 171, no. 107486",
            type: "journal"
        },
        {
            title: "Robust Block Tensor Principal Component Analysis",
            authors: "Lanlan Feng, Yipeng Liu, Longxi Chen, Xiang Zhang, Ce Zhu",
            venue: "Signal Processing, vol. 166, no. 107271, pp. 1-13",
            type: "journal"
        },
        {
            title: "Low CP Rank and Tucker Rank Tensor Completion for Estimating Missing Components in Image Data",
            authors: "Yipeng Liu, Zhen Long, Huyan Huang, Ce Zhu",
            venue: "IEEE Transactions on Circuits and Systems for Video Technology, vol. 30, no. 4, pp. 944-954",
            type: "journal"
        },
        {
            title: "DaST: Data-free Substitute Training for Adversarial Attacks",
            authors: "Mingyi Zhou, Jing Wu, Yipeng Liu, Shuaicheng Liu, Ce Zhu",
            venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2020), Seattle, USA",
            type: "conference"
        },
        {
            title: "Recent Advances on Robust Tensor Principal Component Analysis",
            authors: "Lanlan Feng, Shenghan Wang, Ce Zhu, Yipeng Liu",
            venue: "IJCAI-PRICAI 2020 workshop on Tensor Network Representations in Machine Learning, Yokohama, Japan",
            type: "conference"
        }
    ],

    2019: [
        {
            title: "Automated Detection of Parkinson's Disease Based on Multiple Types of Sustained Phonations using Linear Discriminant Analysis and Genetically Optimized Neural Network",
            authors: "Liaqat Ali, Ce Zhu, Zhonghao Zhang, Yipeng Liu",
            venue: "IEEE Journal of Translational Engineering in Health and Medicine, vol. 7",
            type: "journal",
            note: "The most cited paper in IEEE Journal of Translational Engineering in Health and Medicine in 2019"
        },
        {
            title: "Reliable Parkinson's Disease Detection by Analyzing Handwritten Drawings: Construction of an Unbiased Cascaded Learning System based on Feature Selection and Adaptive Boosting Model",
            authors: "Liaqat Ali, Ce Zhu, Noorbakhsh Amiri Golilarz, Ashir Javeed, Mingyi Zhou, Yipeng Liu",
            venue: "IEEE Access, vol. 7, no. 1, pp. 116480-116489",
            type: "journal"
        },
        {
            title: "Early diagnosis of Parkinson's disease from multiple speech recordings by simultaneous sample and feature selection",
            authors: "Liaqat Ali, Ce Zhu, Mingyi Zhou, Yipeng Liu",
            venue: "Expert Systems with Applications, vol. 137, pp. 22-28",
            type: "journal"
        },
        {
            title: "Tensor Rank Learning in CP Decomposition via Convolutional Neural Network",
            authors: "Mingyi Zhou, Yipeng Liu, Long Zhen, Longxi Chen, Ce Zhu",
            venue: "Signal Processing: Image Communication, vol 73, pp. 12-21",
            type: "journal"
        },
        {
            title: "Editorial to The Special Issue on Tensor Image Processing",
            authors: "Yipeng Liu, Yuning Yang, Qibin Zhao, Shuchin Aeron",
            venue: "Signal Processing: Image Communication, vol 73, pp. 1-2",
            type: "journal"
        },
        {
            title: "Image Completion Using Low Tensor Tree Rank and Total Variation Minimization",
            authors: "Yipeng Liu, Zhen Long, Ce Zhu",
            venue: "IEEE Transactions on Multimedia, vol. 21, no. 2, pp. 338-350",
            type: "journal"
        },
        {
            title: "Low Rank Tensor Completion for Multiway Visual Data",
            authors: "Zhen Long, Yipeng Liu, Longxi Chen, Ce Zhu",
            venue: "Signal Processing, vol. 155, pp. 301-316",
            type: "journal"
        },
        {
            title: "Robust corner detection using altitude to chord ratio accumulation",
            authors: "Xinyu Lin, Ce Zhu, Yipeng Liu, Qian Zhang",
            venue: "Multimedia Tools and Applications, vol. 78, no. 1, pp 177-195",
            type: "journal"
        }
    ],

    2018: [
        {
            title: "Improved Robust Tensor Principal Component Analysis via Low Rank Core Matrix",
            authors: "Yipeng Liu, Longxi Chen, Ce Zhu",
            venue: "IEEE Journal of Selected Topics in Signal Processing, vol. 12, no. 6, pp. 1378-1389",
            type: "journal"
        },
        {
            title: "Fast Signal Recovery from Saturated Measurements by Linear Loss and Nonconvex Penalties",
            authors: "Fan He, Xiaolin Huang, Yipeng Liu, Ming Yan",
            venue: "IEEE Signal Processing Letters, vol. 25, no. 9. pp. 1374-1378",
            type: "journal"
        },
        {
            title: "Visual aesthetic understanding: Sample-specific aesthetic classification and deep activation map visualization",
            authors: "Chao Zhang, Ce Zhu, Xun Xu, Yipeng Liu, Jimin Xiao, Tammam Tillo",
            venue: "Signal Processing: Image Communication, vol. 67, pp. 12–21",
            type: "journal"
        },
        {
            title: "Extended smoothlets: An efficient multi-resolution adaptive transform",
            authors: "Shuai Wang, Chunmei Wang, Qian Zhang, Yipeng Liu, Ce Zhu, Chang Duan",
            venue: "Journal of Visual Communication and Image Representation, vol. 50, pp. 178-185",
            type: "journal"
        }
    ],

    2017: [
        {
            title: "Hybrid CS-DMRI: Periodic Time-Variant Subsampling and Omnidirectional Total Variation Based Reconstruction",
            authors: "Yipeng Liu, Shan Wu, Xiaolin Huang, Bing Chen, Ce Zhu",
            venue: "IEEE Transactions on Medical Imaging, vol. 36, no. 10, pp. 2148-2159",
            type: "journal"
        },
        {
            title: "Comparison of different compressed sensing algorithms for low SNR 19F MRI application - imaging of transplanted pancreatic islets and cells labeled with perfluorocarbons",
            authors: "Sayuan Liang, Tom Dresselaers, Karim Louchami, Ce Zhu, Yipeng Liu, Uwe Himmelreich",
            venue: "NMR in Biomedicine, vol. 30, no. 11, pp. e3776",
            type: "journal"
        },
        {
            title: "Efficient and Robust Corner Detectors Based on Second Order Difference of Contour",
            authors: "Xinyu Lin, Ce Zhu, Qian Zhang, Xiaolin Huang, Yipeng Liu",
            venue: "IEEE Signal Processing Letters, vol. 24, no. 9, pp. 1393–1397",
            type: "journal"
        },
        {
            title: "A Bayesian Approach for Camouflaged Moving Object Detection",
            authors: "Xiang Zhang, Ce Zhu, Shuai Wang, Yipeng Liu, Mao Ye",
            venue: "IEEE Transactions on Circuits and Systems for Video Technology, vol. 27, no.9, pp. 2001-2013",
            type: "journal"
        },
        {
            title: "Geometric Mesh Corner Detection Using Triangle Principle",
            authors: "Xinyu Lin, Ce Zhu, Qian Zhang, Yipeng Liu",
            venue: "Electronics Letters, vol. 53, no.20, pp. 1354–1356",
            type: "journal"
        },
        {
            title: "Robust sparse recovery in impulsive noise via Lp-L1 optimization",
            authors: "Fei Wen, Peilin Liu, Yipeng Liu, Robert Caiming Qiu, and Wenxian Yu",
            venue: "IEEE Transactions on Signal Processing, vol. 65, no. 1, pp. 105-118",
            type: "journal"
        }
    ],

    2016: [
        {
            title: "3D Interest Point Detection Based on Geometric Measures and Sparse Refinement",
            authors: "Xinyu Lin, Ce Zhu, Qian Zhang, Yipeng Liu",
            venue: "The 18th International Workshop on Multimedia Signal Processing (MMSP 2016), Montreal, Canada",
            type: "conference"
        },
        {
            title: "Robust sparse recovery for compressive sensing in impulsive noise using Lp-norm model fitting",
            authors: "Fei Wen, Peilin Liu, Yipeng Liu, Robert C. Qiu, Wenxian Yu",
            venue: "The 41st IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2016), Shanghai, China",
            type: "conference"
        }
    ],

    2015: [
        {
            title: "Compressed Sensing of Multi-Channel EEG Signals: The Simultaneous Cosparsity and Low Rank Optimization",
            authors: "Yipeng Liu, Maarten De Vos, Sabine Van Huffel",
            venue: "IEEE Transactions on Biomedical Engineering, vol. 62, no. 8, pp. 2055-2061",
            type: "journal"
        },
        {
            title: "Two-Level L1 Optimization for Compressed Sensing",
            authors: "Xiaolin Huang, Yipeng Liu, Lei Shi, Sabine Van Huffel, Johan Suykens",
            venue: "Signal Processing, vol. 108, pp. 459-475",
            type: "journal"
        }
    ],

    2014: [
        {
            title: "Iterative projection approach for phase retrieval of semi-sparse wave field",
            authors: "Rong Fan, Qun Wan, Fei Wen, Hui Chen and Yipeng Liu",
            venue: "EURASIP Journal on Advances in Signal Processing, no.24",
            type: "journal"
        },
        {
            title: "Globally Sparse and Locally Dense Signal Recovery for Compressed Sensing",
            authors: "Yipeng Liu",
            venue: "Journal of the Franklin Institute, vol. 351, no. 5",
            type: "journal"
        },
        {
            title: "Compressive Slow-Varying Wideband Power Spectrum Sensing for Cognitive Radio",
            authors: "Yipeng Liu, Qun Wan",
            venue: "Annals of Telecommunications, vol. 69, no. 9-10, pp. 559-567",
            type: "journal"
        }
    ],

    2013: [
        {
            title: "Multi-Structural Signal Recovery for Biomedical Compressive Sensing",
            authors: "Yipeng Liu, Maarten De Vos, Ivan Gligorijevic, Vladimir Matic, Yuqian Li, Sabine Van Huffel",
            venue: "IEEE Transactions on Biomedical Engineering, vol. 60, no. 10, pp. 2794–2805",
            type: "journal"
        },
        {
            title: "Wideband Direction of Arrival Estimation with Linear Array: Analysis and Closed-Form Formulae",
            authors: "Fei Wen, Qun Wan, Guibo He, Peng Zhang, and Yipeng Liu",
            venue: "Chinese Journal of Electronics, vol. 22, no. 4",
            type: "journal"
        },
        {
            title: "Unsupervised Nosologic Imaging for Glioma Diagnosis",
            authors: "Yuqian Li, Diana M. Sima, Sofie Van Cauter, Uwe Himmelreich, Anca R. Croitor Sava, Yiming Pi, Yipeng Liu, and Sabine Van Huffel",
            venue: "IEEE Transactions on Biomedical Engineering, vol. 60, no. 6, pp. 1760-1763",
            type: "journal"
        },
        {
            title: "A short note on Strongly Convex Programming for Exact Matrix Completion and Robust Principal Component Analysis",
            authors: "Qingshan You, Qun Wan, Yipeng Liu",
            venue: "Inverse Problems and Imaging, vol. 7, no. 1, pp. 305-306",
            type: "journal"
        }
    ],

    2012: [
        {
            title: "Sidelobe Suppression for Robust Capon Beamforming with Mainlobe to Sidelobe Power Ratio Maximization",
            authors: "Yipeng Liu, Qun Wan",
            venue: "IEEE Antennas and Wireless Propagation Letters, vol. 11, pp. 1218-1221",
            type: "journal"
        },
        {
            title: "Enhanced Compressive Wideband Frequency Spectrum Sensing for Dynamic Spectrum Access",
            authors: "Yipeng Liu, Qun Wan",
            venue: "EURASIP Journal on Advances in Signal Processing, vol. 2012, no. 177",
            type: "journal"
        },
        {
            title: "Sidelobe Suppression for Robust Beamformer Via the Mixed Norm Constraint",
            authors: "Yipeng Liu, Qun Wan",
            venue: "Wireless Personal Communications, vol. 65, no. 4, pp. 825-832",
            type: "journal"
        }
    ],

    2011: [
        {
            title: "Power-Efficient Ultra-wideband waveform design considering radio channel",
            authors: "Yipeng Liu, Qun Wan and Xiaoli Chu",
            venue: "Radioengineering, vol. 20, no. 1, pp. 179-183",
            type: "journal"
        },
        {
            title: "Anti-Sampling-Distortion Compressive Wideband Spectrum Sensing for Cognitive Radio",
            authors: "Yipeng Liu, Qun Wan",
            venue: "International Journal of Mobile Communications, vol. 9, no. 6, pp. 604-618",
            type: "journal"
        },
        {
            title: "Compressive Direction Finding Based on Amplitude Comparison",
            authors: "Ruiming Yang, Yipeng Liu, Qun Wan, Wanlin Yang",
            venue: "Journal of Networks, vol. 6, no. 3, pp. 498-504",
            type: "journal"
        }
    ],

    2010: [
        {
            title: "Robust Beamformer Based on Total Variation Minimization and Sparse Constraint",
            authors: "Yipeng Liu, Qun Wan",
            venue: "Electronics Letters, vol. 46, no. 25, pp. 1697-1699",
            type: "journal"
        }
    ],

    2009: [
        {
            title: "Improved anti-NBI UWB waveform design based on spectral factorization",
            authors: "Yipeng Liu and Qun Wan",
            venue: "The International Conference on Communications and Mobile Computing 2009 (CMC 2009), Kunming, China",
            type: "conference"
        }
    ],

    2008: [
        {
            title: "Designing Optimal UWB Pulse Waveform Directly by FIR Filter",
            authors: "Yipeng Liu and Qun Wan",
            venue: "The 4th International Conference on Wireless Communications, Networking and Mobile Computing, 2008. (WiCOM '08.), Dalian, China",
            type: "conference"
        },
        {
            title: "Optimal anti-interference UWB waveform design based on convex optimization",
            authors: "Yipeng Liu and Qun Wan",
            venue: "The 10th National Radar Conference of China, Beijing, China, pp. 481-484",
            type: "conference"
        }
    ]
};