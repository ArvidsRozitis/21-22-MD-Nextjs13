import React from "react";

type PageProps = {
  params: {
    recipeID: string;
  };
};
const SingleRecipe = ({ params: { recipeID } }: PageProps) => {
  return <div>Single recipe {recipeID}</div>;
};

export default SingleRecipe;
