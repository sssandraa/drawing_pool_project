class CreateDreams < ActiveRecord::Migration[6.1]
  def change
    create_table :dreams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image
      t.text :description
      t.string :date_time

      t.timestamps
    end
  end
end
