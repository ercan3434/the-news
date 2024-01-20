// * Next js Components
import { notFound } from "next/navigation";

// * Containers
import CategoryPage from "@/containers/category-page";

// * Get News Categories
export const getNewsCategories = async () => {
  try {
    // Request Options
    let requestOptions = {
      method: "GET",
      redirect: "follow",
      next: {
        revalidate: 3600,
      },
    };

    // News Categories
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/news/news-all-categories-db`,
      requestOptions
    );

    // api success
    if (res.ok) {
      const dataJson = await res.json();
      return dataJson;
    }

    // api failed
    let err = errorMessage(
      false,
      res.status || 404,
      `News Categories API Not Found`,
      `Not Found`
    );
    console.log("error fetch: ", err);

    return { new: [] };
  } catch (error) {
    // fetch failed
    let err = errorMessage(
      false,
      503,
      `Failed to fetch News Categories`,
      error
    );
    console.log("error fetch: ", err);
    return err;
  }
};

// * Get Filter News Categories
export const getFilterNewsCategories = async (category) => {
  try {
    // Request Options
    let requestOptions = {
      method: "GET",
      redirect: "follow",
      next: {
        revalidate: 3600,
      },
    };

    // News Filter Categories
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/news/news-all-categories-filter-db?categories=${category}`,
      requestOptions
    );

    // api success
    if (res.ok) {
      const dataJson = await res.json();
      return dataJson;
    }

    // api failed
    let err = errorMessage(
      false,
      res.status || 404,
      `News Filter Categories API Not Found`,
      `Not Found`
    );
    console.log("error fetch: ", err);

    return { new: [] };
  } catch (error) {
    // fetch failed
    let err = errorMessage(
      false,
      503,
      `Failed to fetch News Filter Categories`,
      error
    );
    console.log("error fetch: ", err);
    return err;
  }
};

export default async function CategoryNew({ params }) {
  // router params
  let { category } = params;
  let categoryNews;

  const data = await getFilterNewsCategories(category);

  // error page
  if (data.status == 503) {
    throw new Error("This is an error");
  }

  categoryNews = data.findCategory;

  // Not found category
  if (!categoryNews?.length) {
    notFound();
  }

  return (
    <div>
      <CategoryPage
        popular={categoryNews}
        title={categoryNews[0].section.shortestHeadline}
      />
    </div>
  );
}

// * Generate Static Params
export async function generateStaticParams() {
  const news = await getNewsCategories();

  // Generate Static
  return news.newCategory.map((newData) => ({
    category: `${newData?.replace(/-/g, " ")}`,
  }));
}
