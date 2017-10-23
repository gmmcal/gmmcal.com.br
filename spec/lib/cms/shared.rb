RSpec.shared_examples ".save" do
  let (:data) { file_content.to_h.with_indifferent_access }

  subject { described_class.new(data, {}) }

  before(:each) do
    allow(subject).to receive(:fields_with_locales).and_return(data['fields'])
    allow(subject).to receive(:url_for_field).and_return('file.ext')
  end

  it 'should create an entry' do
    subject.save
    expect(subject.model.count).to_not be_zero
  end
end