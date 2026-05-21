import { notFound } from "next/navigation";
import ArticleForm from "../../components/ArticleForm";
import { getArticleById } from "@/lib/articles";
import { updateArticleAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) notFound();

  const boundAction = updateArticleAction.bind(null, id);

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Edit Article
        </h1>
        <p className="text-sm text-steel mt-1 line-clamp-1">{article.title}</p>
      </div>

      <div className="bg-white border border-border p-6 md:p-8">
        <ArticleForm
          action={boundAction}
          initial={{
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt,
            content: article.content,
            category: article.category,
            author: article.author,
            published: article.published,
            featured: article.featured,
          }}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
