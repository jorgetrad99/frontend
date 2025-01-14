import React from 'react';
import { mount } from 'enzyme';
import Certificates from '../../components/Certificates';
import getData from '../../utils/getData';

const data = getData('http://localhost:3000');
describe('<Certificates />', () => {
  const certificates = mount(<Certificates data={data.certificates} />);

  test('Certificates render', () => {
    expect(certificates.length).toEqual(1);
  });

  test('Certificates title', () => {
    expect(certificates.find('.Certificates-title').length).toEqual(1);
  });

  test('Certificates haves 3 items', () => {
    expect(certificates.find('.Certificates-item').length).toBeGreaterThan(2);
  });
});
