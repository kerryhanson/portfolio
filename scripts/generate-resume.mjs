import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { profile } from '../src/data/profile.js'
import { buildResumeModel } from '../src/lib/resumeData.js'
import { buildResumeDocx } from '../src/lib/resumeDocx.js'
import { buildResumeHtml } from '../src/lib/resumeHtml.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outputDir = path.join(rootDir, 'public', 'resume')
const pdfPath = path.join(outputDir, 'kerry-hanson-resume.pdf')
const docxPath = path.join(outputDir, 'kerry-hanson-resume.docx')

async function writeDocx(resume) {
  const buffer = await buildResumeDocx(resume)
  await fs.writeFile(docxPath, buffer)
}

async function writePdf(resume) {
  const html = buildResumeHtml(resume)
  const browser = await puppeteer.launch({ headless: true })
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    await page.pdf({
      path: pdfPath,
      format: 'letter',
      printBackground: true,
      margin: {
        top: '0.55in',
        right: '0.55in',
        bottom: '0.55in',
        left: '0.55in',
      },
    })
  } finally {
    await browser.close()
  }
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true })

  const resume = buildResumeModel(profile)
  await Promise.all([writeDocx(resume), writePdf(resume)])

  console.log(`Wrote ${path.relative(rootDir, pdfPath)}`)
  console.log(`Wrote ${path.relative(rootDir, docxPath)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
