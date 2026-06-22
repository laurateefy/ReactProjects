import './Main.css'
export default function Main() {
  return (
    <main>
      <h1>Welcome to Chef Claude's Kitchen!</h1>
      <p>Discover delicious recipes and cooking tips from Chef Claude.</p>
      <form className="ingredient-form">
        <input type="text" id="email" name="ingredient" placeholder="eg. Oregano" />
        <button type="submit">Add Ingredient </button>
      </form>
    </main>
  )
}
