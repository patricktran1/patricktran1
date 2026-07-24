# Patrick Tran, MD, FAAD

Physician-founder building governed clinical AI and agent systems where evidence, safety, accounting controls, operational resilience, and human judgment remain first-class architecture.

## Flagship systems

### [DermBrief EvidenceOps](https://github.com/patricktran1/agihackathon26dermbrief)

A physician-gated evidence workflow that scans curated dermatology journals, prioritizes recent PubMed papers with transparent deterministic signals, and converts a physician-selected abstract into a source-grounded learning card.

- schema-bound AI Grounder and separate Safety Auditor
- deterministic quote, mapping, and language vetoes
- durable evidence and approval history
- explicit physician release boundary
- production-build Playwright proof that Publisher remains blocked until physician approval
- browser assertion that autonomous releases remain zero after approval
- deterministic SHA-256 audit manifests chained across substantive workflow events
- integrity verification catches changed status, altered messages, reordered events, and sequence gaps
- data-minimized manifest API excludes abstracts, source quotations, learning-card content, and event messages
- dependency audit, regression suites, coverage, TypeScript, production build, retained browser evidence, and CodeQL
- [Live product](https://agihackathon26dermbrief.vercel.app)

### [DermPathOS / BiopsyGraph](https://github.com/patricktran1/dermpathos-biopsygraph)

A graph-based biopsy follow-up safety net designed to surface missing patient notification, treatment scheduling, and physician-review steps.

- deterministic melanoma, SCC, BCC, and benign-result triage fixtures
- Neo4j relationship model for closed-loop follow-up
- production-build Playwright flow that surfaces an urgent melanoma gap, inspects the graph path, completes the task, and verifies dashboard persistence
- separate CI-only Nitro Node artifact so browser testing exercises a runnable production server
- high-severity dependency audit with patched Daytona and OpenTelemetry dependency lines
- CI, coverage, TypeScript validation, retained browser evidence, CodeQL, and Dependabot

### [Clinical Evidence Guardrails](https://github.com/patricktran1/clinical-ai-tools)

A dependency-free TypeScript library, installed CLI, and operational service boundary for source-grounded clinical evidence workflows.

- curated source and journal matching
- exact source-quote verification and claim-to-evidence mapping
- configurable certainty policies and source-boundary checks
- packaged `clinical-evidence-check` CLI with machine-readable output and automation exit codes
- subprocess tests for passing cards, fabricated quotes, unsafe certainty, malformed input, help, and version
- clean consumer test that installs the tarball and executes the binary from `node_modules/.bin`
- multi-tenant Fetch API gateway
- tenant-and-route-isolated in-memory and atomic Redis rate limits
- W3C trace propagation and OpenTelemetry-compatible observability
- deterministic 480-request load harness across twelve isolated tenants
- fail-closed matrix for authentication, directory, limiter, payload, timeout, and upstream failures
- runnable Node 22 reference gateway with an HTTP-to-Fetch bridge and cross-tenant isolation self-test
- production-shaped service with validated tenant configuration, separate liveness and readiness, visible draining, and bounded shutdown
- multi-stage non-root container image tested through health, readiness, and fail-closed traffic checks
- OpenAPI 3.1 contract with deterministic drift tests
- CycloneDX SBOM, dependency audit, coverage, and retained operational artifacts
- packed-package consumer validation and provenance-enabled npm release workflow
- three claimable [external contributor sprint issues](https://github.com/patricktran1/clinical-ai-tools/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

### [AdrianOS](https://github.com/patricktran1/AdrianOS)

A mastery-based learning system designed around durable understanding rather than passive content completion.

- grade-adaptive interactive learning worlds
- deterministic curriculum and learning-loop contracts
- unit coverage, production builds, full Playwright browser matrix, and CodeQL

## Additional maintained products

### [HealthThread](https://github.com/patricktran1/HealthThread)

A patient-controlled longitudinal health-memory workspace for structured events, imported documents, trends, summaries, and conversational retrieval.

- normal source tree visible to GitHub language analysis, dependency tooling, CodeQL, and reviewers
- deterministic calendar-date, event-type, field-boundary, tag-deduplication, and document-path tests
- database values and memory text derived from the same normalized health-event record
- clean `npm ci`, repository and secret hygiene, zero-warning lint, TypeScript, coverage, and production build
- patched transitive `brace-expansion` and `js-yaml` dependency lines with a clean high-severity audit
- retained audit, lint, and coverage artifacts, CodeQL, Dependabot, contributor guidance, and privacy-aware pull request checks

### [Cantina](https://github.com/patricktran1/cantina)

A simulated procurement, clearing, and settlement network for autonomous agents with deterministic purchasing mandates, delivery verification, idempotent financial writes, balanced double-entry ledger postings, and a hash-chained audit trail.

### [Vital Passport](https://github.com/patricktran1/vitalpassport)

A patient-controlled health-information workspace built around source provenance, patient confirmation, medication and laboratory reconciliation, revocable clinician packets, and explicit privacy boundaries.

### [TagOnce](https://github.com/patricktran1/tagonce)

A cross-platform identity and campaign system with explicit platform adapters, deterministic mention-resolution states, mock-versus-production boundaries, tests, coverage, production builds, and CodeQL.

### [AION EHR launch site](https://github.com/patricktran1/aionehr)

A public product site with a persistent Neon waitlist endpoint, extracted deterministic request validation, native Node regression tests, dependency auditing, coverage, and CodeQL.

## Visible quality matrix

| Repository | Deterministic tests | Coverage | Production or package build | Browser, consumer, or operational validation | CodeQL |
|---|---:|---:|---:|---:|---:|
| DermBrief EvidenceOps | ✓ | ✓ | ✓ | physician release + audit integrity | ✓ |
| DermPathOS / BiopsyGraph | ✓ | ✓ | ✓ | closed-loop melanoma follow-up | ✓ |
| Clinical Evidence Guardrails | ✓ | ✓ | ✓ | packed API + CLI + load + fault + container | ✓ |
| AdrianOS | ✓ | ✓ | ✓ | full Playwright matrix | ✓ |
| HealthThread | ✓ | ✓ | ✓ | normalized event + repository hygiene gates | ✓ |
| Cantina | ✓ | ✓ | ✓ | production procurement flow | ✓ |
| Vital Passport | ✓ | ✓ | ✓ | patient-profile regression boundary | ✓ |
| TagOnce | ✓ | ✓ | ✓ | lint + package production build | ✓ |
| AION EHR launch site | ✓ | ✓ | syntax-validated deploy surface | waitlist contract | ✓ |

## Current focus

- governed clinical AI
- evidence provenance and auditability
- dermatology workflow automation
- human-in-the-loop agent systems
- multi-tenant API, rate-limit, and observability boundaries
- deterministic financial and workflow controls
- container lifecycle, readiness, graceful drain, and supply-chain evidence
- tamper-evident workflow receipts and data-minimized verification
- deployable reference services and operational failure drills
- adoption-ready packages and command-line tooling
- physician-designed health software

## Engineering principles

1. Deterministic checks retain veto authority over model output.
2. Source boundaries and uncertainty stay visible.
3. Human approval is separate from machine validation.
4. Clinical workflows should fail closed when evidence is missing.
5. Financial writes must be balanced, idempotent, and outside model control.
6. Tenant identity and authorization boundaries must be explicit.
7. Dependency outages must produce deterministic, traceable failure contracts.
8. Liveness and readiness describe different operational states.
9. Graceful shutdown should become visible before traffic stops.
10. Integrity receipts should minimize data while making protected changes detectable.
11. Tests should encode domain risk, not only interface behavior.
12. Deployable and distributable artifacts should be tested as consumers receive them.
13. Command-line tools should expose stable output and exit contracts without leaking source content.
14. Performance evidence should distinguish deterministic isolation checks from production SLO claims.

## Collaboration

Clinical Evidence Guardrails has three independent contributor tracks with explicit acceptance criteria:

- [Track 1: property-oriented journal normalization tests](https://github.com/patricktran1/clinical-ai-tools/issues/7)
- [Track 2: configurable source-boundary examples](https://github.com/patricktran1/clinical-ai-tools/issues/8)
- [Track 3: copyable Redis adapter and integration fixture](https://github.com/patricktran1/clinical-ai-tools/issues/19)

The repository includes first-time contributor onboarding, governance, review evidence requirements, and a documented contributor ladder. The target is three merged pull requests from three distinct external contributors. Maintainer-authored commits and automated accounts do not count.

## Connect

- [LinkedIn](https://www.linkedin.com/in/drpatricktran)
- [Website](https://trandermatology.com)
- [Email](mailto:patrick@trandermatology.com)

> AI should increase clinical leverage without laundering uncertainty into authority.
