class AddMessageIdToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_id, :integer
    add_column :users, :message_id, :integer
  end
end
