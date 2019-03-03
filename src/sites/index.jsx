import React, { Component, Fragment } from 'react';

import './style.css';

import {
  Stepper,
  IngredientContainer,
  Ingredient,
  Navigation,
  RecipeCard,
  Search,
  Container,
  FinalOutput,
} from '../components';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'create',
      recipes: [],
      ingredients: [],
      plan: [],
      selectedIngredients: [],
      searchTerm: '',
      steps: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIngAdd = this.handleIngAdd.bind(this);
    this.handleSteAdd = this.handleSteAdd.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.handlePlanAdd = this.handlePlanAdd.bind(this);
  }

  componentWillMount() {
    fetch('/api?type=recipes')
      .then((r) => {
        this.setState({ recipes: [...r] });
      }).catch((e) => {
        console.log(e);
      });
  }

  handlePlanAdd(name) {
    this.setState(prevState => ({
      plan: [...prevState.plan, prevState.recipes.find(rec => rec.name === name)],
    }));
  }

  updatePage(value) {
    this.setState({ page: value });
  }

  handleSubmit(name) {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, {
        ingredients: [...prevState.selectedIngredients],
        steps: [...prevState.steps],
        name: name,
      }],
      selectedIngredients: [],
      steps: [],
      name: '',
    }));
  }

  handleSteAdd(value) {
    this.setState(prevState => ({
      steps: [...prevState.steps, value],
    }));
  }

  handleIngAdd(value) {
    this.setState(prevState => ({
      selectedIngredients: [...prevState.selectedIngredients, value],
    }));
  }

  submitSearch(value) {
    fetch(`/api?type=list&query=${encodeURIComponent(value)}`)
      .then(r => r.json())
      .then((r) => {
        console.log(r);
        this.setState({ ingredients: [...r] });
      });
  }

  handleSearch(value) {
    this.setState({ searchTerm: value });
  }

  render() {
    const { page, recipes, searchTerm, ingredients, selectedIngredients, steps, plan } = this.state;

    /*
    const elmRecipes = recipes.map(recipe => (
      <RecipeCard
        key={recipe.name}
        name={recipe.name}
        description={recipe.description}
        price={recipe.price}
      />
    ));

    let content;

    if (page === 'news') {
      content = (
        <Fragment>
          <Container>
            {elmRecipes}
          </Container>
        </Fragment>
      );
    }
    */

    let elmOutput = null;

    if (page === 'create') {
      elmOutput = (
        <IngredientContainer
          current={selectedIngredients}
          submit={this.handleSubmit}
          stepTool={(
            <Stepper step={this.handleSteAdd} steps={steps} />
          )}
        >
          <Search onUpdate={this.handleSearch} onSearch={this.submitSearch} />
          {
            ingredients.map(ingredient => (
              <Ingredient
                key={ingredient.name}
                name={ingredient.name}
                searchId={ingredient.ndbno}
                add={this.handleIngAdd}
              />
            ))
          }
        </IngredientContainer>
      );
    } else if (page === 'recipes') {
      elmOutput = recipes.map((recipe, i) => (
        <RecipeCard
          key={recipe.name + i}
          name={recipe.name}
          ingredients={recipe.ingredients}
          handlePlanAdd={this.handlePlanAdd}
        />
      ));
    } else if (page === 'budget') {
      const totalNut = {
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      };
  
      let totalPrice = 0.00;
  
      plan.forEach((rec) => {
        rec.ingredients.forEach((ing) => {
          totalNut.calories += parseFloat(ing.nutrition.calories);
          totalNut.fat += parseFloat(ing.nutrition.fat);
          totalNut.carbs += parseFloat(ing.nutrition.carbs);
          totalNut.protein += parseFloat(ing.nutrition.protein);
          totalPrice += parseFloat(ing.nutrition.price);
        });
      });

      elmOutput = (
        <Fragment>
          {plan.map((recipe, i) => (
            <RecipeCard
              key={recipe.name + i}
              name={recipe.name}
              ingredients={recipe.ingredients}
            />
          ))}
          <FinalOutput
            nut={totalNut}
            price={totalPrice}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Navigation updatePage={this.updatePage}>Hello</Navigation>
        <Container>
          {elmOutput}
        </Container>
      </Fragment>
    );
  }
}

export default Index;
