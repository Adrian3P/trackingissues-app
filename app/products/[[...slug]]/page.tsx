import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string }; //to access query string params
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
