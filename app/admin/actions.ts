"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createArticle, updateArticle, deleteArticle } from "@/lib/articles";
import { sendNewsletterForArticle } from "@/lib/mailer";
import {
  validateCredentials,
  getValidSessionToken,
  isAuthenticated,
  ADMIN_COOKIE,
} from "@/lib/auth";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const username = (formData.get("username") as string) ?? "";
  const password = (formData.get("password") as string) ?? "";

  if (!validateCredentials(username, password)) {
    return { error: "Invalid username or password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, getValidSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  redirect("/admin/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  redirect("/admin");
}

export async function createArticleAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  if (!(await isAuthenticated())) redirect("/admin");

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const author = (formData.get("author") as string)?.trim() || "Editorial Staff";
  const published = formData.get("published") === "on";
  const featured = formData.get("featured") === "on";
  const coverImage = (formData.get("coverImage") as string)?.trim() || undefined;
  const pdfUrl = (formData.get("pdfUrl") as string)?.trim() || undefined;
  const accentColor = (formData.get("accentColor") as string)?.trim() || undefined;
  const scheduledRaw = (formData.get("scheduledAt") as string)?.trim();
  const scheduledAt = scheduledRaw ? new Date(scheduledRaw).toISOString() : undefined;

  if (!title || !slug || !excerpt || !content || !category) {
    return { error: "All fields except Author are required." };
  }

  const publishedAt = scheduledAt ?? new Date().toISOString();

  let article;
  try {
    article = await createArticle({
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      publishedAt,
      published,
      featured,
      coverImage,
      pdfUrl,
      accentColor,
      scheduledAt,
    });
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save article. Please try again." };
  }

  // Send newsletter to subscribers if publishing immediately (not scheduled)
  if (published && !scheduledAt) {
    sendNewsletterForArticle(article).catch(() => {});
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function updateArticleAction(
  id: string,
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  if (!(await isAuthenticated())) redirect("/admin");

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();
  const excerpt = (formData.get("excerpt") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();
  const category = (formData.get("category") as string)?.trim();
  const author = (formData.get("author") as string)?.trim() || "Editorial Staff";
  const published = formData.get("published") === "on";
  const featured = formData.get("featured") === "on";
  const coverImage = (formData.get("coverImage") as string)?.trim() || undefined;
  const pdfUrl = (formData.get("pdfUrl") as string)?.trim() || undefined;
  const accentColor = (formData.get("accentColor") as string)?.trim() || undefined;
  const scheduledRaw = (formData.get("scheduledAt") as string)?.trim();
  const scheduledAt = scheduledRaw ? new Date(scheduledRaw).toISOString() : undefined;

  if (!title || !slug || !excerpt || !content || !category) {
    return { error: "All fields except Author are required." };
  }

  try {
    await updateArticle(id, {
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      published,
      featured,
      coverImage,
      pdfUrl,
      accentColor,
      scheduledAt,
    });
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Failed to save article. Please try again." };
  }

  revalidatePath("/");
  revalidatePath(`/article/${slug}`);
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function deleteArticleAction(id: string) {
  if (!(await isAuthenticated())) redirect("/admin");
  await deleteArticle(id);
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}

export async function togglePublishAction(id: string, published: boolean) {
  if (!(await isAuthenticated())) redirect("/admin");
  await updateArticle(id, { published });
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
