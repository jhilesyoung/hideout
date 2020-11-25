class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.integer :server_id, null: false 
      t.integer :author_id, null: false
    end
  end
end
