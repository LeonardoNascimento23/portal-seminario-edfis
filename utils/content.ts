import fs from 'fs/promises';
import path from 'path';

interface NewsItem {
  title: string;
  date: string;
  content: string;
  image: string;
}

interface WorkshopItem {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  instructor: string;
}

interface GalleryImage {
  url: string;
  description: string;
}

// Caminho base do conteúdo
const contentDir = path.join(process.cwd(), 'content');

// Lê todas as notícias (retorna array de NewsItem + slug)
export async function getAllNews(): Promise<(NewsItem & { slug: string })[]> {
  const newsDir = path.join(contentDir, 'news');
  const files = await fs.readdir(newsDir);
  const news = await Promise.all(files.map(async (file) => {
    const slug = file.replace('.json', '');
    const data = await fs.readFile(path.join(newsDir, file), 'utf8');
    return { slug, ...(JSON.parse(data) as NewsItem) };
  }));
  // Ordena por data decrescente (mais recentes primeiro)
  return news.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

// Lê uma notícia específica por slug
export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const data = await fs.readFile(path.join(contentDir, 'news', `${slug}.json`), 'utf8');
    return JSON.parse(data) as NewsItem;
  } catch {
    return null;
  }
}

// Funções para workshops
export async function getAllWorkshops(): Promise<(WorkshopItem & { slug: string })[]> {
  const wsDir = path.join(contentDir, 'workshops');
  const files = await fs.readdir(wsDir);
  const workshops = await Promise.all(files.map(async (file) => {
    const slug = file.replace('.json', '');
    const data = await fs.readFile(path.join(wsDir, file), 'utf8');
    return { slug, ...(JSON.parse(data) as WorkshopItem) };
  }));
  return workshops.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getWorkshopBySlug(slug: string): Promise<WorkshopItem | null> {
  try {
    const data = await fs.readFile(path.join(contentDir, 'workshops', `${slug}.json`), 'utf8');
    return JSON.parse(data) as WorkshopItem;
  } catch {
    return null;
  }
}

// Lê dados da galeria
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const data = await fs.readFile(path.join(contentDir, 'gallery', 'metadata.json'), 'utf8');
  return (JSON.parse(data).images) as GalleryImage[];
} 