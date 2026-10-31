import type { PlanGoal, ChapterData } from '../types';

export const PLAN_OVERVIEW = {
  title: "PLAN2050 Overview",
  leadParagraph: "Each Metropolitan Planning Organization (MPO) must prepare and adopt a long-range transportation plan (PLAN2050) in accordance with federal regulations. The plan aim at creating a coordinated, multimodal transportation system that addresses the needs and objectives of the MPO, state, and transit providers. It must consider transit, highways, bicycle and pedestrian facilities, accessibility, and freight; accommodate current and future travel demand; and support economic development, transportation, land use, and sustainability goals over a minimum 20-year planning horizon while remaining fiscally constrained.",
  keyStats: [
    { label: "Regional Population", value: "167,920", subtext: "2020 Decennial Census" },
    { label: "Planning Area", value: "324 sq mi", subtext: "Tri-Cities Virginia Region" },
    { label: "Member Jurisdictions", value: "6", subtext: "3 Cities & 3 County Portions" },
    { label: "Horizon Year", value: "2050", subtext: "25+ Year Long-Range Vision" },
  ],
  jurisdictions: [
    { name: "City of Colonial Heights", type: "Independent City", population: "18,170", area: "7.8 sq mi" },
    { name: "City of Hopewell", type: "Independent City", population: "23,033", area: "10.8 sq mi" },
    { name: "City of Petersburg", type: "Independent City", population: "33,458", area: "23.2 sq mi" },
    { name: "Chesterfield County (Part)", type: "County Portion", population: "52,410", area: "112.5 sq mi" },
    { name: "Dinwiddie County (Part)", type: "County Portion", population: "14,820", area: "74.1 sq mi" },
    { name: "Prince George County (Part)", type: "County Portion", population: "26,029", area: "95.6 sq mi" },
  ]
};

export const PLAN_GOALS: PlanGoal[] = [
  {
    id: 'safety',
    number: 1,
    title: "Safety First",
    description: "Improve the safety of the transportation system for all people",
    iconName: "ShieldAlert",
    badgeBg: "linear-gradient(135deg, #ef4444, #b91c1c)",
    accentColor: "#ef4444",
    details: "Zero fatalities and serious injuries across all modes by 2050. Proactively retrofitting high-risk intersections along Route 1, Route 301, and I-95 interchanges with modern roundabout designs, pedestrian refuges, and adaptive signal timing.",
    metrics: [
      { label: "Fatality Reduction Target", target: "-50% by 2035", benchmark: "Toward Vision Zero" },
      { label: "High-Crash Intersections Mitigated", target: "100%", benchmark: "Top 25 priority spots" },
      { label: "Pedestrian Crossing Safety Index", target: "+85%", benchmark: "Grade-separated trails & RRFBs" }
    ]
  },
  {
    id: 'environment',
    number: 2,
    title: "Environment & Climate",
    description: "Reduce the negative impact the transportation system has on the natural and built environment",
    iconName: "Leaf",
    badgeBg: "linear-gradient(135deg, #10b981, #047857)",
    accentColor: "#10b981",
    details: "Protecting the James and Appomattox River watersheds while accelerating zero-emission transit adoption. Establishing regional electric vehicle charging infrastructure corridors and expanding tree canopies along major transit arterials.",
    metrics: [
      { label: "Greenhouse Gas Emission Cut", target: "-40% by 2040", benchmark: "Per capita regional travel" },
      { label: "Fleet Electrification", target: "100% Zero-Emission", benchmark: "Petersburg Area Transit by 2038" },
      { label: "Stormwater Runoff Mitigation", target: "95% Green Bio-swales", benchmark: "New & widened roadway projects" }
    ]
  },
  {
    id: 'equity',
    number: 3,
    title: "Equitable Access",
    description: "Improve equitable access through greater availability of mode choices that are affordable and efficient",
    iconName: "Bike",
    badgeBg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    accentColor: "#3b82f6",
    details: "Bridging the transit gap for Environmental Justice (EJ) communities, zero-vehicle households, elderly residents, and individuals with disabilities. Expanding frequent micro-transit, regional bus rapid lines, and protected bike/pedestrian paths.",
    metrics: [
      { label: "EJ Communities within 10m Transit Walk", target: "92%", benchmark: "Current: 64%" },
      { label: "Active Transportation Miles", target: "+120 miles", benchmark: "Fall Line Trail & Appomattox River Trail" },
      { label: "Affordable Fares / Microtransit Coverage", target: "24/7 On-Demand", benchmark: "Full coverage in high-need zones" }
    ]
  },
  {
    id: 'connectivity',
    number: 4,
    title: "Connectivity & Economy",
    description: "Improve connectivity and mobility for strong economic vitality",
    iconName: "TrendingUp",
    badgeBg: "linear-gradient(135deg, #f59e0b, #b45309)",
    accentColor: "#f59e0b",
    details: "Connecting regional employment centers, logistics hubs along the I-85/I-95 gateway, Fort Gregg-Adams, and the Port of Virginia inland logistics networks. Reducing freight bottlenecks and cutting inter-city travel delays.",
    metrics: [
      { label: "Truck Travel Time Reliability (TTTR)", target: "< 1.25", benchmark: "Interstate corridor reliability" },
      { label: "Job Hub Transit Accessibility", target: "+65%", benchmark: "Direct transit within 30 min" },
      { label: "Economic Output Supported", target: "$4.8 Billion", benchmark: "Regional commerce enablement" }
    ]
  },
  {
    id: 'repair',
    number: 5,
    title: "State of Good Repair",
    description: "Increase travel efficiency and mode choices by maintaining the transportation system in a state of good repair",
    iconName: "Wrench",
    badgeBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    accentColor: "#8b5cf6",
    details: "Preserving existing infrastructure assets with predictive lifecycle management. Ensuring 100% of National Highway System (NHS) bridges and pavements remain in Good or Fair condition before funding new road expansions.",
    metrics: [
      { label: "NHS Bridges in Good Condition", target: "> 95%", benchmark: "Zero poor structural condition" },
      { label: "Interstate Pavement Quality Index", target: "> 88%", benchmark: "Smooth ride index" },
      { label: "Transit Asset Management (TAM) Rating", target: "State of Good Repair", benchmark: "100% fleet adherence" }
    ]
  }
];

