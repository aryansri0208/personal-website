import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/NavBar";
import "./ProjectDetails.css";

const projectData = {
  Grocio: {
    title: "Grocio",
    subtitle: "AI-Powered Pantry Assistant",
    description: [
      {
        type: "paragraph",
        content: "Grocio is an AI-based smart pantry management app that helps you track your groceries and household items, recommends recipes based on your pantry contents, and sends timely notifications for restocking and expiration dates."
      },
      {
        type: "heading",
        level: 3,
        content: "Cloud-Powered Real-Time Database"
      },
      {
        type: "list",
        items: [
          "Built on Firebase Firestore for instantaneous data synchronization",
          "Multi-device support with real-time updates across all user devices",
          "Efficient data modeling for pantry items, recipes, and user preferences",
          "Offline-first architecture ensuring functionality without internet connection",
          "Automatic conflict resolution for concurrent updates"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "AI-Powered Kitchen Assistant"
      },
      {
        type: "list",
        items: [
          "Integration with OpenAI's GPT-3.5 Turbo model for intelligent interactions",
          "Dynamic recipe generation based on:",
          "Real-time pantry inventory",
          "Ingredient expiration dates",
          "Available quantities",
          "Smart meal planning with:",
          "Contextual understanding of ingredients",
          "Quick meal suggestions",
          "Efficient use of available items",
          "Natural language processing for conversational interaction",
          "Adaptive responses based on user's pantry state"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Smart Notification System"
      },
      {
        type: "list",
        items: [
          "Multi-layered notification architecture using Flutter Local Notifications",
          "Background processing with WorkManager for reliable alerts",
          "Intelligent notification scheduling:",
          "Expiration date warnings",
          "Low inventory alerts",
          "Smart restocking suggestions",
          "Recipe recommendations based on available ingredients",
          "Meal prep reminders",
          "Custom notification categories with different priority levels",
          "User-configurable notification preferences"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Implementation"
      },
      {
        type: "paragraph",
        content: "The app demonstrates advanced mobile development concepts including:"
      },
      {
        type: "list",
        items: [
          "Integration with OpenAI's API for intelligent recipe suggestions",
          "Real-time Firestore data streams",
          "Background task scheduling",
          "Complex data synchronization",
          "RESTful API integration",
          "Offline data persistence"
        ]
      },
      {
        type: "paragraph",
        content: "This project showcases my ability to integrate cutting-edge AI technology with practical mobile development, creating a powerful yet user-friendly application that solves real-world kitchen management challenges."
      }
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/grocio" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/1Coia-gT1aSfaVD3nZtSiBza8D2H1K6AB/view?usp=sharing" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/grocio(1).png`,
      `${process.env.PUBLIC_URL}/grocio(2).png`,
      `${process.env.PUBLIC_URL}/grocio(3).png`,
      `${process.env.PUBLIC_URL}/grocio(4).png`
    ]
  },
  Investment_Advisor: {
    title: "Investment Advisor",
    subtitle: "AI-Based Investment Predictions",
    description: [
      {
        type: "paragraph",
        content: "Stock Advisor is a comprehensive financial analysis platform that empowers investors with sophisticated tools for stock market analysis and forecasting. The application seamlessly integrates real-time market data from Yahoo Finance with advanced technical analysis capabilities and machine learning predictions."
      },
      {
        type: "heading",
        level: 3,
        content: "Key Capabilities"
      },
      {
        type: "heading",
        level: 3,
        content: "Real-time Market Analysis"
      },
      {
        type: "list",
        items: [
          "Live stock price tracking and visualization",
          "Interactive price charts with customizable time ranges",
          "Volume analysis for trading activity insights",
          "Multiple stock comparison and correlation analysis"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Analysis Tools"
      },
      {
        type: "list",
        items: [
          "Moving averages (10, 20, and 50-day) for trend identification",
          "Daily return calculations and distribution analysis",
          "Trading volume patterns and anomaly detection",
          "Correlation heatmaps for portfolio diversification"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Advanced Forecasting"
      },
      {
        type: "list",
        items: [
          "Machine learning-powered price predictions using Facebook Prophet",
          "Trend decomposition and seasonality analysis",
          "Confidence intervals for forecasted values",
          "Rolling mean smoothing for better trend visualization"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "User Experience"
      },
      {
        type: "list",
        items: [
          "Clean, intuitive web interface built with Streamlit",
          "Fast, responsive backend powered by FastAPI",
          "Flexible data range selection",
          "Support for multiple stock analysis",
          "Export capabilities for data and visualizations"
        ]
      },
      {
        type: "paragraph",
        content: "The application is built on a modern tech stack including FastAPI, Streamlit, and Prophet, making it both powerful and user-friendly. It's designed for both casual investors looking to understand market trends and experienced traders requiring detailed technical analysis."
      }
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/stockadvisor" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/1-2YQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZ/view?usp=sharing" }
    ],
    gallery: [
      "AAPL_Prophet_Prediction.png"
    ]
  },
  ECE_Soft: {
    title: "Trustworthy Module Registry",
    subtitle: "Secure Internal Package Management",
    description: [
      {
        type: "paragraph",
        content: "A reliable and secure internal package management system for software teams, enhancing module security and maintainability."
      },
      {
        type: "heading",
        level: 3,
        content: "Key Features"
      },
      {
        type: "list",
        items: [
          "Secure package verification and validation",
          "Internal module registry management",
          "Version control and dependency tracking",
          "Team collaboration features",
          "Automated security scanning"
        ]
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://example.com/docs" }
    ],
    gallery: [
      "https://example.com/ece-soft-image1.jpg",
      "https://www.youtube.com/embed/example-video3"
    ]
  },
  ChessAI: {
    title: "Human-Centric Chess Move Prediction with Skill-Aware Neural Networks",
    subtitle: "Adaptive Chess AI with Deep Learning",
    description: [
      {
        type: "paragraph",
        content: "Maia is a sophisticated chess AI system that combines deep learning with classical chess programming to create an adaptive chess engine capable of playing at various skill levels. The project's core innovation lies in its ability to understand and mimic human playing styles across different Elo ratings, making it an excellent tool for both learning and practice."
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Architecture"
      },
      {
        type: "heading",
        level: 4,
        content: "Neural Network Models"
      },
      {
        type: "list",
        items: [
          "MaiaCNN: A convolutional neural network that processes chess positions as 12-channel tensors (representing different piece types and colors)",
          "MaiaTransformer: A transformer-based model that captures long-range dependencies in chess positions",
          "EloAttentionModel: An advanced model that incorporates player skill level into its decision-making process"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Core Components"
      },
      {
        type: "list",
        items: [
          "Board Representation: Converts chess positions into tensor format (12x8x8) for neural network processing",
          "Move Prediction: Outputs probabilities for all possible legal moves (4672 possible moves)",
          "Elo Conditioning: Adjusts playing strength based on desired skill level",
          "Attention Mechanism: Provides insights into how the model makes decisions"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Training Pipeline"
      },
      {
        type: "list",
        items: [
          "Data preprocessing from PGN (Portable Game Notation) files",
          "Custom dataset handling with PyTorch",
          "Support for both supervised learning and reinforcement learning",
          "Validation metrics including top-k accuracy"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Key Features"
      },
      {
        type: "heading",
        level: 4,
        content: "Adaptive Play"
      },
      {
        type: "list",
        items: [
          "Adjustable playing strength (Elo rating)",
          "Skill-aware move prediction",
          "Realistic human-like playing style"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "User Interface"
      },
      {
        type: "list",
        items: [
          "Interactive GUI built with Pygame",
          "Real-time move visualization",
          "Game state tracking",
          "Move history display"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Analysis Tools"
      },
      {
        type: "list",
        items: [
          "Move prediction visualization",
          "Attention pattern analysis",
          "Performance metrics tracking",
          "Game replay functionality"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Implementation"
      },
      {
        type: "heading",
        level: 4,
        content: "Data Processing"
      },
      {
        type: "list",
        items: [
          "PGN file parsing and conversion",
          "FEN (Forsyth–Edwards Notation) position encoding",
          "Move encoding in UCI (Universal Chess Interface) format",
          "Elo rating normalization"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Model Architecture"
      },
      {
        type: "list",
        items: [
          "Multi-layer CNN with batch normalization",
          "Transformer encoder with positional encoding",
          "Attention mechanisms for skill level adaptation",
          "Dropout and regularization for robust training"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Training Infrastructure"
      },
      {
        type: "list",
        items: [
          "Custom data loaders",
          "Learning rate scheduling",
          "Early stopping",
          "Model checkpointing",
          "Performance monitoring"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Development Tools and Libraries"
      },
      {
        type: "heading",
        level: 4,
        content: "Core Dependencies"
      },
      {
        type: "list",
        items: [
          "PyTorch for deep learning",
          "Python-chess for chess logic",
          "Pygame for GUI",
          "NumPy for numerical operations",
          "Pandas for data handling"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Visualization Tools"
      },
      {
        type: "list",
        items: [
          "Matplotlib for basic plotting",
          "Seaborn for statistical visualization",
          "Custom attention visualization tools"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Project Structure"
      },
      {
        type: "heading",
        level: 4,
        content: "Model Files"
      },
      {
        type: "list",
        items: [
          "maia_model.py: Base CNN implementation",
          "MaiaTransformer.py: Transformer architecture",
          "elo_attention_model.py: Skill-aware model"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Training Scripts"
      },
      {
        type: "list",
        items: [
          "train_maia.py: Basic model training",
          "train_maia_attention.py: Attention model training",
          "train_maia_transformer.py: Transformer training"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Utility Scripts"
      },
      {
        type: "list",
        items: [
          "preprocess_pgn.py: Data preprocessing",
          "evaluate_model_on_pgn.py: Model evaluation",
          "visualize_attention_vs_elo.py: Attention analysis"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Interface Files"
      },
      {
        type: "list",
        items: [
          "gui_maia_chess.py: Main GUI implementation",
          "play_maia.py: Command-line interface"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Performance and Metrics"
      },
      {
        type: "heading",
        level: 4,
        content: "Evaluation Metrics"
      },
      {
        type: "list",
        items: [
          "Top-k move prediction accuracy",
          "Elo rating correlation",
          "Move prediction confidence",
          "Game outcome prediction"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Model Performance"
      },
      {
        type: "list",
        items: [
          "High accuracy in move prediction",
          "Consistent playing strength at target Elo",
          "Realistic playing style",
          "Efficient inference time"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Future Enhancements"
      },
      {
        type: "heading",
        level: 4,
        content: "Planned Features"
      },
      {
        type: "list",
        items: [
          "Opening book integration",
          "Endgame tablebase support",
          "Multi-engine analysis",
          "Online play capabilities"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Technical Improvements"
      },
      {
        type: "list",
        items: [
          "Model architecture optimization",
          "Training pipeline enhancement",
          "Performance optimization",
          "Extended analysis tools"
        ]
      },
      {
        type: "paragraph",
        content: "This project represents a comprehensive approach to chess AI development, combining modern deep learning techniques with classical chess programming principles to create an adaptive and educational chess engine."
      }
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/chess-ai" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/gui.png`
    ]
  },
  ECE362Project: {
    title: "Gesture Controlled Ball Breaker Game",
    subtitle: "STM32F091 Microcontroller Implementation",
    description: [
      {
        type: "paragraph",
        content: "The ECE362_Project_BallBreaker is a detailed implementation of the classic Brick Breaker game on an STM32F091 microcontroller. The project integrates several hardware components and software modules to create an interactive gaming experience."
      },
      {
        type: "heading",
        level: 3,
        content: "Project Overview"
      },
      {
        type: "list",
        items: [
          "Microcontroller: The game runs on an STM32F091 microcontroller, which serves as the central processing unit for the game logic and hardware interactions.",
          "Display: A TFT LCD is used to render the game interface, displaying elements such as the paddle, ball, bricks, score, and timer.",
          "Gesture Control: The APDS-9960 motion sensor is utilized to detect hand movements, allowing players to control the paddle through gestures. This sensor communicates with the microcontroller via I2C.",
          "Sound Effects: The game generates sound effects for events like collisions and brick breaks using PWM or DAC to drive a buzzer or speaker.",
          "High Score Persistence: An external EEPROM is used to store and retrieve high scores, ensuring that the data persists even when the system is powered off."
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Game Logic"
      },
      {
        type: "list",
        items: [
          "Objective: Players use the on-screen paddle to bounce a ball and break bricks. Points are scored for each brick broken, and the goal is to beat the stored high score.",
          "Paddle and Ball: The paddle's position is controlled by gestures detected by the APDS-9960 sensor. The ball's movement is managed by the game logic, which includes collision detection with the paddle and bricks.",
          "Bricks: The game features a grid of bricks that the player must break. Each brick's state (present or broken) is tracked, and the game updates the display accordingly.",
          "Timer and Score: A timer counts down from 60 seconds, and the player's score is displayed and updated as bricks are broken."
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Hardware Integration"
      },
      {
        type: "list",
        items: [
          "Microcontroller: The STM32F091 handles all game logic, sensor data processing, and display updates.",
          "TFT LCD: Connected via SPI, the LCD displays the game's visual elements.",
          "APDS-9960 Sensor: This sensor detects gestures and communicates with the microcontroller over I2C.",
          "EEPROM: An I2C-based EEPROM (e.g., 24CXX series) is used to store high scores, with a typical address of 0x50.",
          "Speaker/Buzzer: Driven by PWM or DAC output on the STM32, it provides audio feedback for game events."
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Software Structure"
      },
      {
        type: "list",
        items: [
          "Main Entry Point: The main.c file initializes the system, sets up the display, and starts the game loop.",
          "Game Functions: The display_game_function.c file contains the core game logic, including drawing the game elements, handling paddle and ball movement, and managing collisions.",
          "Supporting Modules: Various modules handle specific functionalities, such as gesture detection, sound generation, and EEPROM interaction."
        ]
      },
      {
        type: "paragraph",
        content: "This project showcases a blend of hardware and software engineering, creating an engaging and interactive game experience on an embedded system."
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://github.com/aryansri0208/ECE362_Project_BallBreaker" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/image.png`
    ]
  },
  ECE368: {
    title: "Data Structures and Algorithms Course Work",
    subtitle: "Advanced Implementation of Core Computer Science Concepts",
    description: [
      {
        type: "paragraph",
        content: "This project contains a series of data structures and algorithms implementations (Shellsort, BST, HBT, graph pathfinding) with file I/O systems, while developing tree manipulations (rerooting, balancing) and memory management techniques for efficient data processing and storage."
      },
      {
        type: "heading",
        level: 3,
        content: "Homework 1: Shellsort Implementation"
      },
      {
        type: "list",
        items: [
          "Implemented Shellsort algorithm in two ways:",
          "Array-based implementation (shell_array.c)",
          "Linked list-based implementation (shell_list.c)",
          "Created a custom sequence generator (sequence.c) that generates gap sizes in the form of 2^p * 3^q",
          "Implemented file I/O operations for reading/writing binary data",
          "Added performance tracking with comparison counting",
          "Key files: shell_array.h, shell_list.h, sequence.h"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Homework 2: Tree Layout System"
      },
      {
        type: "list",
        items: [
          "Built a binary tree system for layout calculations",
          "Implemented three main operations:",
          "Post-order traversal and file output",
          "Dimension calculations for tree nodes",
          "Coordinate calculations for tree layout",
          "Tree nodes could be of type 'H' (horizontal) or 'V' (vertical)",
          "Each node stored width, height, and coordinate information",
          "Key files: tree.h, main.c"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Homework 3: Tree Manipulation and Rerooting"
      },
      {
        type: "list",
        items: [
          "Extended the tree system with advanced operations:",
          "Tree duplication and alternate visiting",
          "Rerooting operations with left/right turns",
          "Dimension recalculation after tree modifications",
          "Implemented stack-based tree traversal",
          "Added parent pointer support for tree manipulation",
          "Key files: tree.h, reroot_lr.c"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Homework 4: Height-Balanced Binary Tree (HBT)"
      },
      {
        type: "list",
        items: [
          "Implemented a specialized binary tree with:",
          "Height balancing property (AVL-like)",
          "BST validation",
          "Binary file I/O for tree serialization",
          "Used bit fields for efficient storage (29 bits for key, 3 bits for balance)",
          "Added tree operations:",
          "Search and insert",
          "Node deletion",
          "Balance checking",
          "Tree rotation",
          "Key files: hbt.h, tree.h, tree.c"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Homework 5: Graph-Based Pathfinding"
      },
      {
        type: "list",
        items: [
          "Developed a graph system for pathfinding on a board:",
          "Implemented Dijkstra's algorithm for shortest path",
          "Created a priority queue for efficient node selection",
          "Added support for weighted edges and board constraints",
          "Features:",
          "Board configuration parsing",
          "Graph initialization with node connections",
          "Path reconstruction and output",
          "Memory management for graph structures",
          "Key files: graph.h, buildGraph.c"
        ]
      },
      {
        type: "paragraph",
        content: "Each homework built upon previous concepts while introducing new data structures and algorithms, with a focus on efficient memory management and proper file I/O operations. The progression went from basic sorting algorithms to complex graph-based pathfinding, with tree structures serving as a bridge between these concepts."
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://github.com/aryansri0208/ECE368" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/DSA.png`
    ]
  },
  VIPResearch: {
    title: "Autonomous UAV Navigation for IEEE Maze Competition",
    subtitle: "SERIS Lab Research Project",
    description: [
      {
        type: "paragraph",
        content: "This project investigates autonomous UAV navigation through complex maze environments by integrating ROS2, PX4, and Computer Vision techniques. Developed under the SERIS (Secure + Efficient + Reproducible Intelligent Systems) Lab at Purdue University, the system is designed for the 2024 IEEE UAV Maze Competition, which challenges teams to autonomously navigate drones through mazes in both simulated and physical settings."
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Architecture"
      },
      {
        type: "list",
        items: [
          "UAV Platform: PX4 flight control firmware connected via ROS2 middleware",
          "Modular Development: Real-time communication between navigation components",
          "Computer Vision Integration: Obstacle recognition and wall-following capabilities",
          "Spatial Awareness: Enhanced perception in environments with no prior mapping"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Software Implementation"
      },
      {
        type: "list",
        items: [
          "NAV2 Planning Plugins:",
          "NavFn implementation",
          "RRT-based planners",
          "Memory-optimized pathfinding strategies",
          "Simulation Environment:",
          "Gazebo-based drone behavior testing",
          "Plugin combination evaluation",
          "Time and accuracy benchmarking"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Testing and Validation"
      },
      {
        type: "list",
        items: [
          "Physical Testing Environment:",
          "Custom-built PVC and paper mazes",
          "Controlled testbeds for evaluation",
          "Performance Metrics:",
          "Drone resilience assessment",
          "Collision-avoidance testing",
          "Navigation precision measurement",
          "Over 60% maze completion rate in trials"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Key Contributions"
      },
      {
        type: "list",
        items: [
          "Motion Planning: Development of efficient navigation algorithms",
          "Deep Learning Components: Integration of AI-driven perception",
          "Software Architecture: Design of modular and scalable system",
          "Testing Framework: Implementation of comprehensive evaluation methods"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Technical Impact"
      },
      {
        type: "list",
        items: [
          "Embedded Systems: Efficient resource utilization",
          "AI-Driven Perception: Advanced obstacle detection",
          "Real-time Robotics: Responsive navigation control",
          "Scalable Autonomy: Adaptable to various environments"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Applications"
      },
      {
        type: "list",
        items: [
          "GPS-denied environments",
          "Cluttered spaces",
          "Indoor navigation",
          "Search and rescue operations",
          "Industrial inspection"
        ]
      },
      {
        type: "paragraph",
        content: "As the software lead, I contributed significantly to motion planning and deep learning components, achieving over 60% maze completion in trials. The work reflects a deep intersection of embedded systems, AI-driven perception, and real-time robotics, with implications for scalable drone autonomy in GPS-denied or cluttered environments."
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://github.com/aryansri0208/VIPResearch" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/UAV.png`
    ]
  },
  ECE362: {
    title: "Microprocessor Lab Work",
    subtitle: "STM32 and RISC-V Programming",
    description: [
      {
        type: "paragraph",
        content: "This project contains a collection of embedded systems lab assignments (ECE362) covering topics from GPIO to RISC-V assembly programming, with each lab focusing on different aspects of microcontroller development and low-level programming."
      },
      {
        type: "heading",
        level: 3,
        content: "STM32 Microcontroller Labs"
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 0 - Introduction"
      },
      {
        type: "list",
        items: [
          "Setup lab for creating and managing projects in the repository",
          "Focuses on learning the development environment and submission process"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 1 - GPIO (General Purpose Input/Output)"
      },
      {
        type: "list",
        items: [
          "Implements basic GPIO operations on STM32 microcontroller",
          "Covers button input handling and LED output control",
          "Includes keypad interface implementation"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 2 - Interrupts"
      },
      {
        type: "list",
        items: [
          "Introduces interrupt handling on STM32",
          "Implements external interrupt handling",
          "Focuses on event-driven programming concepts"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 3 - Timers"
      },
      {
        type: "list",
        items: [
          "Implements timer-based operations",
          "Covers timer configuration and usage",
          "Includes timing and delay implementations"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 4 - DAD (Digital to Analog Conversion)"
      },
      {
        type: "list",
        items: [
          "Implements digital to analog conversion",
          "Focuses on signal generation and processing",
          "Includes waveform generation capabilities"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 5 - PWM (Pulse Width Modulation)"
      },
      {
        type: "list",
        items: [
          "Implements PWM signal generation",
          "Covers motor control and power regulation",
          "Includes duty cycle control"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 6 - SPI (Serial Peripheral Interface)"
      },
      {
        type: "list",
        items: [
          "Implements SPI communication protocol",
          "Focuses on synchronous serial communication",
          "Includes master-slave device communication"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 7 - USART (Universal Synchronous/Asynchronous Receiver/Transmitter)"
      },
      {
        type: "list",
        items: [
          "Implements serial communication",
          "Covers asynchronous data transmission",
          "Includes UART configuration and usage"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "RISC-V Assembly Labs"
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 8 - Introduction to RISC-V"
      },
      {
        type: "list",
        items: [
          "Introduces RISC-V assembly programming",
          "Covers basic RISC-V architecture concepts",
          "Includes assembly language fundamentals"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 9 - Control Flow"
      },
      {
        type: "list",
        items: [
          "Implements control flow in RISC-V assembly",
          "Covers branching and looping constructs",
          "Includes conditional execution"
        ]
      },
      {
        type: "heading",
        level: 4,
        content: "Lab 10 - Functions"
      },
      {
        type: "list",
        items: [
          "Implements function calls in RISC-V assembly",
          "Covers stack management and function parameters",
          "Includes implementation of various algorithms:",
          "Sorting",
          "String concatenation",
          "Fibonacci",
          "Binary search"
        ]
      },
      {
        type: "paragraph",
        content: "Each lab builds upon the previous ones, starting with basic microcontroller concepts and progressing to more complex topics. The first seven labs focus on STM32 microcontroller programming, while the last three labs shift to RISC-V assembly programming. All labs include proper configuration files (platformio.ini, Makefile), source code directories, and necessary libraries for development."
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://github.com/aryansri0208/ECE362" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/ECE362.jpeg`
    ]
  },
  ECE570: {
    title: "Artificial Intelligence Course Work",
    subtitle: "Machine Learning and Deep Learning Implementation",
    description: [
      {
        type: "paragraph",
        content: "These assignments covered a comprehensive range of machine learning and deep learning topics, from logistic regression and neural networks to CNNs, density estimation, and attention mechanisms. Implemented using NumPy, scikit-learn, and PyTorch, the exercises emphasized both foundational theory and practical application on real-world datasets like MNIST, CIFAR-10, and Breast Cancer."
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 1: Logistic Regression with scikit-learn"
      },
      {
        type: "list",
        items: [
          "Applied logistic regression to the Breast Cancer dataset from UCI repository",
          "Implemented data loading and normalization",
          "Trained model with 'liblinear' solver",
          "Evaluated performance using:",
          "Manual accuracy calculation",
          "Built-in accuracy_score function",
          "Emphasized understanding of machine learning workflow and model verification"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 2: SGD and Neural Networks with NumPy"
      },
      {
        type: "list",
        items: [
          "Implemented machine learning models from scratch using NumPy",
          "Part 1: Logistic Regression",
          "Stochastic gradient descent (SGD) implementation",
          "Binary cross-entropy loss function",
          "Part 2: Neural Network",
          "Built 3-layer neural network",
          "Implemented ReLU and sigmoid activations",
          "Manual forward and backward propagation",
          "Focused on understanding optimization and neural computation"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 3: CNNs, Transfer Learning, and PyTorch"
      },
      {
        type: "list",
        items: [
          "Implemented deep learning solutions using PyTorch",
          "Developed 2D convolution layer from scratch",
          "Compared fully connected and convolutional networks on MNIST",
          "Trained CNNs on CIFAR-10",
          "Applied transfer learning:",
          "Pre-trained ResNet-18 model",
          "Fine-tuning and feature extraction",
          "Visualized misclassifications",
          "Computed nearest neighbors in embedding space"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 4: Transformers and Self-Attention"
      },
      {
        type: "list",
        items: [
          "Implemented transformer architecture components:",
          "Positional encodings",
          "Scaled dot-product attention",
          "Self-attention modules",
          "Tested permutation invariance and masking",
          "Implemented multi-head self-attention layers",
          "Simulated transformer block sequence handling",
          "Focused on efficient attention computations using PyTorch"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 5: Latent Representations and Visualization"
      },
      {
        type: "list",
        items: [
          "Explored latent space representations in deep learning",
          "Trained residual CNN on MNIST",
          "Extracted intermediate feature maps",
          "Analyzed representations through:",
          "Clustering (K-means)",
          "Nearest-neighbor matching",
          "Visualization techniques",
          "Studied progressive data transformation in deep networks"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Assignment 6: Density Estimation and Gaussian Mixture Models"
      },
      {
        type: "list",
        items: [
          "Implemented three density estimators:",
          "Gaussian",
          "Histogram",
          "Kernel Density Estimation (KDE)",
          "Developed Gaussian Mixture Model (GMM):",
          "Expectation-Maximization (EM) algorithm",
          "Random initialization",
          "E-step and M-step computations",
          "Focused on unsupervised learning and probabilistic modeling"
        ]
      },
      {
        type: "paragraph",
        content: "This coursework provided hands-on experience with fundamental machine learning concepts and modern deep learning techniques, emphasizing both theoretical understanding and practical implementation skills."
      }
    ],
    links: [
      { text: "Project Documentation", url: "https://github.com/aryansri0208/ECE570" }
    ],
    gallery: [
      `${process.env.PUBLIC_URL}/ECE570.png`
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="container">
        <Nav />
        <h2 className="not-found">Project Not Found</h2>
      </div>
    );
  }

  const renderContent = (content) => {
    switch (content.type) {
      case "paragraph":
        return <p className="project-description">{content.content}</p>;
      case "heading":
        const HeadingTag = `h${content.level}`;
        return <HeadingTag className="project-heading">{content.content}</HeadingTag>;
      case "list":
        return (
          <ul className="project-list">
            {content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="project-details-container">
        <h1 className="project-title">{project.title}</h1>
        <h2 className="project-subtitle">{project.subtitle}</h2>
        
        <div className="project-content">
          {project.description.map((section, index) => (
            <div key={index}>{renderContent(section)}</div>
          ))}

          {/* Links Section */}
          <div className="project-links">
            {project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-theme"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="project-gallery">
            {project.gallery.map((media, index) => (
              media.includes("drive.google.com") ? (
                <iframe 
                  key={index}
                  src={media}
                  width="560"
                  height="315"
                  allow="autoplay"
                  className="gallery-video"
                  title="Grocio Demo Video"
                ></iframe>
              ) : (
                <img 
                  key={index} 
                  src={media} 
                  alt={`Grocio screenshot ${index + 1}`}
                  className="gallery-image" 
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

