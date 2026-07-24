import { readFileSync, writeFileSync } from 'node:fs'

const readme = readFileSync('README.md', 'utf8')
const failures = []

const requiredHeadings = [
  '# Patrick Tran, MD, FAAD',
  '## Flagship systems',
  '## Visible quality matrix',
  '## Portfolio automation',
  '## Engineering principles',
  '## Collaboration',
]

const requiredRepositories = [
  'patricktran1/agihackathon26dermbrief',
  'patricktran1/dermpathos-biopsygraph',
  'patricktran1/clinical-ai-tools',
  'patricktran1/AdrianOS',
  'patricktran1/HealthThread',
]

const requiredEvidence = [
  '65% lines, 70% functions, and 75% branches',
  '90% lines and functions and 85% branches',
  'blocking pull-request dependency review',
  'OpenSSF Scorecard',
  'reproducible `npm ci`',
]

for (const heading of requiredHeadings) {
  if (!readme.includes(heading)) failures.push({ code: 'missing_heading', value: heading })
}

for (const repository of requiredRepositories) {
  if (!readme.includes(repository)) failures.push({ code: 'missing_repository', value: repository })
}

for (const evidence of requiredEvidence) {
  if (!readme.includes(evidence)) failures.push({ code: 'missing_actions_evidence', value: evidence })
}

const matrixRows = readme
  .split('\n')
  .filter((line) => /^\| (DermBrief|DermPathOS|Clinical Evidence|AdrianOS|HealthThread|Cantina|Vital Passport|TagOnce|AION EHR)/.test(line))

if (matrixRows.length < 9) {
  failures.push({ code: 'incomplete_quality_matrix', value: matrixRows.length })
}

const prohibitedClaims = [
  /three external contributors/i,
  /HIPAA[- ]compliant/i,
  /clinically validated/i,
  /regulatory cleared/i,
  /OpenSSF score\s*[:=]\s*\d/i,
]

for (const pattern of prohibitedClaims) {
  if (pattern.test(readme)) failures.push({ code: 'unsupported_claim', value: String(pattern) })
}

const markdownLinks = [...readme.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1])
for (const target of markdownLinks) {
  if (!target.trim()) failures.push({ code: 'empty_link_target' })
  if (target.startsWith('http://')) failures.push({ code: 'insecure_link', value: target })
}

const trailingWhitespaceLines = readme
  .split('\n')
  .map((line, index) => ({ line: index + 1, value: line }))
  .filter(({ value }) => /[ \t]+$/.test(value))
  .map(({ line }) => line)

if (trailingWhitespaceLines.length > 0) {
  failures.push({ code: 'trailing_whitespace', lines: trailingWhitespaceLines })
}

const report = {
  schemaVersion: 1,
  requiredHeadingCount: requiredHeadings.length,
  requiredRepositoryCount: requiredRepositories.length,
  requiredEvidenceCount: requiredEvidence.length,
  matrixRowCount: matrixRows.length,
  markdownLinkCount: markdownLinks.length,
  failures,
  passed: failures.length === 0,
}

writeFileSync('profile-validation.json', `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))

if (!report.passed) process.exit(1)