export const CHAPTERS_DATA: ChapterData[] = [
  {
    id: 'introduction',
    chapterNumber: 1,
    title: "Introduction",
    fullTitle: "Chapter 1: Introduction",
    subtitle: "Regional Planning Framework, Organization, and Federal Compliance",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_1_Introduction.pdf",
    sections: [
      {
        id: "regional-context",
        title: "Regional Context",
        text: [
          "Located along the I-95, I-85, and I-295 corridors about 25 miles south of Richmond, the Tri-Cities region is situated at the confluence of the James and Appomattox Rivers. The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated planning body responsible for transportation planning in south-central Virginia's Tri-Cities region. Contained within the Crater Planning District Commission (PDC), TCAMPO is composed of six member jurisdictions, including the independent cities of Colonial Heights, Hopewell, and Petersburg and portions of the adjoining Chesterfield, Dinwiddie, and Prince George Counties. The Tri-Cities region is part of the Greater Richmond Region, which is defined by the Office of Management and Budget (OMB) as the Richmond, Virginia Metropolitan Statistical Area (MSA).",
          "Figure 1 depicts the TCAMPO planning area in the context of the Richmond MSA. According to the 2020 decennial census, the population of TCAMPO was 167,920. With a land area of approximately 324 square miles, the MPO has a population density of approximately 518 people per square mile. Among all MPOs in Virginia, TCAMPO is ranked fifth in population size and serves as a vital multimodal crossroads for eastern seaboard freight and passenger travel.",
          "The region benefits from unique geographical assets including navigable waterways, rail corridors operated by CSX and Norfolk Southern, and direct connectivity to the Port of Virginia's Richmond Marine Terminal. Transportation investments planned in PLAN2050 leverage these geographic strengths to enhance regional resilience and economic vitality."
        ],
        callout: {
          type: "highlight",
          title: "Strategic Confluence",
          content: "Serving as Virginia's central gateway between the Piedmont and Tidewater regions, Tri-Cities connects over 150 million annual freight tons across I-95, I-85, and I-295."
        },
        hasInteractiveFigure: "figure1_map"
      },
      {
        id: "tcampo-structure",
        title: "TCAMPO Organization and Structure",
        text: [
          "The Tri-Cities Area Metropolitan Planning Organization is governed by a Policy Committee made up of elected and appointed officials representing member jurisdictions, the Crater Planning District Commission, Virginia Department of Transportation (VDOT), Virginia Department of Rail and Public Transportation (DRPT), and regional transit operators including Petersburg Area Transit (PAT).",
          "The Technical Advisory Committee (TAC) provides technical review and recommendations on transportation studies, priority lists, and plan amendments. Additionally, TCAMPO maintains active advisory committees for freight mobility, bicycle and pedestrian advisory groups, and Title VI / Environmental Justice community liaison bodies."
        ]
      },
      {
        id: "purpose-of-plan",
        title: "Purpose of the Plan",
        text: [
          "PLAN2050 establishes the shared vision for transportation improvements across south-central Virginia over the next quarter-century. Federal law requires that all metropolitan areas update their long-range transportation plans every five years to remain eligible for federal transportation revenues.",
          "The plan serves as a blueprint for directing federal, state, and local investments into projects that improve mobility, reduce roadway fatalities, enhance economic competitiveness, and safeguard the natural environment while maintaining fiscal balance."
        ]
      },
      {
        id: "role-of-tcampo",
        title: "Role of TCAMPO",
        text: [
          "As the designated MPO, TCAMPO provides an open, collaborative forum for regional decision-making. TCAMPO does not own or maintain roads directly; instead, it coordinates the 3-C planning process: Continuing, Comprehensive, and Cooperative.",
          "Through this process, member localities, transit agencies, and state partners prioritize projects and ensure regional cohesion across political boundaries."
        ]
      },
      {
        id: "federal-regulations",
        title: "Federal Regional Transportation Planning Regulations",
        text: [
          "PLAN2050 complies with the federal requirements set forth under Title 23 U.S.C. Section 134 and Title 49 U.S.C. Section 5303, enacted through the Infrastructure Investment and Jobs Act (IIJA) / Bipartisan Infrastructure Law (BIL).",
          "Key mandates include fiscal constraint, clean air conformity review, performance-based planning and programming (PBPP), and inclusive public participation with particular focus on historically underserved populations."
        ]
      },
      {
        id: "planning-factors",
        title: "National Transportation Planning Factors",
        text: [
          "Under federal legislation, metropolitan planning must address ten core planning factors including: supporting economic vitality, increasing safety, increasing security, increasing accessibility and mobility, protecting the environment, enhancing multimodal integration, promoting system efficiency, preserving existing systems, improving resilience and stormwater mitigation, and enhancing travel and tourism."
        ]
      },
      {
        id: "performance-measures",
        title: "Federal Performance Measures",
        text: [
          "TCAMPO coordinates with VDOT and DRPT to establish and monitor performance targets across three key federal categories: PM1 (Safety), PM2 (Pavement and Bridge Condition), and PM3 (System Performance, Freight Reliability, and CMAQ emissions).",
          "Every project prioritized in PLAN2050 is evaluated against its quantifiable contribution to reaching these performance targets."
        ]
      },
      {
        id: "goals-objectives",
        title: "Plan2050 Goals, Objectives, Performance Measures",
        text: [
          "The Policy Committee adopted five regional goals: Safety, Environment, Equity, Connectivity & Economic Vitality, and State of Good Repair. Each goal contains measurable objectives, data benchmarks, and implementation strategies updated through continuous performance monitoring."
        ]
      },
      {
        id: "planning-process",
        title: "Planning Process",
        text: [
          "The development of PLAN2050 was conducted over an intensive 24-month horizon featuring scenario modeling, travel demand forecasting, stakeholder interviews, technical assessments, and public open houses across Colonial Heights, Hopewell, Petersburg, and county facilities."
        ]
      },
      {
        id: "relationship-plans",
        title: "Relationship to Other Plans, Reports, and Studies",
        text: [
          "PLAN2050 aligns with VTrans (Virginia's Transportation Plan), local comprehensive plans of member jurisdictions, the Crater District Comprehensive Economic Development Strategy (CEDS), Petersburg Area Transit Strategic Plan, and regional freight corridors."
        ]
      },
      {
        id: "stakeholder-involvement",
        title: "What We Heard: Stakeholder Involvement",
        text: [
          "Hundreds of residents, business leaders, and community advocates participated in regional surveys. Top community priorities highlighted were safer pedestrian crossings along arterial corridors, more frequent weekend transit routes, preserved bridge infrastructure, and dedicated off-road bike paths like the Appomattox River Trail."
        ]
      }
    ]
  },
  {
    id: 'trends',
    chapterNumber: 2,
    title: "Trends and Forecasts",
    fullTitle: "Chapter 2: Trends and Forecasts",
    subtitle: "Demographic Growth, Socioeconomic Analysis, and Multimodal Travel Demand",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_2_Trends_and_Forecasts.pdf",
    sections: [
      {
        id: "trends-intro",
        title: "Introduction",
        text: [
          "This section examines the region's population, employment, and activity density; evaluates socioeconomic growth trends and forecasts within TCAMPO, the Commonwealth of Virginia (Commonwealth), and the United States of America; and maps demographic patterns within the Tri-Cities. Understanding where the region's existing residents and jobs are concentrated and where they are growing is critical for identifying the region's current and emerging transportation needs.",
          "Additionally, Environmental Justice (EJ) analysis of the region's demographic patterns provides insight into equity considerations, helping to identify areas that may face transportation disadvantages due to race, income, limited English proficiency, household vehicle availability, disability, or age, helping to ensure equitable access to multimodal transportation options throughout the region.",
          "Because Chesterfield, Dinwiddie, and Prince George extend beyond the TCAMPO boundary, block group, tract, and county-level data from various sources were adjusted using area-weighted interpolation to reflect only the portion of each county within the MPO boundary."
        ],
        callout: {
          type: "stat",
          title: "Demographic Projection",
          content: "Regional population is projected to expand from 167,920 in 2020 to over 212,500 by 2050, accompanied by a 28% increase in regional employment."
        },
        hasInteractiveFigure: "demographics_chart"
      },
      {
        id: "pop-density",
        title: "Population, Employment, and Activity Density",
        text: [
          "Activity density maps identify concentrations of residents and jobs per square mile. Historic urban centers such as downtown Petersburg, Hopewell waterfront corridors, and the Boulevard corridor in Colonial Heights exhibit the highest activity density, making them optimal candidates for frequent transit and walkability enhancements.",
          "Emerging growth corridors along Route 36 and Route 460 in Prince George County reflect expanding industrial and logistics employment linked to Fort Gregg-Adams and regional manufacturing complexes."
        ]
      },
      {
        id: "pop-household-trends",
        title: "Population, Household, and Employment Trends",
        text: [
          "Between 2010 and 2020, TCAMPO recorded steady demographic shifts with household sizes declining while overall household formations grew by 7.4%. This trend drives greater trip generation even in areas with moderate population change.",
          "Employment growth has been particularly robust in healthcare, advanced manufacturing, defense logistics, and distribution facilities catering to the Mid-Atlantic supply chain."
        ]
      },
      {
        id: "shift-share-employment",
        title: "Shift Share Employment Growth by BLS Supersectors",
        text: [
          "Shift-share analysis disentangles regional employment growth into national economic share, industry mix effect, and regional competitive effect. The Tri-Cities region demonstrated a strong regional competitive advantage in Transportation & Warehousing (+14.2% above national trend) and Health Services."
        ]
      },
      {
        id: "demographic-profiles",
        title: "Demographic Profiles",
        text: [
          "Demographic analysis indicates that approximately 42% of the TCAMPO population belongs to racial or ethnic minority groups, with significant concentrations in Petersburg (over 75%) and Hopewell. Over 14% of the population is age 65 or older, emphasizing the need for accessible transit options and safe pedestrian environments."
        ]
      },
      {
        id: "socioeconomic-forecasts",
        title: "Socioeconomic Forecasts",
        text: [
          "Forecast models developed in partnership with the Virginia Employment Commission (VEC) and regional planners project sustained job additions along major interchanges. Key growth nodes include the Southpoint Business Park, Prince George industrial parks, and Temple Avenue commercial corridors."
        ]
      },
      {
        id: "land-use-development",
        title: "Land Use and Development",
        text: [
          "Local comprehensive plans envision mixed-use redevelopment in urban cores paired with controlled agricultural and rural preservation in southern Dinwiddie and eastern Prince George. Transportation planning must support these planned land uses to prevent sprawling infrastructure debt."
        ]
      },
      {
        id: "travel-patterns",
        title: "Travel Patterns",
        text: [
          "Vehicle Miles Traveled (VMT) within the MPO reached 5.2 million daily miles in 2023. Over 78% of workers commute by single-occupancy vehicle, 11% carpool, 3.2% utilize transit or active transport, and 7.8% telecommute."
        ]
      },
      {
        id: "commuter-flows",
        title: "County to County Commuter Flows",
        text: [
          "Commuting analysis demonstrates intense interdependence between Tri-Cities localities and the greater Richmond metropolitan area. More than 26,000 workers commute daily between Chesterfield County and Richmond, while thousands travel between Petersburg, Hopewell, and Prince George for industrial employment.",
          "Cross-county transit routes and coordinated highway operations are essential to accommodate these daily commuter exchanges."
        ],
        hasInteractiveFigure: "commuter_flow"
      }
    ]
  },
  {
    id: 'today',
    chapterNumber: 3,
    title: "System Today",
    fullTitle: "Chapter 3: Our Transportation System Today",
    subtitle: "Inventory of Roadways, Transit Networks, Freight Corridors, and Active Mobility",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_3_System_Today.pdf",
    sections: [
      {
        id: "system-status",
        title: "Status Update",
        text: [
          "The Tri-Cities MPO PLAN2050 Chapter 3: Our Transportation System Today content is currently being finalized. Please check back soon."
        ]
      }
    ]
  },
  {
    id: 'tomorrow',
    chapterNumber: 4,
    title: "System Tomorrow",
    fullTitle: "Chapter 4: System Tomorrow - Multimodal Vision",
    subtitle: "Future Transit Expansion, Smart Arterials, Bridge Replacements & Resilience",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_4_System_Tomorrow.pdf",
    sections: [
      {
        id: "vision-multimodal",
        title: "Future Multimodal Network Vision",
        text: [
          "Chapter 4 presents the forward-looking vision for 2050: a connected, multimodal transportation network that seamlessly integrates high-speed highway corridors, microtransit on-demand fleets, express commuter bus routes connecting to Richmond, and over 150 miles of contiguous regional greenways.",
          "Key signature projects include the completion of the Fall Line Trail through Colonial Heights and Chesterfield, upgrades to the I-95/I-85 junction, and modernization of the Appomattox River bridge structures."
        ]
      },
      {
        id: "smart-mobility",
        title: "Smart Corridors & Connected Infrastructure",
        text: [
          "Deploying intelligent transportation systems (ITS), adaptive traffic signals, dynamic variable speed limits during peak freight hours, and synchronized connected vehicle vehicle-to-infrastructure (V2I) sensors along Route 1 and Route 36."
        ]
      }
    ]
  },
  {
    id: 'funding',
    chapterNumber: 5,
    title: "Funding",
    fullTitle: "Chapter 5: Funding & Fiscal Constraint",
    subtitle: "Financial Plan, Revenue Projections, SMART SCALE Allocations, and Cost Realism",
    pdfFilename: "Tri-Cities_PLAN2050_Chapter_5_Funding.pdf",
    sections: [
      {
        id: "fiscal-constraint",
        title: "Fiscal Constraint Requirements",
        text: [
          "Federal regulations mandate that all projects included in PLAN2050 must have reasonable anticipated revenue sources identified. The financial plan establishes a balanced program projecting $1.24 Billion in federal, state, and regional funds over the 2026-2050 horizon.",
          "Funding streams incorporate Virginia SMART SCALE awards, Surface Transportation Block Grant (STBG), Congestion Mitigation and Air Quality (CMAQ), Central Virginia Transportation Authority (CVTA) allocations, and local matching revenues."
        ],
        hasInteractiveFigure: "funding_breakdown"
      }
    ]
  },
  {
    id: 'appendices',
    title: "Appendices",
    fullTitle: "Appendices & Reference Documentation",
    subtitle: "Technical Methodologies, Public Comment Records, Modeling Reports & Acronyms",
    pdfFilename: "Tri-Cities_PLAN2050_Appendices.pdf",
    sections: [
      {
        id: "app-methods",
        title: "Appendix A: Travel Demand Modeling Methodology",
        text: [
          "Details the regional Cube Voyager travel demand modeling framework, trip distribution parameters, external-to-external freight trip modeling, and calibration metrics validated against VDOT continuous traffic count stations."
        ]
      },
      {
        id: "app-public-comments",
        title: "Appendix B: Public Participation Summary & Comments",
        text: [
          "Full log of community survey feedback, open house transcripts, Title VI environmental justice workshop findings, and responses from the MPO Policy Committee."
        ]
      },
      {
        id: "app-acronyms",
        title: "Appendix C: Transportation Glossary & Acronyms",
        text: [
          "A comprehensive index of acronyms used throughout the PLAN2050 document including TCAMPO, VDOT, DRPT, FHWA, FTA, EJ, VMT, NHS, and PBPP."
        ]
      }
    ]
  }
];
