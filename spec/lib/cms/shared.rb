RSpec.shared_examples ".save" do
  let (:data) { file_content.to_h.with_indifferent_access }

  subject { described_class.new(data, {}, true) }

  before(:each) do
    allow_any_instance_of(described_class).to receive(:fields_with_locales).and_return(data['fields'])
    allow_any_instance_of(described_class).to receive(:url_for_field).and_return('file.ext')
  end

  it 'should create an entry' do
    subject.save
    expect(subject.model.count).to_not be_zero
  end
end
