# frozen_string_literal: true

require 'seed_manager'

SeedManager.clean
SeedManager.create(:work_experience, 2)
