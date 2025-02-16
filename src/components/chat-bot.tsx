import { useState } from "react";
import { BotMessageSquare, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MessageOption {
  label: string;
  value: string;
}

interface Message {
  type: "bot" | "user";
  content: string;
  timestamp: Date;
  showCategories?: boolean;
}

const categories: MessageOption[] = [
  { label: "Debt Consolidation", value: "debt" },
  { label: "Investment Advice", value: "investment" },
  { label: "Budgeting Tips", value: "budget" },
  { label: "Loan Information", value: "loan" },
  { label: "Financial Planning", value: "planning" },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(true);
  const username = "Guest";

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && messages.length === 0) {
      initializeChat();
    }
  };

  const initializeChat = () => {
    const greeting = isGuest
      ? `Hello ${username}! Welcome to WealthyDebt's AI Assistant. How can I help you today?`
      : `Welcome back, ${username}! How can I help you with your financial needs today?`;

    setMessages([
      {
        type: "bot",
        content: greeting,
        timestamp: new Date(),
      },
      {
        type: "bot",
        content: "Please select a category to get started:",
        timestamp: new Date(),
        showCategories: true,
      },
    ]);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    let response;

    switch (category) {
      case "debt":
        response =
          "How can I help you with debt consolidation? You can ask about our rates, eligibility, or application process.";
        break;
      case "investment":
        response =
          "Looking to grow your wealth? I can provide information about our investment products and strategies.";
        break;
      case "budget":
        response =
          "Need help managing your finances? I can share tips on creating a budget that works for you.";
        break;
      case "loan":
        response =
          "Interested in our loan options? I can explain our personal loans, mortgages, and auto loans.";
        break;
      case "planning":
        response =
          "Planning for the future is important. I can guide you through retirement planning, education savings, and more.";
        break;
      default:
        response = "How can I assist you with that topic?";
    }

    setMessages([
      ...messages,
      {
        type: "user",
        content: `Selected: ${category}`,
        timestamp: new Date(),
      },
      {
        type: "bot",
        content: response,
        timestamp: new Date(),
      },
    ]);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const renderMessage = (message: Message) => {
    return (
      <div
        className={`flex flex-col text-sm ${
          message.type === "user" ? "items-end" : "items-start"
        }`}
      >
        <div className="text-muted-foreground mb-1 text-xs">
          {formatDate(message.timestamp)}
        </div>
        <div
          className={`px-4 py-2 max-w-[80%] ${
            message.type === "user"
              ? "bg-primary text-primary-foreground rounded-t-lg rounded-bl-lg"
              : "bg-muted rounded-t-lg rounded-br-lg"
          }`}
        >
          <p>{message.content}</p>
        </div>
        {message.showCategories && (
          <div className="mt-4 w-full">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-3 py-0.5 rounded-full transition-colors ${
                    selectedCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  onClick={() => handleCategorySelect(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger className="fixed bottom-4 right-4 bg-secondary text-secondary-foreground size-12 rounded-full flex items-center justify-center">
        <BotMessageSquare
          className={`size-8 absolute transition-all duration-300 ${
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <X
          className={`size-8 absolute transition-all duration-300 ${
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="p-0 rounded-xl max-w-lg h-[32rem] border-none flex flex-col"
      >
        <div className="bg-secondary rounded-t-xl text-secondary-foreground font-medium p-3">
          <span className="text-black">Wealthy</span>Debt's AI Assistant
        </div>

        <div className="p-3 flex-1 overflow-y-auto space-y-4">
          {messages.map((message) => renderMessage(message))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
