import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment votes', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement votes', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});