import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialInputState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [newRecipeData, setNewRecipeData] = useState({ ...initialInputState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setNewRecipeData({
      ...newRecipeData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(newRecipeData);
    setNewRecipeData({ ...initialInputState });
  };

  return (
    <form name="create">
      <table>
      <tbody>
        <tr>
          <td>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={newRecipeData.name}
            />
          </td>
          <td>
            <input
              id="cuisine"
              type="text"
              name="cuisine"
              placeholder="Cuisine"
              onChange={handleChange}
              value={newRecipeData.cuisine}
            />
          </td>
          <td>
            <input
              id="photo"
              type="text"
              name="photo"
              placeholder="URL"
              onChange={handleChange}
              value={newRecipeData.photo}
            />
          </td>
          <td>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={newRecipeData.ingredients}
            />
          </td>
          <td>
            <textarea
              id="preparation"
              name="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={newRecipeData.preparation}
            />
          </td>
          <td>
            <button onClick={handleSubmit} type="submit">
              Create
            </button>
          </td>
        </tr>
      </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
