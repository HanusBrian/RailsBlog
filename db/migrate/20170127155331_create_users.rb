class CreateUsers < ActiveRecord::Migration[5.0]

  def up
    create_table :users do |t|
      t.string "first_name", :limit => 50, :null => false
      t.string "last_name", :limit => 50, :null => false
      t.string "user_name", :limit => 50, :null => false, :unique => true
      t.string "email", :null => false
      t.string "password", :null => false

      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
