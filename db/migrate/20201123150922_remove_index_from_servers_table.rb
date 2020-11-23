class RemoveIndexFromServersTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, :author_id
  end
end
