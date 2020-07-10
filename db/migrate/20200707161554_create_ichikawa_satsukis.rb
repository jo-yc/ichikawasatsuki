class CreateIchikawaSatsukis < ActiveRecord::Migration[6.0]
  def change
    create_table :ichikawa_satsukis do |t|

      t.timestamps
    end
  end
end
