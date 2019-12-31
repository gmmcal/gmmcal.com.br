# frozen_string_literal: true

require 'seed_manager'

SeedManager.clean
SeedManager.create(:education, 2)
