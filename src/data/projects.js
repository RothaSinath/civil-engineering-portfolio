export const projectsData = [
  {
    id: "structural-analysis-design",
    title: "Structural Analysis and Design",
    category: "Structural Engineering",
    badge: "Sample Academic Concept",
    isSampleConcept: true,
    shortDescription:
      "An academic concept exploring structural behavior, support reactions, bending moments, shear forces, and the application of engineering mechanics to structural systems.",
    skills: ["Structural Analysis", "Strength of Materials", "MATLAB"],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Structural reinforced concrete building frame under construction showing columns and beams",
    fallbackSvg: "structural-frame.svg",
    overview:
      "This project concept focuses on applying core principles of statics and mechanics of materials to analyze determinate and indeterminate beam and frame systems. It models support conditions, internal member forces, and deflection limits under standard design loads.",
    objectives: [
      "Understand the determination of reactions, axial forces, shear forces, and bending moments across multi-span frames.",
      "Evaluate maximum stresses and critical sections using governing load combinations.",
      "Apply numerical algorithms in MATLAB to automate shear force and bending moment diagram (SFD/BMD) generation."
    ],
    scopeOfWork: [
      "Idealization of 2D plane frame geometries and boundary support constraints.",
      "Application of distributed dead and live gravity loading according to structural mechanics standards.",
      "Comparative analysis between classical slope-deflection/moment-distribution formulations and numerical matrix stiffness methods."
    ],
    methodology:
      "Formulation of equilibrium equations, construction of free-body diagrams, and verification of internal force distributions through matrix analysis.",
    softwareAndTools: ["MATLAB", "Engineering Mechanics Principles", "Matrix Stiffness Method"],
    drawingsOrDiagrams: "Shear Force Diagrams (SFD), Bending Moment Diagrams (BMD), and Frame Deflection Profiles (Academic Modeling).",
    verifiedResults: null, // Strictly null: "Results, only when verified information exists. Do not fabricate project completion, results, calculations, budgets, clients, site visits, or construction achievements."
    challengesAndLessons:
      "Understanding sign conventions in indeterminate frame analysis and maintaining equilibrium consistency during manual and computational cross-checks."
  },
  {
    id: "building-design-technical-drafting",
    title: "Building Design and Technical Drafting",
    category: "Engineering Design",
    badge: "Sample Academic Concept",
    isSampleConcept: true,
    shortDescription:
      "A technical drawing concept focused on building layouts, dimensions, drawing conventions, and the communication of architectural and engineering design information.",
    skills: ["AutoCAD", "Technical Drawing", "Building Layouts"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Architectural blueprints and engineering technical drafting instruments on an drafting table",
    fallbackSvg: "technical-drafting.svg",
    overview:
      "This technical drawing study focuses on the principles of computer-aided drafting (CAD) for civil and architectural structures. It emphasizes standardized layer management, geometric dimensioning, grid alignment, section cuts, and professional title block conventions.",
    objectives: [
      "Produce standardized 2D floor plans, elevation views, and sectional details according to engineering drafting codes.",
      "Develop structural grid systems that align column axes with functional architectural spatial planning.",
      "Master AutoCAD commands, dimension styles, annotation scales, and paper-space layout plotting."
    ],
    scopeOfWork: [
      "Ground floor and typical upper-floor spatial layouts.",
      "Longitudinal and cross-sectional views highlighting structural slab-beam-column relationships.",
      "Door and window schedules, wall thickness standards, and dimension callouts."
    ],
    methodology:
      "Utilizing coordinate entry, orthogonal tracking, layer stratification (walls, columns, doors, dimensions, text), and dynamic block definitions in AutoCAD.",
    softwareAndTools: ["AutoCAD", "Drafting Standards & Conventions", "Geometric Dimensioning"],
    drawingsOrDiagrams: "Architectural Floor Plans, Elevation Projections, and Structural Grid Layouts.",
    verifiedResults: null,
    challengesAndLessons:
      "Ensuring perfect dimensional closure across all axes and coordinating wall-column transitions between architectural and structural drafting layers."
  },
  {
    id: "soil-mechanics-foundation-design",
    title: "Soil Mechanics and Foundation Design",
    category: "Geotechnical Engineering",
    badge: "Sample Academic Concept",
    isSampleConcept: true,
    shortDescription:
      "An academic concept exploring soil properties, foundation types, bearing capacity principles, and engineering considerations for supporting structures safely.",
    skills: ["Soil Mechanics", "Foundation Design", "Engineering Calculations"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Geotechnical excavation and foundation ground preparation at an engineering site",
    fallbackSvg: "soil-foundation.svg",
    overview:
      "A geotechnical engineering study addressing soil classification, effective stress principles, consolidation characteristics, and the analytical evaluation of shallow spread footing capacities under vertical column loads.",
    objectives: [
      "Investigate soil phase relationships, index properties, and Atterberg limits.",
      "Evaluate Terzaghi and Meyerhof ultimate and allowable bearing capacity equations.",
      "Assess immediate elastic settlement and primary consolidation settlement under shallow footings."
    ],
    scopeOfWork: [
      "Review of geotechnical soil borehole log stratigraphy and water table depths.",
      "Calculation of effective vertical stresses at various sub-surface depths.",
      "Dimensioning of isolated square footings to satisfy bearing capacity safety factors (FS >= 3.0)."
    ],
    methodology:
      "Theoretical calculation of shear strength parameters (cohesion 'c' and internal friction angle 'φ') and settlement computation using one-dimensional consolidation theory.",
    softwareAndTools: ["Engineering Calculation Worksheets", "Soil Classification Systems (USCS)", "Geotechnical Formulae"],
    drawingsOrDiagrams: "Subsurface Stratigraphy Profile and Isolated Footing Section Drawing.",
    verifiedResults: null,
    challengesAndLessons:
      "Accounting for the influence of fluctuating groundwater levels on effective soil unit weight and bearing resistance."
  },
  {
    id: "road-design-infrastructure",
    title: "Road Design and Infrastructure",
    category: "Transportation Engineering",
    badge: "Sample Academic Concept",
    isSampleConcept: true,
    shortDescription:
      "A study concept covering road alignment, road cross-sections, surveying information, and fundamental considerations for safe transportation infrastructure.",
    skills: ["Road Design", "Surveying", "Technical Drawing"],
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Civil infrastructure highway corridor with curved road alignment and bridge overpass",
    fallbackSvg: "road-infrastructure.svg",
    overview:
      "This transportation engineering academic concept explores geometric road alignment. It addresses horizontal curve radius design, superelevation rates, stopping sight distance requirements, vertical crest/sag curves, and typical cross-sectional cut-and-fill slopes.",
    objectives: [
      "Establish safe horizontal alignments based on design speed and friction factors.",
      "Determine vertical profile gradients and calculate minimum curve lengths to ensure driver stopping sight distance.",
      "Formulate cross-sectional geometry including travel lanes, shoulders, drainage ditches, and cross-slopes."
    ],
    scopeOfWork: [
      "Route centerline alignment mapping based on topographic elevation contours.",
      "Superelevation runoff calculation and transition curve (clothoid spiral) geometry.",
      "Estimation of cut and fill cross-sectional areas along station intervals."
    ],
    methodology:
      "Application of highway design standards (AASHTO guidelines) for design speeds, maximum gradients, and curve radii coordination.",
    softwareAndTools: ["Civil Engineering Surveying Principles", "AASHTO Design Guidelines", "AutoCAD CAD Drawings"],
    drawingsOrDiagrams: "Plan & Profile Alignment Drawings, Typical Road Cross-Section (Camber & Ditches).",
    verifiedResults: null,
    challengesAndLessons:
      "Balancing earthwork cut and fill volumes while maintaining smooth vertical curve transitions across undulating terrain."
  },
  {
    id: "construction-planning-cost-estimation",
    title: "Construction Planning and Cost Estimation",
    category: "Construction Management",
    badge: "Sample Academic Concept",
    isSampleConcept: true,
    shortDescription:
      "A construction planning concept covering preliminary quantity estimation, material and labor costs, project scheduling, and construction safety considerations.",
    skills: ["Cost Estimation", "Project Planning", "Construction Technology"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction project site with structural steel framing, tower cranes, and safety scaffolding",
    fallbackSvg: "construction-planning.svg",
    overview:
      "An academic exploration into the management side of civil engineering. The project examines quantity takeoff methodologies from architectural drawings, rate analysis for primary construction materials (concrete, rebar, formwork), and critical path activity scheduling.",
    objectives: [
      "Perform detailed quantity takeoffs for earthwork excavation, reinforced concrete, and formwork.",
      "Develop a Work Breakdown Structure (WBS) and precedence diagram for sequential building construction phases.",
      "Formulate site safety risk assessments and logistics management strategies."
    ],
    scopeOfWork: [
      "Bill of Quantities (BOQ) sample template development for residential foundation and superstructure framing.",
      "Activity duration estimating and Gantt chart scheduling showing critical path milestones.",
      "Site layout planning highlighting material storage zones, crane swing radii, and worker access routes."
    ],
    methodology:
      "Standard measurement methods (POMI/CESMM) for quantity takeoff and Critical Path Method (CPM) for schedule analysis.",
    softwareAndTools: ["Spreadsheet Modeling", "Critical Path Method (CPM)", "Safety Compliance Standards"],
    drawingsOrDiagrams: "Work Breakdown Structure (WBS) Chart, Sample BOQ Matrix, Site Logistics Plan.",
    verifiedResults: null,
    challengesAndLessons:
      "Accurately anticipating productivity rates and contingency buffers for weather delays and material supply chain volatility."
  }
];
