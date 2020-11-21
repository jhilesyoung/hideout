class EditServersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :category_id
  end
end
