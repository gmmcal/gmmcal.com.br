# frozen_string_literal: true

RSpec.shared_examples '.save' do
  before do
    file_en = File.open(Rails.root.join('spec', 'backend', 'support', 'assets', 'cv-en.pdf'), 'rb')
    file_br = File.open(Rails.root.join('spec', 'backend', 'support', 'assets', 'cv-br.pdf'), 'rb')
    allow(object).to receive(:download_file).and_return(file_en, file_br)
  end

  it 'creates an entry' do
    object.save
    expect(object.model.count).not_to be_zero
  end
end
