# frozen_string_literal: true

require 'seed_manager'

SeedManager.clean
SeedManager.create(:skill, 2)
