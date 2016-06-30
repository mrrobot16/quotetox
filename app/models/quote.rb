class Quote < ApplicationRecord
  # Validations
  validates :quote, presence: true;
end
