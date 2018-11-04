# frozen_string_literal: true

RSpec.shared_examples 'unauthorized' do
  it 'fails' do
    expect(response).not_to be_successful
  end

  it 'redirects to login page' do
    expect(response).to redirect_to(%i[new user session])
  end
end
