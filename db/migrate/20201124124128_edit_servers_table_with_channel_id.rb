class EditServersTableWithChannelId < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :channel_id, :integer
  end
end
