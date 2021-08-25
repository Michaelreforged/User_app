class FoodsController < ApplicationController
  
  def index
    foods = Food.all
    render component: "Foods", props: {foods: foods}
  end


end
