import { HeartHandshake, PiggyBank, TrendingDown, Users } from "lucide-react";

export const WEBINAR_ITEMS = [
  {
    title: "Financial Freedom Fundamentals",
    description:
      "Master the basics of wealth building and debt elimination in this comprehensive introduction.",
    host: "James Wilson",
    duration: "4h",
    oldPrice: "₱4999.99",
    price: "₱2499.99",
    isOnSale: true,
    tags: ["WEBINAR", "BASICS"],
    lessons: [
      "Introduction to Wealth Building",
      "Managing Debt Effectively",
      "Saving Strategies",
    ],
    date: "2025-02-20",
  },
  {
    title: "Tax Strategies for Investors",
    description:
      "Learn legal tax minimization strategies to keep more of what you earn.",
    host: "Sarah Johnson, CPA",
    duration: "6h",
    oldPrice: "₱6499.99",
    price: "₱3999.99",
    isOnSale: true,
    tags: ["WEBINAR", "TAX PLANNING"],
    lessons: [
      "Understanding Tax Brackets",
      "Deductions and Credits",
      "Tax-Advantaged Accounts",
    ],
    date: "2025-02-22",
  },
  {
    title: "Real Estate Wealth Building",
    description:
      "Discover how to build generational wealth through strategic real estate investments.",
    host: "Michael Roberts",
    duration: "8h",
    oldPrice: "₱7499.99",
    price: "₱4499.99",
    isOnSale: true,
    tags: ["WEBINAR", "REAL ESTATE"],
    lessons: [
      "Finding Profitable Properties",
      "Financing Strategies",
      "Managing Rental Income",
    ],
    date: "2025-02-25",
  },
  {
    title: "Retirement Planning Mastery",
    description:
      "Create a sustainable plan for a comfortable retirement without financial stress.",
    host: "Jennifer Lopez, CFP",
    duration: "5h",
    oldPrice: "₱5999.99",
    price: "₱3499.99",
    isOnSale: true,
    tags: ["WEBINAR", "RETIREMENT"],
    lessons: [
      "Setting Retirement Goals",
      "Investment Strategies",
      "Managing Withdrawals",
    ],
    date: "2025-02-27",
  },
  {
    title: "Stock Market for Beginners",
    description:
      "Learn how to start investing in stocks with confidence and minimal risk.",
    host: "David Chang",
    duration: "4h",
    oldPrice: "₱4499.99",
    price: "₱2999.99",
    isOnSale: true,
    tags: ["WEBINAR", "STOCKS"],
    lessons: [
      "Stock Market Basics",
      "Analyzing Stocks",
      "Building a Portfolio",
    ],
    date: "2025-03-01",
  },
  {
    title: "Crypto Investing Fundamentals",
    description:
      "Understand blockchain technology and make informed cryptocurrency investments.",
    host: "Alex Rivera",
    duration: "3h",
    oldPrice: "₱3999.99",
    price: "₱1999.99",
    isOnSale: true,
    tags: ["WEBINAR", "CRYPTO"],
    lessons: [
      "Introduction to Blockchain",
      "Types of Cryptocurrencies",
      "Risk Management in Crypto",
    ],
    date: "2025-03-03",
  },
  {
    title: "Debt Freedom Blueprint",
    description:
      "A step-by-step plan to eliminate all debt and build true financial independence.",
    host: "Patricia Moore",
    duration: "6h",
    oldPrice: "₱5499.99",
    price: "₱2999.99",
    isOnSale: true,
    tags: ["WEBINAR", "DEBT ELIMINATION"],
    lessons: [
      "Budgeting for Debt Reduction",
      "Snowball vs. Avalanche Method",
      "Long-Term Financial Stability",
    ],
    date: "2025-03-06",
  },
  {
    title: "Generational Wealth Planning",
    description:
      "Learn how to build and preserve wealth that lasts for generations to come.",
    host: "Robert Washington",
    duration: "7h",
    oldPrice: "₱6999.99",
    price: "₱3999.99",
    isOnSale: true,
    tags: ["WEBINAR", "LEGACY PLANNING"],
    lessons: [
      "Creating a Family Trust",
      "Investing for Future Generations",
      "Estate Planning Essentials",
    ],
    date: "2025-03-08",
  },
];

export const CARDS = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    content: "Some content here",
    imageUrl: "images/image-placeholder.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Financial Advisor",
    content: "Join our webinar to learn about tax-free retirement strategies.",
    imageUrl: "images/image-placeholder.webp",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Debt Specialist",
    content:
      "Discover effective debt elimination techniques in our upcoming webinar.",
    imageUrl: "images/image-placeholder.webp",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Wealth Manager",
    content:
      "Learn how to build generational wealth through smart investments.",
    imageUrl: "images/image-placeholder.webp",
  },
  {
    id: 5,
    name: "David Brown",
    designation: "Insurance Expert",
    content:
      "Understand the benefits of living benefits insurance in our next webinar.",
    imageUrl: "images/image-placeholder.webp",
  },
];

export const BENEFITS = [
  {
    title: "Tax-Free Retirement",
    bottom: "30rem",
    left: "30rem",
  },
  {
    title: "Debt Elimination",
    top: "15rem",
    left: "40rem",
  },
  {
    title: "Generational Wealth",
    bottom: "15rem",
    right: "5rem",
  },
  {
    title: "Living Benefits",
    top: "20rem",
    right: "10rem",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "D’Andrea and FRED Financial Services got me more for my money. She increased the principal sum for my trust and showed me how to build real wealth. I’ve referred my family and friends because I truly believe in her vision to educate and empower everyone, she works with to create generational wealth.",
    name: "Phillie W. ",
    title: "Client",
  },
  {
    quote:
      "Before working with D’Andrea at FRED Financial Services, I had term policies with no living benefits or cash value. Thanks to her expertise, I now have a policy and an annuity that benefit me now and will secure my future during retirement. Her guidance is a game-changer!",
    name: "Katrina J.",
    title: "Client",
  },
  {
    quote:
      "I was so frustrated with my previous insurance company—they made it nearly impossible to cancel my policy. I reached out to D’Andrea in a panic, and she responded immediately. Her knowledge and quick action not only got me a new policy with a lower premium but also helped me receive thousands of dollars from my old policy that I didn’t have to pay back! She even set up an annuity to reduce the losses I was experiencing with my traditional 401(k). Working with D’Andrea was the best decision for my financial future.",
    name: "D. Bobbitt",
    title: "Client",
  },
  {
    quote:
      "At 92, I thought my options were limited, but D'Andrea showed me otherwise. I invested in an annuity to take advantage of the higher interest rates. My old CD just wasn’t giving me the returns I deserved. Now, my money is working harder for me, and I feel more secure about my finances.",
    name: "I. Kaufman",
    title: "Client",
  },
];

export const FEATURES = [
  {
    icon: PiggyBank,
    title: "Tax-Free Retirement",
    description:
      "Secure your future with smart financial strategies that allow you to grow and access your wealth without heavy tax burdens.",
  },
  {
    icon: TrendingDown,
    title: "Debt Elimination",
    description:
      "Break free from high-interest debt faster with proven strategies designed to reduce financial stress and build long-term stability.",
  },
  {
    icon: Users,
    title: "Generational Wealth",
    description:
      "Create a lasting financial legacy by making informed decisions that benefit not just you, but future generations.",
  },
  {
    icon: HeartHandshake,
    title: "Living Benefits",
    description:
      "Protect yourself and your loved ones with financial solutions that provide access to funds in times of need, ensuring peace of mind.",
  },
];
