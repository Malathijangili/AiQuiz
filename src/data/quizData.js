export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Artificial Intelligence",
    question: "Which of the following is a fundamental branch of Artificial Intelligence?",
    options: [
      "Machine Learning",
      "HTML Markup",
      "CSS Styling",
      "SQL Querying"
    ],
    correctAnswerIndex: 0,
    explanation: "Machine Learning is a subset and core branch of AI that enables systems to automatically learn and improve from experience without explicit programming."
  },
  {
    id: 2,
    category: "Machine Learning",
    question: "In Machine Learning, what type of learning uses labeled input and output datasets?",
    options: [
      "Unsupervised Learning",
      "Supervised Learning",
      "Reinforcement Learning",
      "Heuristic Search"
    ],
    correctAnswerIndex: 1,
    explanation: "Supervised Learning models are trained using labeled datasets where both input features and corresponding target outputs are provided."
  },
  {
    id: 3,
    category: "Neural Networks",
    question: "What is the primary function of an activation function in an Artificial Neural Network (ANN)?",
    options: [
      "To store dataset weights permanently",
      "To introduce non-linearity into the network output",
      "To connect the database server to the model",
      "To format JSON output arrays"
    ],
    correctAnswerIndex: 1,
    explanation: "Activation functions introduce non-linear relationships to artificial neural networks, allowing them to learn complex patterns."
  },
  {
    id: 4,
    category: "Natural Language Processing",
    question: "Which Natural Language Processing (NLP) architecture forms the foundation of modern Large Language Models (LLMs)?",
    options: [
      "Transformer Architecture",
      "Relational Database Schema",
      "Decision Trees",
      "Rule-Based Expert System"
    ],
    correctAnswerIndex: 0,
    explanation: "The Transformer architecture, introduced by Vaswani et al. in 2017, uses self-attention mechanisms and powers modern LLMs."
  },
  {
    id: 5,
    category: "Computer Science",
    question: "What is the time complexity of looking up a value in an optimized Hash Table on average?",
    options: [
      "O(n²)",
      "O(n log n)",
      "O(1)",
      "O(2ⁿ)"
    ],
    correctAnswerIndex: 2,
    explanation: "Average time complexity for search, insertion, and deletion in a well-balanced Hash Table is constant time O(1)."
  },
  {
    id: 6,
    category: "JavaScript",
    question: "Which of the following keywords in JavaScript declares a block-scoped variable that cannot be re-assigned?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    correctAnswerIndex: 2,
    explanation: "The 'const' keyword creates read-only, block-scoped references that cannot be re-assigned after initialization."
  },
  {
    id: 7,
    category: "React",
    question: "In React, which hook is primarily used to handle side effects such as data fetching or subscriptions?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswerIndex: 1,
    explanation: "'useEffect' lets you perform side effects in functional components, such as DOM updates, fetching data, or setting up timers."
  },
  {
    id: 8,
    category: "Databases",
    question: "Which ACID property guarantees that a database transaction is either fully completed or completely rolled back?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    correctAnswerIndex: 0,
    explanation: "Atomicity ensures that all operations within a transaction are completed successfully; if any part fails, the entire transaction is aborted."
  },
  {
    id: 9,
    category: "Cloud Computing",
    question: "Which cloud service model provides complete software applications over the internet without local software installation?",
    options: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "BaaS (Backend as a Service)"
    ],
    correctAnswerIndex: 2,
    explanation: "Software as a Service (SaaS) delivers end-user applications on demand over the internet (e.g. Google Docs, Microsoft 365)."
  },
  {
    id: 10,
    category: "Generative AI",
    question: "What is the primary objective of Generative Adversarial Networks (GANs)?",
    options: [
      "To compress JPEG images without quality loss",
      "To generate new synthetic data samples that resemble training data",
      "To encrypt passwords in web applications",
      "To compile C++ code into machine bytecode"
    ],
    correctAnswerIndex: 1,
    explanation: "GANs pit a Generator network against a Discriminator network to generate high-quality synthetic data samples, such as realistic images."
  }
];

export const SYSTEM_INFO = {
  projectTitle: "AI Quiz System",
  subtitle: "Knowledge-Based Quiz Application",
  course: "Computer Science & Artificial Intelligence Department",
  version: "v1.0 (Demo)",
  features: [
    {
      title: "Smart Questions",
      description: "Knowledge-based questions designed to test your understanding."
    },
    {
      title: "Instant Scoring",
      description: "Get your score immediately after completing the quiz."
    },
    {
      title: "Performance Results",
      description: "View your score, percentage, and performance summary."
    }
  ],
  steps: [
    { step: 1, title: "Start Quiz", desc: "Launch the assessment session from the home screen." },
    { step: 2, title: "Answer Questions", desc: "Navigate through 10 knowledge-based AI & CS questions." },
    { step: 3, title: "View Result", desc: "Analyze instant scoring breakdown & answer explanations." }
  ]
};
