class RemoveUniqueConstraintFromReviews < ActiveRecord::Migration[7.0]
  def change
    remove_index :reviews, name: 'index_reviews_on_user_id_and_product_id'
  end
end
