class CreateDatos < ActiveRecord::Migration
  def change
    create_table :datos do |t|
      t.integer :presion 
      t.integer :temperatura
      t.timestamps
    end
  end
end
