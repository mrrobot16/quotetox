class Detox < ApplicationRecord
  # before_create :set_tox_free
  #
  # def set_tox_free
  #   self.tox_free = (Date.today - last_time).to_i
  # end

  def days_tox_free
    (Date.current - last_time).to_i
  end

end
