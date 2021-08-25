class FoodsController < ApplicationController
  
  def index
    foods = Food.all
    render component: "Foods", props: {foods: foods}
  end

  def new
    render component: "NewFood"
  end

  def create
    food = Food.new(food_params)
    if food.save
      redirect_to foods_path
    else
    end
  end

  def show
    food = Food.find(params[:id])
    render component: "Food", props: {food: food}
  end

  def edit
    food = Food.find(params[:id])
    render component: "EditFood", props: {food: food}
  end

  def update
    food = Food.find(params[:id])
    if food.update(food_params)
      redirect_to foods_path
    else
    end
  end

  def destroy
    Food.find(params[:id]).delete
    redirect_to foods_path
  end

  private 
  def food_params
    params.require(:food).permit(:name, :ingred1, :ingred2)
  end

end
