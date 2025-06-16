import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const startupData: Prisma.StartupCreateInput[] = [
    {
        name: "Stripe",
        description: "Financial infrastructure platform for businesses. Stripe provides APIs that web developers can use to integrate payment processing into their websites and mobile applications.",
        industry: "FinTech",
        stage: "SERIES_C",
        fundingGoal: 5000000,
        isApproved: true,
        founder: { create: {
            name: "Patrick Collison",
            email: "patrick@stripe.com",
        }},
        amountRaised: 1000000,
    },
    {
        name: "Notion",
        description: "All-in-one workspace for notes, docs, and project management. Notion combines notes, tasks, wikis, and databases into a single, seamless interface.",
        industry: "Productivity Software",
        stage: "SERIES_A",
        fundingGoal: 1000000,
        isApproved: true,
        founder: { create: {
            name: "Ivan Zhao",
            email: "ivan@notion.so",
        }},
        amountRaised: 500000,
    },
    {
        name: "Figma",
        description: "Cloud-based design tool that enables teams to collaborate on interface design in real-time. Figma has revolutionized how designers work together.",
        industry: "Design Software",
        stage: "SERIES_B",
        fundingGoal: 15000000,
        isApproved: true,
        founder: { create: {
            name: "Dylan Field",
            email: "dylan@figma.com",
        }},
        amountRaised: 5000000,
    },
    {
        name: "Discord",
        description: "Voice, video and text communication service. Discord allows users to create communities and communicate through voice calls, video calls, text messaging, and media sharing.",
        industry: "Social Communication",
        stage: "SERIES_C",
        fundingGoal: 350000000,
        isApproved: true,
        founder: { create: {
            name: "Jason Citron",
            email: "jason@discord.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Canva",
        description: "Online design and publishing tool. Canva makes it easy to create professional-quality designs for social media, presentations, and more.",
        industry: "Design Software",
        stage: "SERIES_B",
        fundingGoal: 250000000,
        isApproved: true,
        founder: { create: {
            name: "Melanie Perkins",
            email: "melanie@canva.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Robinhood",
        description: "Commission-free stock trading and investing app. Robinhood makes investing accessible to everyone through its mobile-first platform.",
        industry: "FinTech",
        stage: "SERIES_A",
        fundingGoal: 450000000,
        isApproved: true,
        founder: { create: {
            name: "Vladimir Tenev",
            email: "vlad@robinhood.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Airbnb",
        description: "Online marketplace for lodging and tourism experiences. Airbnb connects hosts who want to rent out their properties with guests who are looking for accommodations.",
        industry: "Travel & Hospitality",
        stage: "SERIES_C",
        fundingGoal: 600000000,
        isApproved: true,
        founder: { create: {
            name: "Brian Chesky",
            email: "brian@airbnb.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Slack",
        description: "Business communication platform. Slack brings team communication and collaboration into one place with real-time messaging, archiving, and search.",
        industry: "Enterprise Software",
        stage: "SERIES_B",
        fundingGoal: 500000000,
        isApproved: true,
        founder: { create: {
            name: "Stewart Butterfield",
            email: "stewart@slack.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Zoom",
        description: "Video communications platform. Zoom provides video telephony and online chat services through a cloud-based peer-to-peer software platform.",
        industry: "Video Conferencing",
        stage: "SERIES_A",
        fundingGoal: 300000000,
        isApproved: true,
        founder: { create: {
            name: "Eric Yuan",
            email: "eric@zoom.us",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Plaid",
        description: "Financial services company that builds a data transfer network. Plaid allows applications to connect with users' bank accounts.",
        industry: "FinTech",
        stage: "SERIES_B",
        fundingGoal: 400000000,
        isApproved: true,
        founder: { create: {
            name: "Zach Perret",
            email: "zach@plaid.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "GitLab",
        description: "DevOps platform delivered as a single application. GitLab helps teams collaborate and ship software faster.",
        industry: "DevOps",
        stage: "SERIES_C",
        fundingGoal: 300000000,
        isApproved: true,
        founder: { create: {
            name: "Sid Sijbrandij",
            email: "sid@gitlab.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "MongoDB",
        description: "Document-oriented database program. MongoDB is a cross-platform document-oriented database program.",
        industry: "Database Software",
        stage: "SERIES_A",
        fundingGoal: 400000000,
        isApproved: true,
        founder: { create: {
            name: "Dev Ittycheria",
            email: "dev@mongodb.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Twilio",
        description: "Cloud communications platform. Twilio allows software developers to programmatically make and receive phone calls and send and receive text messages.",
        industry: "Cloud Communications",
        stage: "SERIES_B",
        fundingGoal: 500000000,
        isApproved: true,
        founder: { create: {
            name: "Jeff Lawson",
            email: "jeff@twilio.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Snowflake",
        description: "Cloud-based data-warehousing company. Snowflake provides a cloud-based data storage and analytics service.",
        industry: "Cloud Computing",
        stage: "SERIES_C",
        fundingGoal: 350000000,
        isApproved: true,
        founder: { create: {
            name: "Frank Slootman",
            email: "frank@snowflake.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Databricks",
        description: "Data and AI company. Databricks provides a unified analytics platform for data engineering, collaborative data science, and business analytics.",
        industry: "Data Analytics",
        stage: "SERIES_A",
        fundingGoal: 450000000,
        isApproved: true,
        founder: { create: {
            name: "Ali Ghodsi",
            email: "ali@databricks.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "UiPath",
        description: "Robotic process automation company. UiPath develops a platform for end-to-end robotic process automation.",
        industry: "Robotic Process Automation",
        stage: "SERIES_B",
        fundingGoal: 250000000,
        isApproved: true,
        founder: { create: {
            name: "Daniel Dines",
            email: "daniel@uipath.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Confluent",
        description: "Event streaming platform. Confluent provides a streaming platform based on Apache Kafka.",
        industry: "Data Streaming",
        stage: "SERIES_C",
        fundingGoal: 300000000,
        isApproved: true,
        founder: { create: {
            name: "Jay Kreps",
            email: "jay@confluent.io",
        }},
        amountRaised: 100000000,
    },
    {
        name: "HashiCorp",
        description: "Infrastructure automation software company. HashiCorp provides open-source tools and commercial products for infrastructure automation.",
        industry: "DevOps",
        stage: "SERIES_A",
        fundingGoal: 350000000,
        isApproved: true,
        founder: { create: {
            name: "Mitchell Hashimoto",
            email: "mitchell@hashicorp.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "GitHub",
        description: "Web-based hosting service for version control. GitHub provides distributed version control and source code management functionality.",
        industry: "Developer Tools",
        stage: "SERIES_B",
        fundingGoal: 400000000,
        isApproved: true,
        founder: { create: {
            name: "Chris Wanstrath",
            email: "chris@github.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Cloudflare",
        description: "Web infrastructure and website security company. Cloudflare provides content delivery network services, DDoS mitigation, and internet security.",
        industry: "Web Security",
        stage: "SERIES_C",
        fundingGoal: 450000000,
        isApproved: true,
        founder: { create: {
            name: "Matthew Prince",
            email: "matthew@cloudflare.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "DeepMind",
        description: "British AI research laboratory developing artificial general intelligence. DeepMind has made breakthroughs in protein folding, game playing, and healthcare applications.",
        industry: "AI",
        stage: "SERIES_A",
        fundingGoal: 400000000,
        isApproved: true,
        founder: { create: {
            name: "Demis Hassabis",
            email: "demis@deepmind.com",
        }},
        amountRaised: 150000000,
    },
    {
        name: "Tempus",
        description: "AI-powered precision medicine company that collects and analyzes molecular and clinical data to personalize cancer treatments.",
        industry: "HealthTech",
        stage: "SERIES_B",
        fundingGoal: 300000000,
        isApproved: true,
        founder: { create: {
            name: "Eric Lefkofsky",
            email: "eric@tempus.com",
        }},
        amountRaised: 200000000,
    },
    {
        name: "Insilico Medicine",
        description: "Hong Kong-based AI company using deep learning for drug discovery and development, focusing on aging research and disease treatment.",
        industry: "HealthTech",
        stage: "SERIES_A",
        fundingGoal: 250000000,
        isApproved: true,
        founder: { create: {
            name: "Alex Zhavoronkov",
            email: "alex@insilico.com",
        }},
        amountRaised: 150000000,
    },
    {
        name: "Babylon Health",
        description: "UK-based digital health service that combines AI with human expertise to provide accessible and affordable healthcare.",
        industry: "HealthTech",
        stage: "SERIES_B",
        fundingGoal: 200000000,
        isApproved: true,
        founder: { create: {
            name: "Ali Parsa",
            email: "ali@babylonhealth.com",
        }},
        amountRaised: 100000000,
    },
    {
        name: "SenseTime",
        description: "Chinese AI company specializing in computer vision and deep learning, with applications in healthcare, autonomous vehicles, and smart cities.",
        industry: "AI",
        stage: "SERIES_C",
        fundingGoal: 500000000,
        isApproved: true,
        founder: { create: {
            name: "Xu Li",
            email: "xuli@sensetime.com",
        }},
        amountRaised: 300000000,
    },
    {
        name: "Butterfly Network",
        description: "Revolutionary handheld ultrasound device powered by AI, making medical imaging accessible and affordable worldwide.",
        industry: "HealthTech",
        stage: "SERIES_A",
        fundingGoal: 250000000,
        isApproved: true,
        founder: { create: {
            name: "Jonathan Rothberg",
            email: "jonathan@butterflynetwork.com",
        }},
        amountRaised: 150000000,
    },
    {
        name: "Element AI",
        description: "Canadian AI company developing enterprise AI solutions, focusing on making AI more accessible and practical for businesses.",
        industry: "AI",
        stage: "SERIES_B",
        fundingGoal: 150000000,
        isApproved: true,
        founder: { create: {
            name: "Jean-François Gagné",
            email: "jf@elementai.com",
        }},
        amountRaised: 80000000,
    },
    {
        name: "Ada Health",
        description: "German health platform using AI to help people understand and manage their health, providing personalized health assessments.",
        industry: "HealthTech",
        stage: "SERIES_A",
        fundingGoal: 120000000,
        isApproved: true,
        founder: { create: {
            name: "Daniel Nathrath",
            email: "daniel@ada.com",
        }},
        amountRaised: 60000000,
    },
    {
        name: "Viz.ai",
        description: "AI-powered stroke detection and care coordination platform that helps healthcare providers make faster, more informed decisions.",
        industry: "HealthTech",
        stage: "SERIES_B",
        fundingGoal: 180000000,
        isApproved: true,
        founder: { create: {
            name: "Chris Mansi",
            email: "chris@viz.ai",
        }},
        amountRaised: 100000000,
    },
    {
        name: "Mobvoi",
        description: "Chinese AI company developing voice recognition and natural language processing technologies for smart devices and healthcare applications.",
        industry: "AI",
        stage: "SERIES_C",
        fundingGoal: 200000000,
        isApproved: true,
        founder: { create: {
            name: "Zhiyuan Li",
            email: "zhiyuan@mobvoi.com",
        }},
        amountRaised: 120000000,
    },
    {
        name: "NeuralNest",
        description: "AI-powered mental health platform that uses natural language processing to provide personalized therapy and emotional support through conversational AI.",
        industry: "HealthTech",
        stage: "PRE_SEED",
        fundingGoal: 500000,
        isApproved: true,
        founder: { create: {
            name: "Sarah Chen",
            email: "sarah@neuralnest.ai",
        }},
        amountRaised: 100000,
    },
    {
        name: "QuantumLeap",
        description: "Quantum computing software platform that makes quantum algorithms accessible to developers through a simple API interface.",
        industry: "Quantum Computing",
        stage: "PRE_SEED",
        fundingGoal: 750000,
        isApproved: true,
        founder: { create: {
            name: "Marcus Rodriguez",
            email: "marcus@quantumleap.tech",
        }},
        amountRaised: 150000,
    },
    {
        name: "EcoSense",
        description: "IoT platform that uses AI to optimize energy consumption in buildings, reducing carbon footprint through smart automation.",
        industry: "GreenTech",
        stage: "PRE_SEED",
        fundingGoal: 600000,
        isApproved: true,
        founder: { create: {
            name: "Priya Patel",
            email: "priya@ecosense.io",
        }},
        amountRaised: 120000,
    },
    {
        name: "BioForge",
        description: "Synthetic biology platform that enables researchers to design and test genetic circuits for medical applications using AI.",
        industry: "Biotech",
        stage: "PRE_SEED",
        fundingGoal: 800000,
        isApproved: true,
        founder: { create: {
            name: "David Kim",
            email: "david@bioforge.bio",
        }},
        amountRaised: 200000,
    },
    {
        name: "NeuroSync",
        description: "Brain-computer interface technology that enables direct neural control of digital devices for accessibility applications.",
        industry: "Neurotech",
        stage: "PRE_SEED",
        fundingGoal: 700000,
        isApproved: true,
        founder: { create: {
            name: "Emma Thompson",
            email: "emma@neurosync.tech",
        }},
        amountRaised: 180000,
    },
    {
        name: "SpaceForge",
        description: "Space manufacturing platform that enables companies to conduct microgravity research and production in low Earth orbit.",
        industry: "SpaceTech",
        stage: "SEED",
        fundingGoal: 2000000,
        isApproved: true,
        founder: { create: {
            name: "Alex Morgan",
            email: "alex@spaceforge.space",
        }},
        amountRaised: 500000,
    },
    {
        name: "CryptoGuard",
        description: "AI-powered security platform that uses machine learning to detect and prevent cryptocurrency fraud and smart contract vulnerabilities.",
        industry: "Blockchain",
        stage: "SEED",
        fundingGoal: 1500000,
        isApproved: true,
        founder: { create: {
            name: "Raj Patel",
            email: "raj@cryptoguard.ai",
        }},
        amountRaised: 400000,
    },
    {
        name: "AgriTech AI",
        description: "Precision agriculture platform that uses computer vision and machine learning to optimize crop yields and reduce water usage.",
        industry: "AgTech",
        stage: "SEED",
        fundingGoal: 1800000,
        isApproved: true,
        founder: { create: {
            name: "Maria Garcia",
            email: "maria@agritech.ai",
        }},
        amountRaised: 450000,
    },
    {
        name: "RoboMed",
        description: "Autonomous medical robotics platform that assists surgeons with precise, AI-guided surgical procedures.",
        industry: "HealthTech",
        stage: "SEED",
        fundingGoal: 2500000,
        isApproved: true,
        founder: { create: {
            name: "James Wilson",
            email: "james@robomed.tech",
        }},
        amountRaised: 600000,
    },
    {
        name: "OceanAI",
        description: "Marine conservation platform that uses AI and satellite imagery to monitor and protect ocean ecosystems.",
        industry: "Environmental Tech",
        stage: "SEED",
        fundingGoal: 2200000,
        isApproved: true,
        founder: { create: {
            name: "Sophie Chen",
            email: "sophie@oceanai.eco",
        }},
        amountRaised: 550000,
    }
];

const tokenData: Prisma.TokenCreateInput[] = [
    {
        name: "Arbitrum",
        symbol: "ARB",
        description: "A Layer 2 scaling solution for Ethereum that uses optimistic rollups to enable faster and cheaper transactions while maintaining Ethereum's security.",
        totalSupply: 10000000000,
        tokenomics: "DEFLATIONARY",
        fundingGoal: 200000000,
        creator: { create: { name: "Steven Goldfeder", email: "steven@arbitrum.io" } },
    },
    {
        name: "Optimism",
        symbol: "OP",
        description: "A Layer 2 scaling solution for Ethereum that uses optimistic rollups to reduce gas fees and increase transaction throughput.",
        totalSupply: 4294967296,
        tokenomics: "INFLATIONARY",
        fundingGoal: 150000000,
        creator: { create: { name: "Jinglan Wang", email: "jinglan@optimism.io" } },
    },
    {
        name: "Celestia",
        symbol: "TIA",
        description: "A modular blockchain network that enables anyone to easily deploy their own blockchain with minimal overhead.",
        totalSupply: 1000000000,
        tokenomics: "INFLATIONARY",
        fundingGoal: 180000000,
        creator: { create: { name: "Mustafa Al-Bassam", email: "mustafa@celestia.org" } },
    },
    {
        name: "Sui",
        symbol: "SUI",
        description: "A next-generation smart contract platform with high throughput, instant settlement, and rich on-chain assets.",
        totalSupply: 10000000000,
        tokenomics: "DEFLATIONARY",
        fundingGoal: 250000000,
        creator: { create: { name: "Evan Cheng", email: "evan@sui.io" } },
    },
    {
        name: "Aptos",
        symbol: "APT",
        description: "A Layer 1 blockchain that aims to bring mainstream adoption to web3 and empower an ecosystem of DApps.",
        totalSupply: 1000000000,
        tokenomics: "INFLATIONARY",
        fundingGoal: 220000000,
        creator: { create: { name: "Mo Shaikh", email: "mo@aptoslabs.com" } },
    },
    {
        name: "Mantle",
        symbol: "MNT",
        description: "A high-performance Ethereum Layer 2 network built with modular architecture for optimal scalability and security.",
        totalSupply: 6219315794,
        tokenomics: "DEFLATIONARY",
        fundingGoal: 120000000,
        creator: { create: { name: "Arjun Kalsy", email: "arjun@mantle.xyz" } },
    },
    {
        name: "Sei",
        symbol: "SEI",
        description: "A Layer 1 blockchain specialized for trading, offering the fastest finality and highest throughput for DeFi applications.",
        totalSupply: 10000000000,
        tokenomics: "INFLATIONARY",
        fundingGoal: 160000000,
        creator: { create: { name: "Jay Jog", email: "jay@sei.io" } },
    },
    {
        name: "Berachain",
        symbol: "BERA",
        description: "A high-performance EVM-compatible blockchain built on Cosmos, focusing on DeFi and gaming applications.",
        totalSupply: 1000000000,
        tokenomics: "DEFLATIONARY",
        fundingGoal: 140000000,
        creator: { create: { name: "Smokey", email: "smokey@berachain.com" } },
    },
    {
        name: "Monad",
        symbol: "MON",
        description: "A high-performance Layer 1 blockchain that maintains full EVM compatibility while offering parallel transaction processing.",
        totalSupply: 1000000000,
        tokenomics: "INFLATIONARY",
        fundingGoal: 190000000,
        creator: { create: { name: "Keone Hon", email: "keone@monad.xyz" } },
    },
    {
        name: "Eclipse",
        symbol: "ECL",
        description: "A customizable Layer 2 solution that allows projects to deploy their own app-specific rollups with shared security.",
        totalSupply: 1000000000,
        tokenomics: "DEFLATIONARY",
        fundingGoal: 170000000,
        creator: { create: { name: "Neel Somani", email: "neel@eclipse.builders" } },
    }
];

const investorData: Prisma.UserCreateInput[] = [
    {
        name: "Michael Novogratz",
        email: "michael@galaxy.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Cathie Wood",
        email: "cathie@ark.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Chamath Palihapitiya",
        email: "chamath@socialcapital.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Naval Ravikant",
        email: "naval@angel.co",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Balaji Srinivasan",
        email: "balaji@angel.co",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Fred Wilson",
        email: "fred@usv.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Chris Dixon",
        email: "chris@a16z.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Katie Haun",
        email: "katie@haun.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Tim Draper",
        email: "tim@draper.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Barry Silbert",
        email: "barry@dcg.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    }
];

const founderData: Prisma.UserCreateInput[] = [
    {
        name: "Vitalik Buterin",
        email: "vitalik@ethereum.org",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Anatoly Yakovenko",
        email: "anatoly@solana.com",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Charles Hoskinson",
        email: "charles@cardano.org",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Gavin Wood",
        email: "gavin@polkadot.network",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Sergey Nazarov",
        email: "sergey@chain.link",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Emin Gün Sirer",
        email: "emin@avax.network",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Sandeep Nailwal",
        email: "sandeep@polygon.technology",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Jae Kwon",
        email: "jae@cosmos.network",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Hayden Adams",
        email: "hayden@uniswap.org",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    },
    {
        name: "Juan Benet",
        email: "juan@filecoin.io",
        emailVerified: true,
        role: "FOUNDER",
        founderStatus: "APPROVED",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        }
    }
];

const portfolioUserData: Prisma.UserCreateInput[] = [
    {
        name: "John Smith",
        email: "john@example.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        },
        accounts: {
            create: {
                accountId: "john_smith",
                providerId: "credentials",
                password: "hashed_password_here" // In production, this should be properly hashed
            }
        },
        wallets: {
            create: [
                {
                    address: "0x1234567890abcdef1234567890abcdef12345678",
                    chain: "ETHEREUM"
                }
            ]
        }
    },
    {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        },
        accounts: {
            create: {
                accountId: "sarah_johnson",
                providerId: "credentials",
                password: "hashed_password_here"
            }
        },
        wallets: {
            create: [
                {
                    address: "0xabcdef1234567890abcdef1234567890abcdef12",
                    chain: "POLYGON"
                }
            ]
        }
    },
    {
        name: "Michael Chen",
        email: "michael@example.com",
        emailVerified: true,
        role: "INVESTOR",
        kycRecord: {
            create: {
                status: "VERIFIED"
            }
        },
        accounts: {
            create: {
                accountId: "michael_chen",
                providerId: "credentials",
                password: "hashed_password_here"
            }
        },
        wallets: {
            create: [
                {
                    address: "0x7890abcdef1234567890abcdef1234567890abcd",
                    chain: "ARBITRUM"
                }
            ]
        }
    }
];

async function main() {
    console.log('Start seeding...');
    
    // Create portfolio users first
    const createdUsers = await Promise.all(
        portfolioUserData.map(user => 
            prisma.user.create({
                data: user
            })
        )
    );
    console.log('Created portfolio users');

    // Create founders
    const _createdFounders = await Promise.all(
        founderData.map(founder => 
            prisma.user.create({
                data: founder
            })
        )
    );
    console.log('Created founders');
    
    // Create investors
    const _createdInvestors = await Promise.all(
        investorData.map(investor => 
            prisma.user.create({
                data: investor
            })
        )
    );
    console.log('Created investors');
    
    // Create startups
    const createdStartups = await Promise.all(
        startupData.map(startup => 
            prisma.startup.create({
                data: startup
            })
        )
    );
    console.log('Created startups');

    // Create tokens
    const createdTokens = await Promise.all(
        tokenData.map(token => 
            prisma.token.create({
                data: token
            })
        )
    );
    console.log('Created tokens');

    // Create portfolio investments
    const stripeStartup = createdStartups.find(s => s.name === "Stripe");
    const notionStartup = createdStartups.find(s => s.name === "Notion");
    const arbToken = createdTokens.find(t => t.symbol === "ARB");
    
    if (stripeStartup && notionStartup && arbToken) {
        const investments = [
            {
                amount: 50000,
                ownership: 0.5,
                userId: createdUsers[0].id, // John Smith
                startupId: stripeStartup.id,
                vesting: [
                    {
                        cliffDate: new Date("2024-12-31"),
                        unlockDate: new Date("2025-12-31"),
                        percentage: 0.25
                    },
                    {
                        cliffDate: new Date("2025-12-31"),
                        unlockDate: new Date("2026-12-31"),
                        percentage: 0.25
                    }
                ]
            },
            {
                amount: 25000,
                ownership: 0.3,
                userId: createdUsers[1].id, // Sarah Johnson
                tokenId: arbToken.id,
                vesting: [
                    {
                        cliffDate: new Date("2024-06-30"),
                        unlockDate: new Date("2025-06-30"),
                        percentage: 0.5
                    }
                ]
            },
            {
                amount: 100000,
                ownership: 1.0,
                userId: createdUsers[2].id, // Michael Chen
                startupId: notionStartup.id,
                vesting: [
                    {
                        cliffDate: new Date("2024-09-30"),
                        unlockDate: new Date("2025-09-30"),
                        percentage: 0.33
                    },
                    {
                        cliffDate: new Date("2025-09-30"),
                        unlockDate: new Date("2026-09-30"),
                        percentage: 0.33
                    },
                    {
                        cliffDate: new Date("2026-09-30"),
                        unlockDate: new Date("2027-09-30"),
                        percentage: 0.34
                    }
                ]
            }
        ];

        for (const investment of investments) {
            const { vesting, ...investmentData } = investment;
            const createdInvestment = await prisma.investment.create({
                data: {
                    ...investmentData,
                    vesting: {
                        create: vesting
                    }
                }
            });
            console.log(`Created investment with id: ${createdInvestment.id}`);
        }
    }
    
    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });