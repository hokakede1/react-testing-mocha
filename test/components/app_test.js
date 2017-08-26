import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests
describe('App', ()=>{
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })
  it('shows a comment box', () => {  // create an instance of App
    expect(component.find('.CommentBox')).to.exist;
  });
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })
});
