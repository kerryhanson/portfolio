/**
 * Final design carousel images — export each slide at 1024px wide (1x) and 2048px wide (@2x),
 * 16:9 aspect ratio. Place files in public/images/projects/ using an @2x suffix for retina,
 * e.g. curriculum-catalog-final.png and curriculum-catalog-final@2x.png
 *
 * Pass retinaSrc only after the @2x file exists; otherwise the browser may request a missing asset.
 */
const FINAL_DESIGN_IMAGE_SIZES = '(min-width: 1024px) 1104px, 100vw'

function finalDesignImage({ src, alt, width = 1024, height = 576, retinaSrc }) {
  const srcSet = retinaSrc
    ? `${src} ${width}w, ${retinaSrc} ${width * 2}w`
    : `${src} ${width}w`

  return {
    src,
    alt,
    width,
    height,
    srcSet,
    sizes: FINAL_DESIGN_IMAGE_SIZES,
  }
}

function retinaSrcFor(src) {
  return src.replace(/(\.[^./]+)$/, '@2x$1')
}

export const projects = [
  {
    id: 'curriculum-catalog',
    slug: 'curriculum-catalog',
    title: 'Enterprise Curriculum Platform',
    subtitle: 'Modular greenfield platform for catalog discovery, curriculum authoring, and course authoring',
    featured: true,
    tags: ['UX Strategy', 'Enterprise', 'Research', 'Information Architecture'],
    summary:
      'Led end-to-end UX for a modular enterprise curriculum platform replacing a legacy system serving 50+ schools, hundreds of academic programs, and hundreds of internal users. Defined the UX foundation for three connected capabilities—catalog discovery, curriculum authoring, and course authoring—within a unified platform experience. Authoring module UX was developed in parallel as a focused workstream within the same platform.',
    challenge:
      'A legacy curriculum ecosystem was fragmented across discovery, program definition, and course creation workflows. Teams faced content discoverability gaps, inconsistent institutional alignment, and disconnected experiences across a large multi-brand education organization.',
    approach: [
      'Partnered with product, engineering, and academic stakeholders to define UX strategy and a modular platform vision for catalog, curriculum, and course authoring.',
      'Conducted user research with internal authors, instructional designers, and program administrators to map workflows and pain points across all three modules.',
      'Designed information architecture and interaction patterns for catalog discovery, curriculum authoring, and course authoring at enterprise scale.',
      'Established design standards and QA processes including design inventories and AI-assisted functional test creation.',
    ],
    outcomes: [
      'Improved content discoverability and institutional alignment across 50+ schools through a unified catalog experience.',
      'Connected catalog and authoring workflows within a cohesive platform experience for hundreds of internal users.',
      'Established design consistency through a scalable UX foundation for ongoing modular platform evolution.',
    ],
    role: 'Lead UX Designer',
    timeline: '2025 – 2026',
    tools: ['Figma', 'Dovetail', 'Cursor', 'Miro'],
    image: '/images/projects/curriculum-catalog.png',
    imageAlt: 'Stratus enterprise curriculum catalog dashboard and course management views',
    imageWidth: 538,
    imageHeight: 300,
    imageSizes: '(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw',
    processImage: '/images/projects/curriculum-catalog-process.png',
    processImageAlt:
      'Stakeholder research video call alongside component color tokens and Atlas offering versions documentation',
    processImageWidth: 1024,
    processImageHeight: 576,
    processImageCaption: 'Stakeholder research, design standards, and platform documentation',
    approachImage: '/images/projects/curriculum-catalog-approach.png',
    approachImageAlt:
      'Stratus catalog dashboard wireframes showing desktop and mobile pinned offerings and courses layouts',
    approachImageWidth: 1024,
    approachImageHeight: 576,
    approachImageCaption: 'Platform catalog experience prototype',
    finalDesignImages: [
      finalDesignImage({
        src: '/images/projects/curriculum-catalog-final.png',
        alt: 'Stratus catalog dashboard displayed on a laptop showing pinned offerings and courses',
        retinaSrc: retinaSrcFor('/images/projects/curriculum-catalog-final.png'),
      }),
      finalDesignImage({
        src: '/images/projects/curriculum-catalog-final-3.png',
        alt: 'Stratus dashboard with welcome banner and pinned program offerings grid',
        retinaSrc: retinaSrcFor('/images/projects/curriculum-catalog-final-3.png'),
      }),
      finalDesignImage({
        src: '/images/projects/curriculum-catalog-final-2.png',
        alt: 'Stratus catalog offerings list and Master of Business Administration program detail views',
        retinaSrc: retinaSrcFor('/images/projects/curriculum-catalog-final-2.png'),
      }),
    ],
  },
  {
    id: 'canvas-design-system',
    slug: 'canvas-design-system',
    title: 'Canvas Course Design System',
    subtitle: 'Cross-brand design system for Strayer, Capella, and JWMI',
    featured: true,
    tags: ['Design Systems', 'Documentation', 'Training', 'Enterprise'],
    summary:
      'Led the evolution of the Canvas course design system used across three education brands, creating documentation and training 30+ learning technologists and instructional designers.',
    challenge:
      'Three education brands shared a learning platform but lacked consistent design patterns, documentation, and adoption practices — leading to fragmented user experiences and rework.',
    approach: [
      'Audited existing UI patterns and identified gaps across Strayer, Capella, and JWMI product surfaces.',
      'Evolved the Canvas design system with new components, tokens, and usage guidelines.',
      'Created documentation and training materials for 30+ learning technologists and instructional designers.',
      'Contributed to enterprise Canvas usability benchmarking to measure and improve design quality.',
    ],
    outcomes: [
      'Improved design consistency and adoption across three education brands.',
      'Reduced rework through shared components and clear documentation.',
      'Strengthened UX maturity with established standards.',
    ],
    role: 'Lead UX Designer',
    timeline: '2023 – 2026',
    tools: ['Figma', 'Supernova', 'Confluence'],
    image: '/images/projects/canvas-design-system.jpg',
    imageAlt: 'Canvas Pattern Library component grid showing accessibility, color, typography, and UI patterns',
    imageWidth: 951,
    imageHeight: 535,
    imageSizes: '(min-width: 640px) 50vw, 100vw',
    processImage: '/images/projects/canvas-design-system-process.png',
    processImageAlt:
      'Capella Courseroom course pages showing assignment instructions, module overview video, and career portfolio activity',
    processImageWidth: 1024,
    processImageHeight: 575,
    processImageCaption: 'Capella Courseroom course pages before design system adoption',
    approachImage: '/images/projects/canvas-design-system-approach.png',
    approachImageAlt:
      'Callout Cards documentation, Canvas Pattern Library training session, and live Courseroom component walkthrough',
    approachImageWidth: 1024,
    approachImageHeight: 576,
    approachImageCaption: 'Canvas Pattern Library training and component documentation',
    finalDesignImages: [
      finalDesignImage({
        src: '/images/projects/canvas-design-system-final.png',
        alt: 'Canvas design system components including content cards, media hooks, accordion, blockquote, and definition tooltip',
        retinaSrc: retinaSrcFor('/images/projects/canvas-design-system-final.png'),
      }),
      finalDesignImage({
        src: '/images/projects/canvas-design-system-final-2.png',
        alt: 'Canvas Pattern Library documentation pages for overview and images',
        retinaSrc: retinaSrcFor('/images/projects/canvas-design-system-final-2.png'),
      }),
      finalDesignImage({
        src: '/images/projects/canvas-design-system-final-3.png',
        alt: 'Canvas Pattern Library documentation pages for hook media and accessibility',
        retinaSrc: retinaSrcFor('/images/projects/canvas-design-system-final-3.png'),
      }),
    ],
  },
  {
    id: 'curriculum-authoring-modules',
    slug: 'curriculum-authoring-modules',
    title: 'Curriculum Authoring Modules',
    subtitle: 'Authoring module UX within the enterprise curriculum platform',
    featured: true,
    tags: ['AI/ML', 'Prototyping', 'Workflow Design', 'Enterprise'],
    summary:
      'As Lead UX Designer, shaped the curriculum and course authoring modules within a modular enterprise platform—replacing legacy workflows with clearer offering setup, course management, and validation flows. Contributed to UX for AI-powered course authoring capabilities that supported content generation.',
    challenge:
      'Authoring teams needed clearer, more efficient ways to define offerings, manage courses, and align accreditation standards. Legacy tools were dense and inconsistent, creating rework and slowing curriculum production across a large multi-brand education organization.',
    approach: [
      'Defined UX strategy and interaction patterns for curriculum and course authoring modules at enterprise scale.',
      'Mapped legacy authoring workflows and redesigned offering setup, course management, and validation experiences.',
      'Partnered on AI-powered course authoring capabilities that supported content generation.',
      'Applied AI within the design process to speed research synthesis, prototyping, and MVP validation.',
    ],
    outcomes: [
      'Delivered scalable authoring module patterns for offering setup, course management, and validation workflows.',
      'Improved efficiency for academic stakeholders through clearer workflows and AI-assisted authoring patterns.',
      'Shortened discovery and design cycles through AI-accelerated UX practice.',
    ],
    role: 'Lead UX Designer',
    timeline: '2024 – 2026',
    tools: ['Figma', 'Cursor', 'ChatGPT', 'Dovetail'],
    image: '/images/projects/ai-authoring-tools.jpg',
    imageAlt: 'Personalized assignment form and Stratus course management dashboard for AI-powered authoring',
    imageWidth: 979,
    imageHeight: 533,
    imageSizes: '(min-width: 640px) 50vw, 100vw',
    processImage: '/images/projects/ai-authoring-tools-process.png',
    processImageAlt:
      'Atlas curriculum and course management system showing browse, search, program navigation, and curriculum development workflows',
    processImageWidth: 1024,
    processImageHeight: 576,
    processImageCaption: 'Legacy curriculum authoring workflows before redesign',
    approachImage: '/images/projects/ai-authoring-tools-approach.png',
    approachImageAlt:
      'Offering details form and manage courses step with core course cards and context notes in the authoring workflow',
    approachImageWidth: 1024,
    approachImageHeight: 576,
    approachImageCaption: 'Curriculum and course authoring module prototype',
    finalDesignImages: [
      finalDesignImage({
        src: '/images/projects/ai-authoring-tools-final.png',
        alt: 'Stratus Manage Courses screen on a tablet showing MBA core courses with competencies and alignments',
        retinaSrc: retinaSrcFor('/images/projects/ai-authoring-tools-final.png'),
      }),
      finalDesignImage({
        src: '/images/projects/ai-authoring-tools-final-2.png',
        alt: 'Stratus Duplicate Course modal and Add Validations page with ACBSP accreditation standards for an MBA offering',
        retinaSrc: retinaSrcFor('/images/projects/ai-authoring-tools-final-2.png'),
      }),
    ],
  },
  {
    id: 'flexpath-research',
    slug: 'flexpath-research',
    title: 'Learning Model UX Research',
    subtitle: 'Competency Map and competency-based grading research',
    featured: true,
    tags: ['User Research', 'Usability Testing', 'Higher Ed', 'Journey Mapping', 'Survey Design'],
    summary:
      'Planned and facilitated multi-method UX research on Capella\'s FlexPath competency-based model, with emphasis on the Competency Map and grading experience. Combined academic coach interviews, a broad learner survey, and CX support analytics to translate insights into product and experience improvements.',
    challenge:
      'Learners and coaches struggled to build a clear mental model of the Competency Map and competency-based grading. Confusion around progress, rubrics, and traditional grade expectations increased support volume, coach intervention time, and misalignment between faculty feedback and map status.',
    approach: [
      'Conducted broad learner survey research to gather attitudinal insights on grading models, focusing on motivation, engagement, preferences, and the value of micro-credentials.',
      'Planned and facilitated academic coach interviews to evaluate Competency Map use, learner understanding, and operational friction in competency-based grading workflows.',
      'Partnered with the CX team using Qualtrics XM Discover to analyze support volume and themes related to the Competency Map, validating qualitative findings with operational data.',
      'Synthesized interview and survey findings using Dovetail and AI-assisted analysis, then mapped insights to actionable product recommendations with cross-functional partners.',
    ],
    outcomes: [
      'Identified clarity gaps in how learners understand and use the Competency Map, including confusion between competency status and traditional grading.',
      'Surfaced grading-model preferences and micro-credential opportunities from learner attitudinal research to inform future experience direction.',
      'Corroborated coach interview themes with CX support trends, strengthening the case for in-product guidance, better integration, and clearer grading communication.',
      'Delivered evidence-based recommendations spanning learner onboarding, map visibility, rubric alignment, and coach-facing workflow improvements.',
    ],
    role: 'UX Designer',
    timeline: '2024 – 2025',
    tools: ['Dovetail', 'Qualtrics', 'FigJam', 'Figma', 'Miro'],
    image: '/images/projects/flexpath-research.jpg',
    imageAlt: 'Brain and graduation cap icons representing competency-based learning model UX research',
    imageWidth: 951,
    imageHeight: 535,
    imageSizes: '(min-width: 640px) 50vw, 100vw',
    approachImage: '/images/projects/flexpath-research-approach.png',
    approachImageAlt:
      'Research collage showing coach interviews, Qualtrics XM Discover support trends, and learner survey results on competency-based grading',
    approachImageWidth: 1024,
    approachImageHeight: 576,
    approachImageCaption: 'Multi-method research on the Competency Map and competency-based grading model',
    insightsIntro:
      'Key findings from four academic coach interviews, synthesized with AI-assisted analysis in Dovetail and validated against Competency Map support trends in Qualtrics XM Discover.',
    insights: [
      {
        title: 'Learners lack a clear mental model of the Competency Map',
        findings: [
          'Students often confuse competency status with traditional grades and engage with the map reactively—typically only after grading issues arise.',
          'Misaligned faculty feedback and limited rubric visibility make it hard to understand progress, proficiency levels, and course completion requirements.',
          'Clarity gaps increase coach intervention time and misdirect help requests to faculty who may be untrained on the tool.',
        ],
        quote: {
          text: 'The instructor said "you\'re good to go," but the student hadn\'t actually met all course requirements on the competency map.',
          attribution: 'Alexa Myre, Academic Coach',
        },
      },
      {
        title: 'Coaches rely on the map; learners rarely use it consistently',
        findings: [
          'Academic coaches treat the Competency Map as a central planning tool and encourage frequent check-ins after every scored assessment.',
          'Learners rarely keep the map open while working and find navigation across multiple systems unintuitive.',
          'Because the map lives outside the Canvas course shell, it undermines its role as a live progress tracker.',
        ],
        quote: {
          text: 'The competency map is their main tool for the courses… we want them to live off the competency map.',
          attribution: 'Lindsay Gray, Academic Coach',
        },
      },
      {
        title: 'Traditional grading expectations create friction with the competency model',
        findings: [
          'Students express frustration over the absence of points, percentages, and honors—some switch to Guided Path to pursue honors eligibility.',
          'Faculty congratulations or feedback do not always align with competency map logic, leading to preventable escalations and course delays.',
          'Despite learner confusion, coaches believe the model\'s complexity supports critical thinking and deeper learning when understood.',
        ],
        quote: {
          text: 'They see the points, they ask for percentages… "I still want my scores to be traditional because I understand that."',
          attribution: 'Stephanie Luetgers, Academic Coach',
        },
      },
      {
        title: 'Employer and career relevance requires awkward workarounds',
        findings: [
          'Students and coaches must translate competency data into letter grades for employers and external audiences.',
          'FlexPath\'s lack of GPA and honors is seen as a limitation, creating tension between internal grading policy and external expectations.',
          'Some learners connect competencies to real-world utility, but no streamlined method reconciles internal and external credentialing needs.',
        ],
      },
      {
        title: 'System misalignment creates operational risk for coaches',
        findings: [
          'Inaccurate synchronization between the Competency Map and academic planning tools (e.g., CAPE) erodes trust in progress data.',
          'Coaches lose map visibility when students drop courses, and faculty actions—such as deleting attempts—can unintentionally corrupt map data.',
          'Micro-credentials were not a major interview theme, but coaches saw potential for clearer, portable representations of learning outcomes.',
        ],
        quote: {
          text: 'I\'ve always wanted to incorporate the competency map more with the academic planning tool, but because it\'s not reflecting accurately… it causes confusion for students.',
          attribution: 'Craig Gleason, Academic Coach',
        },
      },
    ],
  },
  {
    id: 'quiz-authoring-platform',
    slug: 'quiz-authoring-platform',
    title: 'Interactive Media Authoring Platform',
    subtitle: 'Multi-format formative activities at scale',
    featured: true,
    tags: ['Interaction Design', 'Formative Assessment', 'Accessibility', 'Higher Ed', 'Templates'],
    summary:
      'Designed core interaction patterns, templates, and authoring workflows for an interactive media platform used to build formative learning activities at scale—including quizzes, video interactions, card sorting, branching scenarios, and other component types delivered to thousands of learners across FlexPath, Guided Path, and Strayer courses.',
    challenge:
      'Interactive designers needed a unified platform to author diverse, accessible interactive media for courses—quizzes, video, card sorting, branching, and more—while collaborating with instructional designers on content and learning objectives. Formative assessments supported learner engagement across multiple program models, including competency-based FlexPath courses where engagement evidence matters for accreditation, but legacy tooling and one-off patterns made consistent, high-volume production difficult.',
    approach: [
      'Designed reusable interaction patterns and templates across activity types, from multiple-choice and open response to video, card sorting, and branching.',
      'Led usability testing with learners to validate activity usability and refine authoring workflows based on how students interacted with published media.',
      'Ensured WCAG accessibility compliance across interaction patterns and learner-facing components.',
      'Partnered with engineering on implementation feasibility, edge cases, and extensibility for new activity formats.',
    ],
    outcomes: [
      'Enabled creation of thousands of interactive formative activities across multiple media types.',
      'Supported high-volume production of formative activities across FlexPath, Guided Path, and Strayer course delivery.',
      'Improved consistency, accessibility, and authoring efficiency through reusable templates and patterns.',
    ],
    role: 'Interactive Designer',
    timeline: '2018 – 2023',
    tools: ['Figma', 'HTML/CSS', 'Jira'],
    image: '/images/projects/quiz-authoring-platform.jpg',
    imageAlt: 'Interactive authoring platform screens showing quiz, video, and branching activity layouts',
    imageWidth: 906,
    imageHeight: 494,
    imageSizes: '(min-width: 640px) 50vw, 100vw',
    processImage: '/images/projects/quiz-authoring-platform-process.png',
    processImageAlt:
      'Collage of published learning activities: a step-based presentation module, a math skills self-assessment quiz, and an interactive worksheet with learner text inputs',
    processImageWidth: 1024,
    processImageHeight: 576,
    processImageCaption: 'Formative activities across presentations, quizzes, and interactive worksheets',
    approachImage: '/images/projects/quiz-authoring-platform-approach.png',
    approachImageAlt:
      'Learner-facing activity screens combining video, imagery, and quiz questions with immediate formative feedback on correct and incorrect responses',
    approachImageWidth: 1024,
    approachImageHeight: 576,
    approachImageCaption: 'Video, imagery, and formative assessment patterns validated with learners',
  },
  {
    id: 'learner-feedback-survey',
    slug: 'learner-feedback-survey',
    title: 'Learner Feedback Survey',
    subtitle: 'Redesigning learner insights collection',
    featured: true,
    tags: ['UX Research', 'Survey Design', 'Data Quality', 'Learning'],
    summary:
      'Redesigned the learner feedback survey, increasing response rates and improving the quality of learner insights used to inform instructional design decisions.',
    challenge:
      'Low survey response rates and poor data quality limited the instructional design team\'s ability to make evidence-based improvements to learning products.',
    approach: [
      'Analyzed existing survey performance and identified drop-off points.',
      'Redesigned the survey flow, question structure, and visual presentation for clarity and engagement.',
      'Tested redesigned flows with learners to validate improvements before launch.',
    ],
    outcomes: [
      'Increased survey response rates significantly.',
      'Improved quality and actionability of learner insights for instructional design.',
    ],
    role: 'Interactive Designer',
    timeline: '2019 – 2020',
    tools: ['Figma', 'FigJam'],
    image: '/images/projects/learner-feedback-survey.jpg',
    imageAlt: 'Learner feedback survey illustration with speech bubbles and star ratings',
    imageWidth: 672,
    imageHeight: 366,
    imageSizes: '(min-width: 640px) 50vw, 100vw',
  },
]

const SLUG_ALIASES = {
  'ai-authoring-tools': 'curriculum-authoring-modules',
}

export function getProjectBySlug(slug) {
  const resolvedSlug = SLUG_ALIASES[slug] ?? slug
  return projects.find((p) => p.slug === resolvedSlug)
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}
