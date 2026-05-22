import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'data', 'articles.json');

function htmlToMarkdown(html) {
  let md = html;
  
  // Block level elements
  md = md.replace(/<hr \/>/gs, '\n---\n');
  md = md.replace(/<h2>(.*?)<\/h2>/gs, '\n## $1\n');
  md = md.replace(/<h4>(.*?)<\/h4>/gs, '\n#### $1\n');
  
  // Figures and Images
  md = md.replace(/<figure>.*?<img src="(.*?)" alt="(.*?)".*?\/><figcaption>(.*?)<\/figcaption><\/figure>/gs, '\n![$2]($1)\n*$3*\n');
  md = md.replace(/<img src="(.*?)" alt="(.*?)".*?\/>/gs, '\n![$2]($1)\n');
  
  // Lists
  md = md.replace(/<ul>(.*?)<\/ul>/gs, (match, p1) => '\n' + p1 + '\n');
  md = md.replace(/<li>(.*?)<\/li>/gs, '- $1');
  
  // Paragraphs and Wrapper Divs
  md = md.replace(/<p>(.*?)<\/p>/gs, '\n$1\n');
  md = md.replace(/<div class="sources">(.*?)<\/div>/gs, '\n$1\n');
  
  // Inline formatting
  md = md.replace(/<strong>(.*?)<\/strong>/gs, '**$1**');
  md = md.replace(/<em>(.*?)<\/em>/gs, '*$1*');
  
  // Cleanup multiple blank lines into standard markdown spacing
  md = md.replace(/\n{3,}/g, '\n\n');
  
  return md.trim();
}

async function main() {
  try {
    const rawData = await fs.readFile(DATA_FILE, 'utf-8');
    let articles = JSON.parse(rawData);
    articles = articles.map(article => ({ ...article, content: htmlToMarkdown(article.content) }));
    await fs.writeFile(DATA_FILE, JSON.stringify(articles, null, 2));
    console.log('✅ Successfully reverted all articles to pure Markdown format!');
  } catch (error) { console.error('❌ Error fixing articles:', error); }
}

main();