import ArticleForm from "../components/ArticleForm";
import { createArticleAction } from "@/app/admin/actions";

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-ink"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          New Article
        </h1>
        <p className="text-sm text-steel mt-1">
          Write and publish a new investigation or story.
        </p>
      </div>

      <div className="bg-white border border-border p-6 md:p-8">
        <ArticleForm action={createArticleAction} submitLabel="Publish Article" />
      </div>
    </div>
  );
}
