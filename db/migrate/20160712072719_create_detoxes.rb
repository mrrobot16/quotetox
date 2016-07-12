class CreateDetoxes < ActiveRecord::Migration[5.0]
  def change
    create_table :detoxes do |t|
      t.string :drug_name
      t.date :last_time
      t.integer :tox_free

      t.timestamps
    end
  end
end
