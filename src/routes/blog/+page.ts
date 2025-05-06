// src/routes/blog/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  // posts/*.svx をビルド時に即時読み込み
  const modules = import.meta.glob('./posts/*.svx', { eager: true });

  // パス→スラグ＋メタデータ(title) をまとめて抜き出し
  const posts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.svx$/, '');
    const { title, about } = (mod as any).metadata;
    return { slug, title, about };
  });

  return { posts };
};
