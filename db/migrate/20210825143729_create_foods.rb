class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :ingred1
      t.string :ingred2

      t.timestamps
    end
  end
end
