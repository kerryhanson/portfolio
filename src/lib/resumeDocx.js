import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'

const FONT = 'Calibri'
const BODY_SIZE = 19 // 9.5pt
const BODY_SMALL = 18 // 9pt
const SECTION_SIZE = 18 // 9pt
const NAME_SIZE = 34 // 17pt
const TITLE_SIZE = 20 // 10pt
const COMPANY_SIZE = 21 // 10.5pt
const SPACING_AFTER_BODY = 120
const SPACING_AFTER_SECTION = 200
const SPACING_AFTER_ITEM = 60
const SPACING_AFTER_COMPACT = 100

function body(text, options = {}) {
  return new Paragraph({
    spacing: { after: options.after ?? SPACING_AFTER_BODY },
    children: [
      new TextRun({
        text,
        font: FONT,
        size: options.size ?? BODY_SIZE,
        bold: options.bold,
        italics: options.italics,
        color: options.color,
      }),
    ],
  })
}

function bullet(text, size = BODY_SIZE) {
  return new Paragraph({
    spacing: { after: SPACING_AFTER_ITEM },
    bullet: { level: 0 },
    children: [new TextRun({ text, font: FONT, size })],
  })
}

function sectionHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 160, after: 100 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FONT,
        size: SECTION_SIZE,
        bold: true,
        characterSpacing: 20,
      }),
    ],
  })
}

function inlineStrengthLine(label, items) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: `${label}: `, font: FONT, size: BODY_SMALL, bold: true }),
      new TextRun({ text: items.join(' • '), font: FONT, size: BODY_SMALL }),
    ],
  })
}

export async function buildResumeDocx(resume) {
  const children = [
    new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: resume.name, font: FONT, size: NAME_SIZE, bold: true })],
    }),
    new Paragraph({
      spacing: { after: 100 },
      children: [new TextRun({ text: resume.title, font: FONT, size: TITLE_SIZE, bold: true })],
    }),
    body(
      [resume.contact.phone, resume.contact.email, 'LinkedIn', 'Portfolio'].join(' | '),
      { size: BODY_SMALL, after: SPACING_AFTER_SECTION },
    ),
    sectionHeading('Summary'),
    ...resume.summaryParagraphs.map((paragraph) => body(paragraph, { size: BODY_SIZE })),
    sectionHeading('Strengths'),
  ]

  for (const group of resume.strengths) {
    children.push(inlineStrengthLine(group.category, group.items))
  }

  children.push(inlineStrengthLine('Tools', resume.tools))
  children.push(sectionHeading('Experience'))

  for (const job of resume.experience) {
    if (job.featured) {
      children.push(
        new Paragraph({
          spacing: { before: 140, after: 40 },
          children: [
            new TextRun({
              text: `${job.displayCompany} | ${job.location}`,
              font: FONT,
              size: COMPANY_SIZE,
              bold: true,
            }),
          ],
        }),
      )

      for (const role of job.roles) {
        children.push(
          new Paragraph({
            spacing: { before: 80, after: 40 },
            children: [
              new TextRun({ text: role.title, font: FONT, size: BODY_SIZE, bold: true }),
              new TextRun({ text: `  ${role.period}`, font: FONT, size: BODY_SMALL }),
            ],
          }),
        )
        children.push(...role.highlights.map((highlight) => bullet(highlight)))
      }

      continue
    }

    for (const role of job.roles) {
      children.push(
        new Paragraph({
          spacing: { before: 100, after: 30 },
          children: [
            new TextRun({
              text: `${job.company} | ${job.location}`,
              font: FONT,
              size: BODY_SIZE,
              bold: true,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 30 },
          children: [
            new TextRun({ text: role.title, font: FONT, size: BODY_SIZE, bold: true }),
            new TextRun({ text: `  ${role.period}`, font: FONT, size: BODY_SMALL }),
          ],
        }),
        body(role.compactSummary, { size: BODY_SMALL, after: SPACING_AFTER_COMPACT }),
      )
    }
  }

  children.push(sectionHeading('Education'))

  for (const edu of resume.education) {
    children.push(
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({
            text: `${edu.school} | ${edu.location}`,
            font: FONT,
            size: BODY_SIZE,
            bold: true,
          }),
        ],
      }),
      body(`${edu.degree} · ${edu.period}`, { size: BODY_SMALL, after: 120 }),
    )
  }

  children.push(sectionHeading('Certifications'))

  for (const cert of resume.certifications) {
    children.push(
      new Paragraph({
        spacing: { after: 30 },
        children: [new TextRun({ text: cert.name, font: FONT, size: BODY_SIZE, bold: true })],
      }),
      body(`${cert.issuer} · ${cert.year} · Specialization: ${cert.specialization}`, {
        size: BODY_SMALL,
        after: 120,
      }),
    )
  }

  const document = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 864,
              right: 864,
              bottom: 864,
              left: 864,
            },
          },
        },
        children,
      },
    ],
  })

  return Packer.toBuffer(document)
}
