# Patrick Tran, MD, FAAD

Physician-founder building governed clinical AI and agent systems where evidence, safety, accounting controls, and human judgment remain first-class architecture.

## Flagship systems

### [DermBrief EvidenceOps](https://github.com/patricktran1/agihackathon26dermbrief)

A physician-gated evidence workflow that scans curated dermatology journals, prioritizes recent PubMed papers with transparent deterministic signals, and converts a physician-selected abstract into a source-grounded learning card.

- schema-bound AI Grounder and separate Safety Auditor
- deterministic quote, mapping, and language vetoes
- durable evidence and approval history
- explicit physician release boundary
- CI, coverage, CodeQL, and contributor governance
- [Live product](https://agihackathon26dermbrief.vercel.app)

### [DermPathOS / BiopsyGraph](https://github.com/patricktran1/dermpathos-biopsygraph)

A graph-based biopsy follow-up safety net designed to surface missing patient notification, treatment scheduling, and physician-review steps.

- deterministic melanoma, SCC, BCC, and benign-result triage fixtures
- Neo4j relationship model for closed-loop follow-up
- CI, coverage, TypeScript validation, CodeQL, and Dependabot

### [Clinical Evidence Guardrails](https://github.com/patricktran1/clinical-ai-tools)

A dependency-free TypeScript library and service boundary for source-grounded clinical evidence workflows.

- curated source and journal matching
- exact source-quote verification and claim-to-evidence mapping
- configurable certainty policies and source-boundary checks
- multi-tenant Fetch API gateway
- tenant and route-isolated in-memory and atomic Redis rate limits
- W3C trace propagation and OpenTelemetry-compatible observability
- packed-package consumer testing, CI, coverage, and CodeQL
- [Contributor issues](https://github.com/patricktran1/clinical-ai-tools/issues)

### [AdrianOS](https://github.com/patricktran1/AdrianOS)

A mastery-based learning system designed around durable understanding rather than passive content completion.

- grade-adaptive interactive learning worlds
- deterministic curriculum and learning-loop contracts
- unit coverage, production builds, full Playwright browser matrix, and CodeQL

## Additional maintained products

### [Cantina](https://github.com/patricktran1/cantina)

A simulated procurement, clearing, and settlement network for autonomous agents with deterministic purchasing mandates, delivery verification, idempotent financial writes, balanced double-entry ledger postings, and a hash-chained audit trail.

### [Vital Passport](https://github.com/patricktran1/vitalpassport)

A patient-controlled health-information workspace built around source provenance, patient confirmation, medication and laboratory reconciliation, revocable clinician packets, and explicit privacy boundaries.

### [TagOnce](https://github.com/patricktran1/tagonce)

A cross-platform identity and campaign system with explicit platform adapters, deterministic mention-resolution states, mock-versus-production boundaries, tests, coverage, production builds, and CodeQL.

### [AION EHR launch site](https://github.com/patricktran1/aionehr)

A public product site with a persistent Neon waitlist endpoint, extracted deterministic request validation, native Node regression tests, dependency auditing, coverage, and CodeQL.

## Visible quality matrix

| Repository | Deterministic tests | Coverage | Production or package build | Browser or consumer validation | CodeQL |
|---|---:|---:|---:|---:|---:|
| DermBrief EvidenceOps | ✓ | ✓ | ✓ | ✓ | ✓ |
| DermPathOS / BiopsyGraph | ✓ | ✓ | ✓ |  | ✓ |
| Clinical Evidence Guardrails | ✓ | ✓ | ✓ | packed-package consumer | ✓ |
| AdrianOS | ✓ | ✓ | ✓ | full Playwright matrix | ✓ |
| Cantina | ✓ | ✓ | ✓ | critical procurement flow | ✓ |
| Vital Passport | ✓ | ✓ | ✓ |  | ✓ |
| TagOnce | ✓ | ✓ | ✓ |  | ✓ |
| AION EHR launch site | ✓ | ✓ | syntax-validated deploy surface |  | ✓ |

## Current focus

- governed clinical AI
- evidence provenance and auditability
- dermatology workflow automation
- human-in-the-loop agent systems
- multi-tenant API and observability boundaries
- deterministic financial and workflow controls
- physician-designed health software

## Engineering principles

1. Deterministic checks retain veto authority over model output.
2. Source boundaries and uncertainty stay visible.
3. Human approval is separate from machine validation.
4. Clinical workflows should fail closed when evidence is missing.
5. Financial writes must be balanced, idempotent, and outside model control.
6. Tenant identity and authorization boundaries must be explicit.
7. Tests should encode domain risk, not only interface behavior.
8. Deployable and distributable artifacts should be tested as consumers receive them.

## Collaboration

Focused contributions are welcome in [Clinical Evidence Guardrails](https://github.com/patricktran1/clinical-ai-tools/issues) and [DermBrief EvidenceOps](https://github.com/patricktran1/agihackathon26dermbrief/issues). Look for issues labeled `good first issue` or `help wanted`. Contributions should include tests, failure cases, and an explicit statement of safety or system boundaries.

## Connect

- [LinkedIn](https://www.linkedin.com/in/drpatricktran)
- [Website](https://trandermatology.com)
- [Email](mailto:patrick@trandermatology.com)

> AI should increase clinical leverage without laundering uncertainty into authority.
