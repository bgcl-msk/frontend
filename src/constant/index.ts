import { bluetick, desktop, emptywallet, inventory, mobile, shop, useroctagon, walletmoney, warehouse,carousel1,carousel2,carousel3,carousel4 } from "../assets";

const slides = [
    {
      url: carousel1,
      title: "Efficient Through Technology",
      words: "We equip businesses with the digital tools needed to increase operational efficiency and deliver exceptional service."
    },
    {
      url: carousel2,
      title:"Customer-Centric Retailing",
      words:"Our platform is designed to help retailers create personalized shopping experiences, foster lasting connections, and build brand loyalty."
    },
    {
      url: carousel3,
      title:"Elevating Retail Standards",
      words:" By offering tools for efficient operations and data-driven insights, we help businesses thrive in an ever-evolving industry."
    },
    {
      url: carousel4,
      title:"Discover How To Track Your Products",
      words:"Boost your productivity with a simple click of a button."
    },
  ];
const FAQs = [
    {
        question: " Do I get 24 hours support?",
        answer: "You get 24 hours support for all subscriptions.",
    },
    {
        question: "Is there an offline subscription?",
        answer: "Yes we are currently working on the offline version.",
    },
    {
        question: "How do I create an account?",
        answer: "To create an account, select the subscription of your choice and provide the necessary details.",
    },
    {
        question: "Can I manage multiple store locations from one account?",
        answer: " Yes, our POS system allows you to manage multiple store locations seamlessly from a single centralized account.",
    },
    {
        question: "Can I customize receipts with my logo and branding?",
        answer: "Yes, you can",
    },
    {
        question: "Is the POS system compatible with my smartphone or tablet?",
        answer: "Yes, our POS system is designed to be mobile-friendly and works on most smartphones and tablets with internet access. Aside from that we also have a mobile version for it.",
    },
    {
        question: "How often does the system receive updates?",
        answer: "We continuously work to improve our system, and updates are released regularly to introduce new features and enhancements. Updates are usually automatic and seamless.",
    },
    {
        question: "What payment methods are supported?",
        answer: "Our POS system supports various payment methods, including credit/debit cards, cash, mobile wallets, and contactless payments.",
    },
    {
        question: "What kind of reporting and analytics are available?",
        answer: "Our system provides comprehensive sales reports, inventory tracking, performance analytics, and many other analytics allowing you to make data-driven decisions.",
    },
    {
        question: "Can I set user permissions for my staff?",
        answer: "Yes, you can define user roles and permissions to control access to different features and functionalities.",
    }
];

const Pricing = [
    {
        title: "Basic",
        money: "$20",
        points : [
            "1 Organization $20 per organization",
            "1 Business $15 per business",
            "1 Default warehouse free",
            "2 Shops 1 free. $10 per shop",
            "5 User Management free",
            "2 Login Users",
            "Shared Infrastructure",
            "24 hours support",
        ],
        btn_words:"Start Free Trail",
    },
    {
        title: "Advanced",
        money: "$60",
        points : [
            "Unlimited Organization $30 per organization",
            "Unlimited Business $20 per business",
            "Unlimited warehouse $15 per warehouse",
            "Unlimited Shops $10 per shop",
            "Unlimited User Management $5 per user",
            "Unlimited Login Users",
            "24 hours support",
            "Advanced logging",
            "Shared Infrastructure",
        ],
        btn_words:"Choose Plan",
    },
    {
        title: "Enterprise",
        money: "$100",
        points : [
            "Custom Domain Name",
            "Unlimited Organization $50 per organization",
            "Unlimited Business $40 per business",
            "Unlimited warehouse $30 per warehouse",
            "Unlimited Shops $20 per shop",
            "Unlimited User Management $10 per user",
            "Unlimited Login Users",
            "24 hours support",
            "Advanced logging",
            "Dedicated Infrastructure",
        ],
        btn_words:"Choose Plan",
    },
];

const KeepingTracks = [
    {
        title:"Carefully Designed",
        icon:bluetick,
        words:"Our application is meticulously crafted with attention to every detail, ensuring an elegant and intuitive user experience"
    },
    {
        title:"Choose the App features",
        icon:bluetick,
        words:"Tailor your app experience to your unique needs.Our flexible options ensure you get exactly what you require."
    },
    {
        title:"Seamless Sync",
        icon:bluetick,
        words:"Experience effortless synchronization across all your devices. Your data stays updated in real time, whether you're on your desktop, tablet, or smartphone"
    },
    {
        title:"User Interactive",
        icon:bluetick,
        words:"Engage and empower your users with our interactive interface. Intuitive controls and dynamic features encourage user involvement, making every interaction a seamless and enjoyable experience."
    }
];

const Application_Features = [
    {
        title:"Advanced User Management",
        message:"Effortlessly manage user roles and permissions with our advanced user management system",
        icon:useroctagon,
    },
    {
        title:"Shop Management",
        message:"Streamline your business with our shop management tools, allowing you to easily handle products, orders, and more",
        icon:shop,
    },
    {
        title:"Warehouse Management",
        message:"Optimize inventory control and logistics with our warehouse management capabilities.",
        icon:warehouse,
    },
    {
        title:"Budget and Expenditure",
        message:"Track your budget and expenditures seamlessly to maintain financial health.",
        icon:emptywallet,
    },
    {
        title:"Sales Management",
        message:"Boost sales efficiency and effectiveness by utilizing our sales management features.",
        icon:walletmoney,
    },
    {
        title:"Inventory",
        message:"Efficiently manage your inventory levels and avoid stock outs or excess stock.",
        icon:inventory,
    },
    {
        title:"Advanced Logging and Tracking User Activities",
        message:"Generate insightful reports automatically, saving you time and effort.",
        icon:useroctagon,
    },

    {
        title:"Mobile Version",
        message:"Access your tools on the go with our intuitive mobile version.",
        icon:mobile,
    },
    {
        title:"Desktop Version",
        message:"Experience the full power of our application with the desktop version.",
        icon:desktop,
    },
    
];

const navlinks = [
    {
        title:"Store",
        link:"/store",
        id:"store",
    },
    {
        title:"Feature",
        link:"/feature",
        id:"feature",
    },
    {
        title:"About",
        link:"/about",
        id:"about",
    },
    {
        title:"Pricing",
        link:"/pricing",
        id:"pricing"
    },
    {
        title:"FAQ",
        link:"/faq",
        id:"faq",
    },
    {
        title:"Contact",
        link:"/contact",
        id:"contact",
    },
];
const Testimonies = [
    {
        words:"I've been using this software to manage my store's inventory, and the results have been incredible. It's like having a virtual assistant that keeps everything organized and easily accessible. From keeping track of stock levels to generating reports, this software has streamlined my business operations and saved me valuable time. Highly recommended!",
        image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name:"Angela Wo",
        position:"CEO",
        company_name:"German Star",
    },
    {
        words:"As a store owner, staying on top of inventory has always been a challenge. But ever since I started using this software, managing and tracking items has become a breeze. The user-friendly interface makes it simple to add, edit, and monitor products. I love how I can set up automatic alerts for low-stock items and easily generate detailed reports. This software has truly revolutionized the way I run my store.",
        image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"Dante Ho",
        position:"CEO",
        company_name:"German Star",
    }
]

export{FAQs, Pricing, Application_Features, KeepingTracks, navlinks, slides, Testimonies};