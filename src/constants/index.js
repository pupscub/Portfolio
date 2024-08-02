import { k } from "maath/dist/misc-7d870b3c.esm";
import { resumeIcon, mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, eai, mavoix, omdena, jobit, tripguide, threejs, pythonIcon,dino,hcdr, rag,
  pytorchIcon,
  tensorflowIcon,
  kerasIcon,
  huggingface,
  fastapiIcon,
  aws,
  kubernetes,
  pandas,
  numpy,
  r, northeastern,uom} from "../assets";

import GarethImage from "../assets/Gareth.png";
import KennyImage from "../assets/Kenny.png";
import GauravImage from "../assets/Gaurav.png";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
    icon: resumeIcon,
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "CV & NLP",
    icon: web,
  },
  {
    title: "Machine Learning & Solutions Architect",
    icon: mobile,
  },
  {
    title: "Forecasting & Time Series Analysis",
    icon: backend,
  },
  {
    title: "Recommendation Systems",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "PyTorch",
    icon: pytorchIcon,
  },
  {
    name: "TensorFlow",
    icon: tensorflowIcon,
  },
  {
    name: "Keras",
    icon: kerasIcon,
  },
  {
    name: "Hugging Face",
    icon: huggingface,
  },
  {
    name: "fastAPI",
    icon: fastapiIcon,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "Experientia AI",
    icon: eai,
    iconBg: "#383E56",
    date: "July 2023 - December 2023",
    points: [
      "Led the development of sophisticated machine learning pipelines aimed at assessing the severity of Parkinson’s disease, primarily leveraging a single modality: Computer Vision.",
      "Designed and implemented an ETL pipeline to process raw police records into a master data file, enabling data-driven dashboards for visualizing and analyzing law enforcement insights.",
      "Developed scripts to extract data from Solid Pods, and fine-tuned Falcon 40B/7B LLM on this data. The refined LLM enabled me to generate personalized recommendations for users based on their individual personas.",
      "Fine-tuned TinyLlama with LoRA and QLoRA on the NSF Dataset for abstract generation, complemented by developing Selenium-based scripts for automated web scraping to enhance the data preprocessing workflow.",
      "Developed a FastAPI-based API for QnA using Gemini, featuring authentication and CRUD operations. Utilized MongoDB for querying large datasets via RAG, enabling accurate answer generation with LLMs."
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Omdena",
    icon: omdena,
    iconBg: "#E6DEDD",
    date: "July 2021 - June 2022",
    points: [
      "Collaborated with a team of 8 on building two Risk Scoring systems with Analytic Hierarchy Process (AHP) models to assess local risk levels with an accuracy of 91%, and deployed the AHP model seamlessly using Amazon SageMaker", 
      "Developed Regenerative Farming Solutions with 96% accuracy operating on the VGG-19 model, enabling agricultural carbon markets clients to make well-informed decisions and help generate profits"

    ],
  },
  {
    title: "Data Scientist",
    company_name: "Mavoix Inc.",
    icon: mavoix,
    iconBg: "#383E56",
    date: "July 2020 - Dec 2020",
    points: [
      "Developed a Deep Neural Network-based diet recommendation system for Type-2 diabetes patients, which increased the stickiness ratio on their website by 5%."
    ],
  },
];


const educations = [
  {
    title: "Northeastern University",
    company_name: "Master of Science in Data Science",
    gpa: "GPA 3.76",
    icon: northeastern,
    iconBg: "#383E56",
    date: "Sept 2022 - Dec 2024",
    points: [
    ],
  },
  {
    title: "University of Mumbai",
    company_name: "Bachelor of Engineering in Computer Science",
    gpa: "GPA 8.5/10",
    icon: uom,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Aug 2021",
    points: [
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Aditya demonstrated exceptional analytical skills and a strong work ethic at the Institute for Experiential AI. He consistently delivered high-quality work and is highly recommended for any technical role.",
    name: "Gareth Woolley",
    designation: "Co-Founder & Product Lead", 
    company: "XYZ",
    image: GarethImage,
  },
  {
    testimonial:
    "I am delighted to endorse my friend, with whom I had the pleasure of working on a project. He demonstrated an impressive understanding of Deep Learning, quickly grasped new ideas, and was incredibly hardworking.",
    name: "Kenechi Dukor",
    designation: "Product @ Motorola Solutions",
    company: "XYZ",
    image: KennyImage,
  },
  {
    testimonial:
    "I highly recommend Aditya, who excelled as a Data Scientist at Experiential AI. His exceptional technical skills, deep business understanding, and innovative problem-solving approach significantly impacted our projects. Aditya would be a valuable asset to any organization.",
    name: "Gaurav Thorat",
    designation: "Data Scientist",
    company: "Optimal Strategix Group",
    image: GauravImage,
  },
];

const projects = [
  {
    name: "Chat with Multiple PDFs",
    description:
    "I developed an RAG application enabling users to interact with multiple PDFs offline. Leveraging LangChain and OpenAI embeddings for content retrieval, and FAISS for efficient indexing, the application allows seamless PDF chat functionality using OLLAMA.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "green-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "pink-text-gradient",
      },
    ],
    image: rag,
    source_code_link: "https://github.com/pupscub/PDF-Chat",
  },
  {
    name: "High Credit Default Risk",
    description:
    "Developed a solution for HCDR challenge on Kaggle, achieving 29th place by implementing a LightGBM model and employing extensive feature engineering techniques, including the calculation of RMF features, temporal features, and ratio features, to enhance predictive accuracy",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Feature Engineering",
        color: "green-text-gradient",
      },
      {
        name: "Finance",
        color: "pink-text-gradient",
      },
    ],
    image: hcdr,
    source_code_link: "https://github.com/pupscub/HCDR",
  },
  {
    name: "Few shot Audio Classification",
    description:
    "This Project explores the use of Self-Supervised Learning and Few-Shot Learning for audio classification. The study highlights the potential of SSL and FSL with Meta-Learning to achieve effective audio classification with smaller datasets",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Meta Learning",
        color: "pink-text-gradient",
      },
    ],
    image: dino,
    source_code_link: "https://github.com/pupscub/SelfSupervised_MetaLearning_Transformer_AudioClassification.git",
  },
];

function downloadResume() {
  window.open("https://drive.google.com/file/d/169RWTFHfFh-WyMYlFpTWCwTeEYJDnnkJ/view?usp=sharing", '_blank');
}

export { services, technologies, experiences,educations, testimonials, projects, downloadResume };
