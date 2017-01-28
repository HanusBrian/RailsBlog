class CreatePosts < ActiveRecord::Migration[5.0]

  def up
    create_table :posts do |t|
      t.string "user_name"
      t.string "title", :null => false
      t.blob "content", :null => false

      t.timestamps
    end
  end

  def down
    drop_table :posts
  end

end
