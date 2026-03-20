import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'kyc-system',
    title: 'KYC Verification System',
    description:
      'Enterprise-grade identity verification platform processing millions of compliance checks with sub-second latency.',
    featured: true,
    techStack: ['Python', 'AWS Lambda', 'DynamoDB', 'Step Functions', 'SQS', 'EventBridge'],
    star: {
      situation:
        'Financial services clients required a scalable KYC verification system capable of handling regulatory compliance across multiple jurisdictions while maintaining sub-second response times.',
      task:
        'Design and implement an event-driven identity verification pipeline that integrates with third-party data providers, supports configurable compliance rules, and scales to millions of daily checks.',
      action:
        'Built a serverless orchestration layer using AWS Step Functions with parallel verification stages. Implemented a rules engine for jurisdiction-specific compliance logic. Designed a caching strategy with DynamoDB to reduce redundant third-party API calls by 60%.',
      result:
        'Delivered a system processing 2M+ daily verifications with p99 latency under 800ms. Reduced false-positive rates by 35% through improved matching algorithms. Achieved 99.97% uptime over 12 months.',
    },
    metrics: ['2M+ daily verifications', 'p99 < 800ms', '35% fewer false positives', '99.97% uptime'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'Chose Step Functions over custom orchestration for built-in retry and error handling',
        'Selected DynamoDB over RDS for predictable latency at scale',
      ],
      tradeoffs: [
        'Accepted eventual consistency in verification status for higher throughput',
        'Traded storage cost for compute savings via aggressive caching',
      ],
      constraints: [
        'Third-party API rate limits required intelligent request batching',
        'Regulatory requirements mandated data residency per jurisdiction',
      ],
      scalability: [
        'Horizontal scaling via Lambda concurrency with reserved capacity',
        'Partitioned DynamoDB tables by jurisdiction for balanced throughput',
      ],
    },
  },
  {
    slug: 'deployment-strategy',
    title: 'Zero-Downtime Deployment Strategy',
    description:
      'Automated blue-green deployment pipeline reducing release risk and cutting deployment time by 70%.',
    featured: true,
    techStack: ['C++', 'Python', 'AWS CodePipeline', 'CloudFormation', 'ECS', 'ALB'],
    star: {
      situation:
        'Legacy deployment process involved manual steps, caused frequent rollbacks, and required maintenance windows that impacted customer availability.',
      task:
        'Design an automated zero-downtime deployment strategy supporting canary releases, automated rollback, and infrastructure-as-code for a fleet of microservices.',
      action:
        'Implemented blue-green deployments on ECS with ALB traffic shifting. Built a custom health-check aggregator in C++ for sub-second rollback decisions. Created CloudFormation templates for reproducible infrastructure across environments.',
      result:
        'Reduced deployment time from 45 minutes to 12 minutes. Eliminated maintenance windows entirely. Decreased failed deployments by 85% through automated canary analysis.',
    },
    metrics: ['70% faster deployments', '85% fewer failures', 'Zero maintenance windows'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'Blue-green over rolling updates for instant rollback capability',
        'C++ health aggregator for latency-critical rollback decisions',
      ],
      tradeoffs: [
        'Double infrastructure cost during deployments for zero-downtime guarantee',
        'Increased pipeline complexity for improved release safety',
      ],
      constraints: [
        'Existing services required backward-compatible API contracts during transitions',
        'Shared database schemas limited independent service deployments',
      ],
      scalability: [
        'Pipeline templates parameterized for any microservice onboarding',
        'Canary analysis thresholds auto-tuned per service SLA',
      ],
    },
  },
  {
    slug: 'ai-prediction-system',
    title: 'AI Prediction System',
    description:
      'Machine learning platform delivering real-time demand forecasting with 94% accuracy across product categories.',
    featured: true,
    techStack: ['Python', 'TensorFlow', 'AWS SageMaker', 'S3', 'Kinesis', 'TypeScript'],
    star: {
      situation:
        'Business teams relied on manual forecasting methods with 60% accuracy, leading to inventory imbalances and missed revenue opportunities.',
      task:
        'Build an end-to-end ML pipeline for real-time demand prediction that integrates with existing inventory systems and provides actionable insights through a dashboard.',
      action:
        'Developed ensemble models combining gradient boosting and LSTM networks. Built a feature engineering pipeline processing streaming data via Kinesis. Created a TypeScript dashboard for real-time prediction visualization and model performance monitoring.',
      result:
        'Achieved 94% prediction accuracy, up from 60% baseline. Reduced inventory waste by $7M annually. Model retraining pipeline runs daily with zero manual intervention.',
    },
    metrics: ['94% accuracy', '$7M annual savings', 'Real-time predictions', 'Automated retraining'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'Ensemble approach over single model for robustness across product categories',
        'SageMaker over self-managed infrastructure for operational simplicity',
      ],
      tradeoffs: [
        'Higher inference cost for ensemble vs. single model accuracy gains',
        'Batch feature computation for cost efficiency over pure real-time processing',
      ],
      constraints: [
        'Model inference latency budget of 200ms for real-time serving',
        'Training data privacy requirements limited cross-region data movement',
      ],
      scalability: [
        'Auto-scaling SageMaker endpoints based on request volume',
        'Feature store enabling model reuse across prediction domains',
      ],
    },
  },
  {
    slug: 'subscription-system',
    title: 'Subscription Management System',
    description:
      'Microservices-based subscription platform handling billing, entitlements, and lifecycle management for 500K+ subscribers.',
    featured: false,
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS SNS', 'Stripe API'],
    star: {
      situation:
        'Monolithic billing system could not support new pricing models and suffered from cascading failures during peak billing cycles.',
      task:
        'Decompose the billing monolith into microservices supporting flexible pricing, automated dunning, and real-time entitlement checks.',
      action:
        'Designed domain-driven microservices for billing, entitlements, and notifications. Implemented event sourcing for billing state with PostgreSQL. Built a Redis-backed entitlement cache for sub-millisecond access checks.',
      result:
        'Supported 3 new pricing models within 2 weeks of launch. Reduced billing cycle failures by 92%. Entitlement checks averaged 0.3ms p50 latency.',
    },
    metrics: ['500K+ subscribers', '92% fewer failures', '0.3ms entitlement checks'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'Event sourcing for billing state to enable full audit trail',
        'Redis entitlement cache for sub-millisecond access validation',
      ],
      tradeoffs: [
        'Increased operational complexity of microservices for independent scalability',
        'Eventual consistency in entitlements for cache performance',
      ],
      constraints: [
        'PCI compliance requirements for payment data handling',
        'Backward compatibility with existing subscriber contracts',
      ],
      scalability: [
        'Independent scaling of billing vs. entitlement services',
        'Partitioned event store by tenant for write throughput',
      ],
    },
  },
  {
    slug: 'cloud-platform',
    title: 'Internal Cloud Platform',
    description:
      'Self-service infrastructure platform enabling teams to provision and manage cloud resources through a unified API.',
    featured: false,
    techStack: ['Python', 'AWS CDK', 'CloudFormation', 'API Gateway', 'Lambda', 'DynamoDB'],
    star: {
      situation:
        'Engineering teams spent an average of 2 weeks provisioning infrastructure through manual ticket-based processes, creating bottlenecks and inconsistent configurations.',
      task:
        'Build a self-service platform that abstracts infrastructure provisioning behind a simple API, enforces organizational policies, and provides cost visibility.',
      action:
        'Created an API-driven provisioning layer using AWS CDK constructs. Implemented policy-as-code guardrails for security and cost controls. Built a cost attribution system tracking spend per team and project.',
      result:
        'Reduced provisioning time from 2 weeks to 15 minutes. Onboarded 40+ teams within the first quarter. Identified $1.2M in cost optimization opportunities through attribution dashboards.',
    },
    metrics: ['15-min provisioning', '40+ teams onboarded', '$1.2M cost savings identified'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'CDK over raw CloudFormation for type-safe infrastructure definitions',
        'API Gateway + Lambda for serverless API layer',
      ],
      tradeoffs: [
        'Abstraction layer limits advanced customization for power users',
        'CDK version upgrades require coordinated construct library updates',
      ],
      constraints: [
        'Must support existing CloudFormation stacks during migration',
        'Security policies require all resources tagged with ownership metadata',
      ],
      scalability: [
        'Modular construct library enabling new resource types without API changes',
        'Multi-account strategy with centralized governance',
      ],
    },
  },
  {
    slug: 'multi-agent-system',
    title: 'Multi-Agent Coordination System',
    description:
      'Distributed AI agent framework enabling autonomous task decomposition and collaborative problem-solving.',
    featured: false,
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Redis', 'FastAPI', 'WebSockets'],
    star: {
      situation:
        'Complex analytical tasks required multiple specialized AI capabilities that a single model could not handle effectively, leading to poor output quality on multi-step problems.',
      task:
        'Design a multi-agent architecture where specialized agents collaborate on complex tasks through structured communication, with human-in-the-loop oversight.',
      action:
        'Built an agent orchestration framework with role-based specialization. Implemented a shared memory system using Redis for inter-agent context. Created a WebSocket-based monitoring dashboard for real-time agent activity visualization.',
      result:
        'Improved complex task completion accuracy by 40% compared to single-agent baseline. Reduced average task completion time by 55%. Framework adopted by 3 internal teams for domain-specific applications.',
    },
    metrics: ['40% accuracy improvement', '55% faster completion', '3 teams adopted'],
    diagramPlaceholder: true,
    engineeringHighlights: {
      decisions: [
        'Role-based agent specialization over generalist agents for quality',
        'Redis shared memory over direct message passing for decoupled communication',
      ],
      tradeoffs: [
        'Higher token cost from multi-agent conversations for improved output quality',
        'Added orchestration complexity for better task decomposition',
      ],
      constraints: [
        'API rate limits required intelligent request queuing and batching',
        'Agent responses must be deterministic enough for reproducible workflows',
      ],
      scalability: [
        'Plugin architecture for adding new agent specializations',
        'Horizontal scaling of agent workers behind task queue',
      ],
    },
  },
];
