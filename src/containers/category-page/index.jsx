// * React
import React from 'react'

// * Components
import Popular from "@/components/popular";

export default async function CategoryPage({ popular, title }) {
  return (
    <>
      <Popular popular={popular} title={title} />
    </>
  );
}
