import Search from "@/components/Search/Search";
import React from "react";
import RecipeList from "@/components/RecipeList/RecipeList";

const SearchPage = () => {
  return (
    <div>
      <Search />
      <RecipeList />     
    </div>
  );
};

export default SearchPage;
