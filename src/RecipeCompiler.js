function RecipeCompiler({ recipe, deleteRecipeHandler }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img style={{objectFit: "scale-down", width: "100%", height: "100%"}} src={recipe.photo}/>
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipeHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeCompiler;
